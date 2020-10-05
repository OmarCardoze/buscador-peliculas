const $container = document.getElementById('container'),
      $searchInput = document.getElementById('searchInput'),
      $btnSearch = document.getElementById('btnSearch'),
      $resultS = document.getElementById('result')

const APIKEY = 'f0b7eec8'

$searchInput.addEventListener('keyup', () => {
    let query = ($searchInput.value);
    consultar(query)
})

$btnSearch.addEventListener('click', () => {
    let query = ($searchInput.value);
    consultar(query)
})

async function consultar(query) {
    try {

            const api = await fetch(`https://www.omdbapi.com/?s=${query}&apikey=${APIKEY}`)
            const result = await api.json()

            draw(result.Search)

    } catch (error) {
        $container.innerHTML = `
        <div class="error-message">
            <h2>Lo sentimos, no encontramos su búsqueda</h2>
        </div>
        `
    }
}

consultar('rocky')

function draw(result) {

    $container.innerHTML = ""
    $resultS.textContent =  "Números de resultados: " + result.length;
    result.map(movie => {

        const { Poster, Title, Type, Year } = movie;
    
        $container.innerHTML += `
        <div class="movie-container">
            <img src=${Poster} alt=${Title}>
            <div class="container-info">
                <h3>Title: ${Title}</h3>
                <p>Type: ${Type}</p>
                <p>Year: ${Year}</p> 
            </div>
        </div>
        `
    })
}

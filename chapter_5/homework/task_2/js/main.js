// $(document).ready(function() {
//     $.get(
// "https://pokeapi.co/api/v2/pokemon/", {

// },
// function(data) {
//     console.log(data)
// }
//     )

// })

let thisPage = 0;

const pokemonlist = document.getElementById("pokemonlist")
    console.log(pokemonlist);

const fetchPokemon = async () => {
    // const promises = [];
    // for( i = 1; i <= 20; i++) {
        const url = `https://pokeapi.co/api/v2/pokemon/?offset=${thisPage}&limit=20`;
        // promises.push(fetch(url).then((res) => res.json()));
        const res = await fetch(url);
        const result = await res.json();
        const pokemon = result.results.map( (result, index) =>
        ({
            name: result.name,
            id: index + 1,
            apiUrl: result.url,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index+1}.png`
        }))
        displayPokemon(pokemon)

    }
    // Promise.all(promises).then(results => {
    //     const pokemon = results.map (result => ({
    //         name: result.name,
    //         id: result.id,
    //         img: result.sprites['front_default'],
    //         type: result.types.map(type => type.type.name).join(', '),
    //         height: result.height,
    //         weight: result.weight
    //     }));
    //     displayPokemon(pokemon);
    // })

    const displayPokemon = (pokemon) => {
        console.log(pokemon);
        const pokemonHTMLString = pokemon.map(pokeapi => `
        <li class="text" onclick = "selectPokemon(${pokeapi.id})">
        <h2>${pokeapi.name}</h2>
        </li>
        `).join('')
        pokemonlist.innerHTML = pokemonHTMLString;
    }

    const selectPokemon = async(id) => {
        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
        const res =  await fetch(url);
        const pokeapi = await res.json();
        displayPopup(pokeapi)
    } 

    const displayPopup = (pokeapi) => {
        const img = pokeapi.sprites['front_default'];
        const type = pokeapi.types.map(type => 
            type.type.name).join(', ');
        const height = pokeapi.height;
        const weight = pokeapi.weight
        const htmlString = `
            <div class = "popup">
                <button id="closeBtn" onclick="closePopup()">Close</button>
        <div class="text">
        <h2 class="text-title">${pokeapi.name}</h2>
        <img class="text-image" src="${img}"/>
        <p>Height: ${pokeapi.height} | Weight: ${pokeapi.weight} | Type: ${type}</p>

        </div>
            </div>
        `;
        pokemonlist.innerHTML = htmlString + pokemonlist.innerHTML
        console.log(htmlString)
    }
    const closePopup = () => {
        const popup = document.querySelector('.popup');
        popup.parentElement.removeChild(popup)
    }
fetchPokemon();


function nextPage(){
    thisPage+=20;
    fetchPokemon();
}

function previousPage() {
    if(!thisPage)return;
    thisPage-=20
    fetchPokemon();
}

const nextBtn = document.querySelector('#next')
nextBtn.onclick = function() {
    nextPage();
    // fetchPokemon()
}

const previousBtn = document.querySelector('#previous')
previousBtn.onclick = function() {
    previousPage();
    // fetchPokemon()
}
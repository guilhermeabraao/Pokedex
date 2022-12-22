const pokemonInfo = document.querySelector('.pokemonInfo');
const pokemonText = document.querySelector('.pokemonText');
const pokemonID = document.querySelector('.pokemonID');
const searchBtn = document.querySelector('.search');
const randomBtn = document.querySelector('.random');
const pokemonArt = document.querySelector('.pokemonArt img');
const pokemonIcon = document.querySelector('.pokemonIcon img');
const pokemonName = document.querySelector('.nameDetail');
const idDetail = document.querySelector('.idDetail');
const type1 = document.querySelector('.type1');
const type2 = document.querySelector('.type2');
const height = document.querySelector('.height');
const weight = document.querySelector('.weight');
const abilities = document.querySelector('.abilities span');
const baseStat = document.querySelector('.base');
const effortStat = document.querySelector('.effort');


pokemonID.addEventListener('keyup', (event) => {
    event.preventDefault();
    event.stopPropagation();


    if (pokemonID.value <= 0) {
        pokemonID.value = 1;
    }
    if (pokemonID.value > 649) {
        pokemonID.value = 649;
    }
})

searchBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
        const pokemon = await buscarPokemon(pokemonID.value);
        preencherPokedex(JSON.parse(pokemon));
    } catch (erro) {
        console.log(erro);
    }
})

randomBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
        const random = Math.floor(Math.random() * (650 - 1) + 1);
        pokemonID.value = random;
        const pokemon = await buscarPokemon(random);
        preencherPokedex(JSON.parse(pokemon));
    } catch (erro) {
        console.log(erro);
    }
})

const preencherPokedex = (pokemon) => {
    pokemonName.textContent = pokemon.name;
    pokemonArt.srcset = pokemon.sprites.versions['generation-v']['black-white'].animated.front_default;
    pokemonIcon.srcset = pokemon.sprites.front_default;
    idDetail.textContent = pokemon.id.toString().padStart(3, '0');

    type1.srcset = `./assets/types/${pokemon.types[0].type.name}.png`;
    if (pokemon.types.length == 1) {
        type2.classList.add('invisible');
    } else {
        type2.classList.remove('invisible');
        type2.srcset = `./assets/types/${pokemon.types[1].type.name}.png`;
    }

    height.textContent = `${pokemon.height / 10}m`;
    weight.textContent = `${pokemon.weight / 10}kg`;

    abilities.textContent = '';
    for (const ability of pokemon.abilities) {
        if (pokemon.abilities.indexOf(ability) == pokemon.abilities.length - 1) {
            abilities.textContent += ` ${ability.ability.name}`;
        } else {
            abilities.textContent += ` ${ability.ability.name},`;
        }
    }


    baseStat.textContent = '';
    effortStat.textContent = '';
    pokemon.stats.forEach(stat => {
        if (stat.effort > 0) {
            baseStat.textContent = stat.stat.name;
            effortStat.textContent = stat.effort;
        }
    });



    pokemonInfo.classList.remove('invisible');
    pokemonText.classList.remove('invisible');
    return;
}



const buscarPokemon = async (id) => {
    const result = await fetch(`/pokedex${id}`, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
        },
    }).then((response) => response.json())
        .then((responseData) => {
            return responseData;
        })
        .catch(error => console.log(error));

    return result;
}

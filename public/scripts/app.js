console.log(`Gotta catch'em all!`);

// Constant Variables
const BASE_URL = '/api/pokemon';
// Global Variables

// State Variable
const state = {
	pokemon: [],
	filtered: []
};

// Dom Elements
const $pokedex = $('#pokedex');
const $searchbar = $('#search-pokemon');

// Functions

const typeComponent = types => {
	return types
		.map(type => `<p class="type ${type.toLowerCase()}">${type}</p>`)
		.join('');
};

const pokemonComponent = pokemon => {
	const types = typeComponent(pokemon.type);
	return `
    <div class="card">
      <div class="img-container">
        <img class="card-img" src="${pokemon.image}" alt="${pokemon.name}"/>
      </div>
      <div class="card-body">
        <div class="card-header">
          ${pokemon.name}
        </div>
        <div class="types">
        ${types}
        </div>
        <div class="card-text">
          ${pokemon.pokedex}
        </div>
      </div>
    </div>
  `;
};

const render = () => {
	const { pokemon, filtered } = state;
	$pokedex.empty();
	if (filtered.length > 0) {
		filtered.forEach(doc => {
			const card = pokemonComponent(doc);
			$pokedex.append(card);
		});
	} else {
		pokemon.forEach(doc => {
			const card = pokemonComponent(doc);
			$pokedex.append(card);
		});
	}
};

const updateState = response => {
	const { data } = response;
	state.pokemon = data;
	render();
};

const getAllPokemon = () => {
	$.ajax({
		url: BASE_URL,
		method: 'GET',
		success: updateState,
		error: (e1, e2, e3) => console.log(e2)
	});
};

getAllPokemon();

const filterPokemon = event => {
	const filteredPokemon = state.pokemon.filter(pokemon => {
		return (
			pokemon.pokedex.toString() === event.target.value ||
			pokemon.name.toLowerCase().includes(event.target.value.toLowerCase())
		);
	});
	state.filtered = filteredPokemon;
	render();
};

// Event Listeners

$searchbar.keyup(filterPokemon);

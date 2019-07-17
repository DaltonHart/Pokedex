console.log(`Gotta catch'em all!`);

// Constant Variables
const BASE_URL = '/api/pokemon';
// Global Variables

// State Variable
const state = {
	pokemon: []
};

// Dom Elements
const $pokedex = $('#pokedex');
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
	const { pokemon } = state;
	pokemon.forEach(doc => {
		const card = pokemonComponent(doc);
		$pokedex.append(card);
	});
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

// Event Listeners

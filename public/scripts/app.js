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

const render = () => {
	const { pokemon } = state;
	pokemon.forEach(doc => {
		console.log({ pokemon: doc });
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

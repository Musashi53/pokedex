// const fetchPokemon = () => {
//   const getPokemonApi = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

//   const pokemonPromises = [];

//   for (let i = 1; i <= 150; i++) {
//     pokemonPromises.push(fetch(getPokemonApi(i)).then(response => response.json()));
//   }

//   Promise.all(pokemonPromises)
//   .then(pokemons => {
//     console.log(pokemons);
//   })
// }

// fetchPokemon();
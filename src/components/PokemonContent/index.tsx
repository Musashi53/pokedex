import { useState, useEffect } from "react";
import { Container } from '../layout/styles';
import { PokemonContent, PokemonCards, PokemonCard } from './styles';


const PokemonContentComponent = () => {
  useEffect(() => {
    const getPokemonApi = (id: number) => `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    const pokemonPromises = [];
    
    for (let i = 1; i <= 150; i++) {
      pokemonPromises.push(fetch(getPokemonApi(i)).then(response => response.json()));
    }

    // Promise.all(pokemonPromises)
    //   .then(pokemons => {
    //     console.log(pokemons);
    //     pokemons.map(pokemon => {
          
    //     })
    //   })
    // eslint-disable-next-line
  }, [])

  return (
    <PokemonContent>
      <Container>        
        <PokemonCards>
          
        </PokemonCards>
      </Container>
    </PokemonContent>
  );
};

export default PokemonContentComponent;

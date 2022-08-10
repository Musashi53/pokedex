import { useEffect, useState } from "react";
import * as H from "./styles";
import { Button } from "../../components/button/styles";
import { Container } from "../../components/layout/styles";
import * as C from "../../components/card/styles";
import { Title } from "../../components/title/style";
import { api } from "../../services/api";

type PokemonTypes = {
  type: {
    name: string;
  }
}

type Pokemon = {
  id: number;
  name: string;
  base_experience: number;
  types: PokemonTypes[];
}


const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const pokemonsForPromise = [];
    
    for (let i = 1; i <= 150; i++) {
      pokemonsForPromise.push(
        api.get(`/${i}`).then(response => response.data)
      );
    }
    
    Promise.all(pokemonsForPromise)
      .then(response => setPokemons(response));
    
    // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <H.Container>
        <Title>List of all <br/> Pokemons</Title>
        <H.Content>
          {pokemons?.map(pokemon => {
            const pokemonTypes = pokemon.types.map(({ type }) => type.name).join(' | ');
            return (
              <C.Card key={pokemon.id}>
                <C.ImageContent>
                  <C.Circle/>
                  <C.Image 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name }
                  />
                </C.ImageContent>
                <C.Title>{pokemon.name}</C.Title>
                <C.Type>{pokemonTypes}</C.Type>
                <C.Experience>{pokemon.base_experience}</C.Experience>
                <Button>See details</Button>
              </C.Card>
            );
          })}
        </H.Content>
      </H.Container>
    </Container>
  );
};

export default Home;

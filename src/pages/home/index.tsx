import { useEffect, useState } from "react";
import * as H from "./styles";
import { Container } from "../../components/layout/styles";
import { Title } from "../../components/title/style";
import { api } from "../../services/api";
import Card from "../../components/card";

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
          {pokemons?.map(pokemon => <Card key={pokemon.id} data={pokemon}/>)}
        </H.Content>
      </H.Container>
    </Container>
  );
};

export default Home;

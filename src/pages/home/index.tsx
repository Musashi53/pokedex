import { useEffect, useState } from "react";
import * as H from "./styles";
import * as L from "../../components/layout/styles";
import { Title } from "../../components/title/style";
import { api } from "../../services/api";
import Card from "../../components/card";
import { Input } from "../../components/input/styles";

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
  const [search, setSearch] = useState('');

  useEffect(() => {
    const pokemonsForPromise = [];
    
    for (let i = 1; i <= 150; i++) {
      pokemonsForPromise.push(api.get(`/${i}`).then(response => response.data));
    }
    
    Promise.all(pokemonsForPromise)
      .then(response => setPokemons(response));
    
    // eslint-disable-next-line
  }, [])

  const filteredPokemons = search.length > 0
    ? pokemons.filter(pokemon => pokemon.name.includes(search))
    : [];

  return (
    <L.Container>
      <H.Container>
        <Title>List of all Pokemons</Title>
        <Input
          name="search"
          type="text"
          placeholder="Search"
          onChange={e => setSearch(e.target.value)}
          value={search}
        />        
        {search.length > 0 ? (
          <H.Content>
            {filteredPokemons?.map(pokemon => <Card key={pokemon.id} data={pokemon}/>)}
          </H.Content>
        ) : (
          <H.Content>
            {pokemons?.map(pokemon => <Card key={pokemon.id} data={pokemon}/>)}
          </H.Content>
        )}
        
      </H.Container>
    </L.Container>
  );
};

export default Home;

import { useEffect, useState } from "react";
import * as H from './styles';
import * as L from "../../components/layout/styles";
import { Title } from "../../components/title/style";
import { api } from "../../services/api";
import Card from "../../components/card";
import { Input } from "../../components/input/styles";
import PokemonLogo from '../../assets/img/PokemonLogo.png';
// import { useFetch } from '../../hooks/useFetch';



type PokemonTypes = {
  type: {
    name: string;
  }
}

type Pokemon = {
  id: number;
  name: string;
  types: PokemonTypes[];
}

export const Home = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [search, setSearch] = useState<string>('');
  const [isFetching, setIsFetching] = useState<boolean>(true);
  

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const pokemonsForPromise = [];
        
        for (let i = 1; i <= 150; i++) {
          pokemonsForPromise.push(await api.get(`/${i}`).then(response => response.data));
        }
        
        await Promise.all(pokemonsForPromise)
          .then(response => setPokemons(response));

      } catch(e) {
        alert(`Error: ${e}`);

      } finally {
        setIsFetching(false);
        
      }
    }
    getPokemons();
    
    // eslint-disable-next-line
  }, [])

  const filteredPokemons = search.length > 0
    ? pokemons?.filter(pokemon => pokemon.name.includes(search))
    : [];

  return (
    <L.Container>
      <H.Container>
        <H.Img src={PokemonLogo}/>
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
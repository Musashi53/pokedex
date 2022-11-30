
import { Link, useParams } from 'react-router-dom';
import { api } from '../../services/api';
import * as P from './styles';
import { RiArrowLeftSLine } from 'react-icons/ri';
import { Container, Flex } from '../../components/layout/styles';
import { Type } from '../../components/type/styles';
import Stats from '../../components/stats';
import { useEffect, useState } from 'react';
import { PokemonTypes, Pokemon } from '../../interfaces/pokemon';

type Abilities = {
  ability: {
    name: string;
  }
}

type Stats = {
  stats: {
    name: string;
  }
}

interface PokemonQueryParams {
  name: string | undefined;
}


export const Profile = () => {
  const { name } = useParams();
  const [selectedPokemon, setSelectedPokemon] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if(!name) return;

    const getDetailsPokemons = async () => {
      try {
        const pokemonsForPromise = [];
      
        pokemonsForPromise.push(await api.get(`/${name}`).then(response => response.data));
          
        await Promise.all(pokemonsForPromise)
          .then(response => setSelectedPokemon(response));

      } catch(e) {
        alert(`Error: ${e}`);

      } finally {
        setIsLoading(false);
      }
    }
    
    getDetailsPokemons();
  }, [name])

  return (
    <>
      { isLoading ?? <p>loading...</p> }
      {selectedPokemon.map(pokemon => (
        <P.Profile key={pokemon.id}>
          <Container>
            <Link to='/home'><RiArrowLeftSLine/></Link>
            <Flex
              style={{height: '100%'}}
              direction='column'
              justify='space-between'
              padding='3rem 0 0 0'
            >
              <Flex
                align='center'
                justify='space-between'
                margin='0 0 3rem 0'
              >
                <img style={{width: '120px'}}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`} alt={name} />
                <Flex
                direction='column'
                align='center'
                  style={{width: '60%'}}
                >                
                  <P.Title>{pokemon.name}</P.Title>
                  
                  <Flex justify='center' columnGap='.5rem'>
                    {pokemon.types.map(({ type }: PokemonTypes) => (
                      <Type key={type.name} type={type.name}>{type.name}</Type>
                    ))}
                    
                  </Flex>
                </Flex>
                
              </Flex>
              <Flex
                justify='space-around'
                padding='0 0 .5rem 0'
              >
                <a href='#'>About</a>
                <a href='#'>Stats</a>
                <a href='#'>Evolution</a>
              </Flex>
            </Flex>
          </Container>
          
          <P.Box>
            <Container>
              <Stats pokemon={pokemon}/>
            </Container>
          </P.Box>
        </P.Profile>
      ))}
    </>
  );
};

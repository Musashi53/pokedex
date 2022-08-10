import { useEffect, useState } from "react";
import * as U from "../../components/all pokemons/styles";
import { Button } from "../../components/button/styles";
import { Container } from "../../components/layout/styles";
import * as S from "../../components/card/styles";
import { Title } from "../../components/title/style";

const Home = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    const pokemonsForPromise = [];

    const getPokemonApi = (id: number) => `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    for (let i = 1; i <= 150; i++) {
      pokemonsForPromise.push(
        fetch(getPokemonApi(i)).then(response => response.json())
      );
    }
    
    Promise.all(pokemonsForPromise)
      .then(response => setPokemons(response));
    
    // eslint-disable-next-line
  }, [])

  return (
    <Container>
      <U.AllPokemonsContainer>
        <Title>List of all <br/> Pokemons</Title>
        <U.AllPokemonsContent>
          {pokemons.map(pokemon => (
            <S.PokemonCard key={pokemon.id}>
              <S.PokemonCardImageContent>
                <S.PokemonCardCircle className={pokemon.types[0].type.name}/>
                <S.PokemonCardImage 
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name }
                />
              </S.PokemonCardImageContent>
              <S.PokemonCardTitle>{pokemon.name}</S.PokemonCardTitle>
              <S.PokemonCardType className={pokemon.types[0].type.name}>{pokemon.types[0].type.name}</S.PokemonCardType>
              <Button>See details</Button>
            </S.PokemonCard>))
          }
        </U.AllPokemonsContent>
      </U.AllPokemonsContainer>
    </Container>
  );
};

export default Home;

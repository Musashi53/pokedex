import { useEffect, useState } from "react";
import { AllPokemonsContainer, AllPokemonsContent } from "../../components/all pokemons/styles";
import { Container } from "../../components/layout/styles";
import { 
  PokemonCard,
  PokemonCardImageContent,
  PokemonCardImage,
  PokemonCardCircle
 } from "../../components/pokemon card/styles";
import { Title } from "../../components/title/style";

const AllPokemonsPage = () => {
  const [pokemons, setPokemons] = useState<any[]>([]);

  useEffect(() => {
    const pokemonsForPromise = [];

    const getPokemonApi = (id: number) => `https://pokeapi.co/api/v2/pokemon/${id}`;
    
    for (let i = 1; i <= 150; i++) {
      pokemonsForPromise.push(fetch(getPokemonApi(i)).then(response => response.json()));
    }
    
    Promise.all(pokemonsForPromise)
      .then(response => {
        setPokemons(response);
      });
    
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Container>
        <AllPokemonsContainer>
          <Title>List of all <br/> Pokemons</Title>
          <AllPokemonsContent>
            {pokemons.map(pokemon => (
              <PokemonCard key={pokemon.id}>
                <PokemonCardImageContent>
                  <PokemonCardCircle/>
                  <PokemonCardImage 
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name }
                  />
                  
                </PokemonCardImageContent>
                
                <h3>{pokemon.name}</h3>
                <p>{pokemon.base_experience}</p>
              </PokemonCard>))
            }
          </AllPokemonsContent>
        </AllPokemonsContainer>
      </Container>
    </>
  );
};

export default AllPokemonsPage;

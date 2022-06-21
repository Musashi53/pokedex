import styled from 'styled-components';

export const PokemonContent = styled.section``;

export const PokemonCards = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

export const PokemonCard = styled.div`
  border: 1px solid red;
  padding: 2rem .5rem 2rem .5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 1rem;
`;
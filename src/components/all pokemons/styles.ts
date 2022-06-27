import styled from 'styled-components'

export const AllPokemonsContainer = styled.div`
  padding: 3rem 0 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const AllPokemonsContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
`;
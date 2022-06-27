import styled from 'styled-components';

interface IColorProps {
  color: object;
}

export const PokemonCard = styled.div`
  padding: 2rem 0 2rem 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: initial;
  border-radius: 1rem;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: .3s;

  &:hover {
    transform: translateY(-.5rem);
  }
`;

export const PokemonCardImageContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1rem;
`;

export const PokemonCardCircle = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: white;
  align-self: center;
  
`;

export const PokemonCardImage = styled.img`
  width: 100%;
  position: absolute;
`;
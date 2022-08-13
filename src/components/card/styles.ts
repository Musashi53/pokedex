import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

interface PokemonType {
  type:
  'steel' |
  'fire' |
  'grass' |
  'electric' |
  'water' |
  'ice' |
  'ground' |
  'rock' |
  'fairy' |
  'poison' |
  'ghost' |
  'bug' |
  'dragon' |
  'psychic' |
  'flying' |
  'fighting' |
  'normal'
  ;
}

export const Card = styled.div`
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: initial;
  border-radius: 1rem;
  color: #FFF;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: .3s;

  &:hover {
    transform: translateY(-.5rem);
  }
`;

export const ImageContent = styled.div`
  width: 70px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-right: 1rem;
`;

export const Circle = styled.div<PokemonType>`
  ${({ type }) => css`
    background-color: ${theme.colors.card[type]};
    width: 80px;
    height: 80px;
    border-radius: 50%;
    align-self: center;
  `}
`;

export const Image = styled.img`
  width: 80px;
  position: absolute;
  left: -.5rem;
`;

export const Data = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  font-weight: 300;
  margin-bottom: 1rem;
`;

export const Type = styled.span<PokemonType>`
  ${({ type }) => css`
    width: 48%;
    padding: .25rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.card[type]};
    color: #202020;
    margin-bottom: .5rem;
    border-radius: .5rem;
    font-size: .85rem;
    font-weight: 300;
  `}
`;
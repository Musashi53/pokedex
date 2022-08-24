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

export const Type = styled.p<PokemonType>`
  ${({ type }) => css`
    width: 48%;
    padding: .18rem 0 .35rem 0;
    display: inline-flex;
    justify-content: center;
    background-color: ${theme.colors.card[type]};
    color: #FFF;
    border-radius: .5rem;
    font-size: .85rem;
  `}
`;
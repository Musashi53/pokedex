import styled, { css } from "styled-components";
import { theme } from '../../styles/theme';

interface IListProps {
  width: string;
}

interface IPokemonType {
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

export const Title = styled.h3<IPokemonType>`
  ${({ type }) => css`
    color: ${theme.colors.card[type]};
  `}
`;

export const Progress = styled.progress<IPokemonType>`
  ${({ type }) => css`
    border: none;
    width: 100%;

    &::-webkit-progress-bar {
      height: 8px;
      border-radius: .5rem;
    }

    &::-webkit-progress-value {
      background-color: ${theme.colors.card[type]};
      border-radius: .5rem;
      height: 8px;
    }
  `}
  
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0 0 0;
  
  width: 95%;
`;

export const List = styled.ul<IListProps>`
  ${({ width }) => css`
    width: ${width};
    
  `}
`;
  

export const ListItem = styled.li`
  font-size: .7rem;

  & span {
    text-align: end;
  }
`;


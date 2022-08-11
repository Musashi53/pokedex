import styled, { css } from 'styled-components';
import { theme } from '../../styles/theme';

interface PokemonType {
  type: string;
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
`;

export const Circle = styled.div<PokemonType>`

`;

export const Image = styled.img`
  width: 80px;
  position: absolute;
  left: -.5rem;
`;

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h3`
  font-weight: 300;
  margin-bottom: .5rem;
`;

export const Type = styled.span`
  display: block;
  margin-bottom: .5rem;
`;

export const Experience = styled.span`
  font-weight: bold;
  display: block;
`;
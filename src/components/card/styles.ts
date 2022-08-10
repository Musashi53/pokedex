import styled from 'styled-components';

export const PokemonCard = styled.div`
  padding: 2rem 0 2rem 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: initial;
  border-radius: 1rem;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: .3s;

  &:hover {
    transform: translateY(-.5rem);
  }
`;

export const PokemonCardImageContent = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1rem;
`;

export const PokemonCardCircle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  align-self: center;

  &.steel {
	  background-color: #f4f4f4;
  }

  &.fire {
    background-color: #FDDFDF;
  }

  &.grass {
    background-color: #DEFDE0;
  }

  &.electric {
    background-color: #FCF7DE;
  }

  &.water, .ice {
    background-color: #DEF3FD;
  }

  &.ground {
    background-color: #f4e7da;
  }

  &.rock {
    background-color: #d5d5d4;
  }

  &.fairy {
    background-color: #fceaff;
  }

  &.poison {
    background-color: #98d7a5;
  }

  &.bug {
    background-color: #f8d5a3;
  }

  &.dragon {
    background-color: #97b3e6;
  }

  &.psychic {
    background-color: #eaeda1;
  }

  &.flying {
    background-color: #F5F5F5;
  }

  &.fighting {
    background-color: #E6E0D4;
  }

  &.normal {
    background-color: #F5F5F5;
  }
`;

export const PokemonCardImage = styled.img`
  width: 150px;
  position: absolute;
`;

export const PokemonCardTitle = styled.h3`
  font-weight: 300;
  margin-bottom: 1rem;
`;

export const PokemonCardType = styled.p`
  margin-bottom: 1rem;
`;
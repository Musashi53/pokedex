import styled from "styled-components";
import { mainColor, secondaryColor } from "../../styles/Variables";

export const MenuButton = styled.a`
  display: inline-flex;
  color: #FFF;
  cursor: pointer;
  transition: .3s;
  font-size: 2rem;

  &:hover {
    color: ${mainColor};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const CloseButton = styled.a`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 2rem;
  cursor: pointer;

  &:hover {
    color: ${mainColor};
  }

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  padding: .75rem 1.75rem .75rem 1.75rem;
  display: inline-flex;
  background-color: ${secondaryColor};
  color: #FFF;
  font-size: 1rem;
  font-weight: 600;
  border-radius: .5rem;
  border: none;
  cursor: pointer;
`;
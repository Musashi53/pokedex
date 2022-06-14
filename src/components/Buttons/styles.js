import styled from "styled-components";
import { mainColor } from "../../styles/Variables";

export const MenuButton = styled.a`
  display: inline-flex;
  color: #FFF;
  cursor: pointer;
  transition: .3s;

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

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const Button = styled.button`
  display: inline-flex;
`;
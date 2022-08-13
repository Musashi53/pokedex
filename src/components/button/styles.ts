import styled, { css } from "styled-components";
import { theme } from "../../styles/theme";

interface ButtonType {
  buttonType: 'search' | 'navigator';
}

export const Button = styled.button<ButtonType>`
  cursor: pointer;
  border: none;
  background-color: ${theme.colors.secundaryColor};
  color: #FFF;
  font-weight: 600;
  display: inline-flex;
  transition: .3s;
  padding: .75rem 1.75rem;
  font-size: 1rem;
  border-radius: .5rem;

  &:hover {
    background-color: ${theme.colors.mainColor};
  }
`;
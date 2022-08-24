import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Button = styled.button`
  width: 100%;
  cursor: pointer;
  border: none;
  background-color: ${theme.colors.secundaryColor};
  color: #FFF;
  font-weight: 600;
  display: inline-flex;
  justify-content: center;
  transition: .3s;
  padding: .75rem 1.75rem;
  font-size: 1rem;
  border-radius: .5rem;

  &:hover {
    background-color: ${theme.colors.mainColor};
  }
`;
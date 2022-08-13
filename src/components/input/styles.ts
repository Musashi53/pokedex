import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Input = styled.input`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: initial;
  color: #FFF;
  padding: .75rem 1rem;
  width: 100%;
  border-radius: .5rem;
  outline: none;
  border: none;
  margin-bottom: 3rem;

  &::placeholder {
    color: ${theme.colors.secundaryColor};
  }
`;
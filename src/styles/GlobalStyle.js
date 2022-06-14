import styled, { createGlobalStyle }  from 'styled-components';
import { mainColor } from './Variables';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: 'smooth';
  }

  body {
    background: linear-gradient(to right, red, blue);
    color: #FFF;
    font-family: 'Poopins', sans-serif;
  }

  h1, h2, h3, a, p, span {
    color: #FFF;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  max-width: 1168px;

  @media screen and (min-width: 968px) {
    margin: auto;
  }
`;
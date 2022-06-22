import { createGlobalStyle }  from 'styled-components';

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
    font-family: 'Poopins', sans-serif;
    background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);

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
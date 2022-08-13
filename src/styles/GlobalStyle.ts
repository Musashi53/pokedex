import { createGlobalStyle }  from 'styled-components';
import  { theme } from './theme';

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
    background-image: linear-gradient(
      to right,
      ${theme.colors.mainColor} 0%,
      ${theme.colors.secundaryColor} 100%
    );
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

  img {
    width: 100%;
    height: auto;
  }

  &::-webkit-scrollbar {
		width: .60rem;
		border-radius: .5rem;
	}
	&::-webkit-scrollbar-thumb {
		background-color: ${theme.colors.mainColor};
		border-radius: .5rem;
	}
`;
import { createGlobalStyle }  from 'styled-components';
import { mainColor, secondaryColor } from './Variables';

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
      ${mainColor} 0%,
      ${secondaryColor} 100%
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
		background-color: #202020;
		border-radius: .5rem;
	}
	&::-webkit-scrollbar-thumb:hover {
		background-color: #303030;
  }
`;
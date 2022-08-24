import { createGlobalStyle }  from 'styled-components';
import  { theme } from './theme';

export const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  html {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scroll-behavior: 'smooth';
  }

  body {
    background-color: #303030;
    /* background-image: linear-gradient(
      to right,
      ${theme.colors.mainColor} 0%,
      ${theme.colors.secundaryColor} 100%
    ); */
  }

  h1, h2, h3, a, p, span {
    color: #FFF;
  }

  ul {
    list-style: none;
    color: #FFF;
  }

  a {
    text-decoration: none;
    color: #FFF;
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
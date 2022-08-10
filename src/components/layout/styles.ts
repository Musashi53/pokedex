import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;
  margin: 0 1.5rem;

  @media screen and (min-width: 1368px) {
    margin: auto;
  }
`;

export const Main = styled.main`
  height: 100vh;
  @media screen and (min-width: 768px) { padding-top: 4rem; }
`;
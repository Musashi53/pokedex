import styled from "styled-components";

export const Container = styled.div`
  max-width: 1368px;
  margin-left: 1.5rem;
  margin-right: 1.5rem;

  @media screen and (min-width: 1368px) {
    margin: auto;
  }
`;

export const Main = styled.main`
  height: 100vh;

  @media screen and (min-width: 768px) { padding-top: 4rem; }
`;
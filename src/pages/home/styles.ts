import styled from 'styled-components'

export const Container = styled.div`
  padding: 3rem 0 2rem 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;

  @media screen and (min-width: 300px){
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media screen and (min-width: 768px){
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
`;
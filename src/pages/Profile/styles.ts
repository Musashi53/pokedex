import styled from "styled-components";

export const Profile = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & svg {
    font-size: 2rem;
    color: #fff;
    position: absolute;
    left: -.75rem;
    top: 1rem;
  }
`;

export const Content = styled.div`
  display: flex;
`;

export const Box = styled.div`
  width: 100%;
  height: 60vh;
  padding: 1rem 0;
  border-radius: 1.5rem 1.5rem 0 0;
  background-color: rgba(255, 255, 255, 0.25);
  backdrop-filter: initial;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: 500;
  margin-bottom: .5rem;
`;
import styled from 'styled-components';

export const Card = styled.div`
  padding: 2rem 0 2rem 0;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: initial;
  border-radius: 1rem;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  transition: .3s;

  &:hover {
    transform: translateY(-.5rem);
  }
`;

export const ImageContent = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  position: relative;
  margin-bottom: 1rem;
`;

export const Circle = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  align-self: center;
`;

export const Image = styled.img`
  width: 150px;
  position: absolute;
`;

export const Title = styled.h3`
  font-weight: 300;
  margin-bottom: 1rem;
`;

export const Type = styled.span`
  margin-bottom: 1rem;
`;

export const Experience = styled.span`
  margin-bottom: 1rem;
`;
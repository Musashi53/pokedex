import styled from "styled-components";

export const Progress = styled.progress`
  border: none;

  &::-webkit-progress-bar {
    background-color: transparent;
    
  }

  &::-webkit-progress-value {
    background-color: #FFF;
    border-radius: .5rem;
    height: 4px;
  }
`;
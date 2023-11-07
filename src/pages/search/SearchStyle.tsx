import styled from 'styled-components';

export const MainSearch = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 10px;
  background: linear-gradient(#282aa170, black);
  @media (max-width: 500px) {
    section{
      article{
        width: 50%;
        height: 30vh;
      }
    }
  }
`;

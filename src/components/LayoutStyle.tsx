import styled from 'styled-components';

export const LayoutDad = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  padding: 10px;
  section{
    display: flex;
    flex-direction: column;
    width: 50px;
    height: 100vh;
    article{
      display: flex;
      flex-direction: column;
    }
  }
  div{
    width: 100%;
  }
`;

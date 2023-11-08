import styled from 'styled-components';

export const MainPefil = styled.main`
  width: 100%;
  height: 100%;
  padding: 20px;
  overflow: hidden;
  div{
    width: 100%;
    height: 100px;
  }
  section{
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    flex-direction: row;
    article{
      padding: 10px;
      height: 50%;
      width: 80%;
      div:nth-child(1){
        width: 100%;
        height: 80%;
      }
      div:nth-child(2){
        height: 20%;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: end;
        justify-content: end;
        button{
          width: auto;
          margin: 0 5px;
          padding: 10px 30px;
          background-color: transparent;
          color: white;
          border: none;
          box-shadow: 1px 1px 10px black;
          border-radius: 10px;
          cursor: pointer;
        }
      }
    }
  }
`;

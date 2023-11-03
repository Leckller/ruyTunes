import styled from 'styled-components';

export const MainHome = styled.main`
  display: flex;
  flex-direction: column;
  section{
    display: flex;
    flex-flow: row wrap;
    article{
      width: 15%;
      height: 13%;;
      flex-grow: 2;
      display: flex;
      border-radius: 5%;
      border: solid black 1px;
      background-color: #323232ac;
      margin: 10px;
      a{
        display: flex;
        height: 100%;
        flex-direction: column;
        justify-content: space-around;
        flex-grow: 1;
        padding: 10%;
        text-decoration: none;
        color: white;
        h2{
          text-align: start;
        }
        img{
          border-radius: 15%;
        }
      }
    }
  }
  @media (max-width: 500px) {
    section{
      article{
        width: 50%;
        height: 30vh;
      }
    }
  }
`;

export const DivBemVindo = styled.section`
  width: 98%;
  height: 200px;
  background-color: #474646;
  border-radius: 10px;
  padding-top: 80px;
  margin: 0 10px 10px 10px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: start;
  font-size: 3rem;
  padding-left: 10px;
`;

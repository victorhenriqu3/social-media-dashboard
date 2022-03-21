import styled from "styled-components";

const ContainerGrid = styled.div`
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 30px;
    margin: 0 5vw;
    justify-content: center;
    align-content: center;
    list-style: none;
  }

  .item {
    font-family: sans-serif;
    border-radius: 0.25rem;
    margin-bottom: 0.2rem;
    margin-right: 0.2rem;
    padding: 0.5rem;
    padding-left: 0.25rem;
    opacity: 1;
  }

  .item .title {
    font-weight: bold;
    font-size: 125%;
    margin: 0;
    margin-bottom: 0.3rem;
  }

  .item .body {
    margin: 0;
    margin-bottom: 0.3rem;
  }

  .item .small {
    font-size: 66%;
    text-align: right;
    white-space: wrap;
  }

  .dragged .item {
    opacity: 0.1;
  }
`;
export default ContainerGrid;

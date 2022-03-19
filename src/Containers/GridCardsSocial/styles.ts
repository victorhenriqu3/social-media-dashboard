import styled from "styled-components";

const ContainerGrid = styled.div`
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    grid-gap: 30px;
    margin:0 5vw ;
    justify-content: center;
    align-content: center;
  }
`;
export default ContainerGrid;

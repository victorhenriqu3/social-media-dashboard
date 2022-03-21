import styled from "styled-components";

const ContainerGridStats = styled.div`
  padding-bottom: 10vh;
  transform: translate(0, -10vh);
  list-style: none;
  .Overview {
    color: ${({ theme }) => theme.Text};
    margin: 3vh 5vw;
    bottom: 10vh;
  }
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    grid-gap: 30px;
    margin: 0 5vw;
    justify-content: center;
    align-content: center;
  }
`;

export default ContainerGridStats;

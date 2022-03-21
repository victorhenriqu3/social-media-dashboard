import styled from "styled-components";

const ContainerBackFlip = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  margin: 2vh 1vh;

  .columnCard {
    height: 10vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
  }

  .TitleStats {
    padding: 1vh;
  }
  .TitleStats span {
    color: ${({ theme }) => theme.Text};
    font-weight: 700;
  }
  .Stats {
    padding: 2vh;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-around;
  }

  .BackRow {
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  .IconBack {
    height: 0.5vh;
    padding-right: 0.5vw;
  }
`;

export default ContainerBackFlip;

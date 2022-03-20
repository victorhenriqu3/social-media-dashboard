import styled from "styled-components";
const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  padding: 5vh 10vh 30vh;
  border-radius: 0 0 20px 20px;
  background: ${({ theme }) => theme.TopBGPattern};
  font-weight: 700;

  h1 {
    color: ${({ theme }) => theme.Text};
  }
  P {
    padding-top: 1vh;
    color: ${({ theme }) => theme.SecondaryText};
  }
  hr {
    display: none;
  }

  @media screen and (max-width: 375px) {
    flex-direction: column;
    justify-content: center;
    padding: 5vh 0 10vh;
    

    hr {
      margin: 3vh 1vh;
      display: block;
      width: 90vw;
      border-color: ${({ theme }) => theme.SecondaryText};
    }
  }
`;

export default ContainerHeader;

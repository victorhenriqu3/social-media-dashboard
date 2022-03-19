import styled from "styled-components";

type SocialMedia = {
  Up: Boolean;
  Social: String;
};
const ContainerCardStats = styled.div.attrs((props: SocialMedia) => ({
  Up: props.Up,
  Social: props.Social,
}))<SocialMedia>`
  position: relative;
  border-top: double 10px transparent;
  border-radius: 5px;
  background: ${({ theme }) => theme.CardBG};
  color: ${({ theme }) => theme.SecondaryText};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  padding: 1vh 2vw;

  h2 {
    color: ${({ theme }) => theme.Text};
    font-weight: 700;
    font-size: 2em;
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: stretch;
  }
  .row span {
    margin: 2vh;
  }

  .Indicator {
    color: ${(props) => (props.Up ? "var(--LimeGreen)" : "var(--BrightRed)")};
  }
  .Column {
    height: 20vh;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: space-around;
    align-items: center;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    align-items: flex-start;
    align-content: left;
    flex-wrap: wrap;
  }

  .Stats {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .Icon {
    width: 1.5vw;
  }
`;
export default ContainerCardStats;
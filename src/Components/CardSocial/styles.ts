import styled from "styled-components";
type SocialMedia = {
  Up: Boolean;
  Social: String;
};
const ContainerCard = styled.div.attrs((props: SocialMedia) => ({
  Up: props.Up,
  Social: props.Social,
}))<SocialMedia>`
  position: relative;
  border-top: double 10px transparent;
  border-radius: 15px;
  background-image: linear-gradient(
      ${({ theme }) => theme.CardBG},
      ${({ theme }) => theme.CardBG}
    ),
    ${(props) => {
      const Social = props.Social;
      return `var(--${Social})`;
    }};
  background-origin: border-box;
  background-clip: content-box, border-box;
  bottom: 10vh;
  color: ${({ theme }) => theme.SecondaryText};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    color: ${({ theme }) => theme.Text};
    font-weight: 700;
    font-size: 5em;
  }

  .row {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 1vh 3vh;
  }

  .row span {
    margin: 2vh;
  }

  .Indicator {
    color: ${(props) => (props.Up ? "var(--LimeGreen)" : "var(--BrightRed)")};
  }

  .Followers {
    padding: 1vw 3vw;
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.5rem;
  }

  .bio {
    font-size: 1.2rem;
  }
`;

export default ContainerCard;

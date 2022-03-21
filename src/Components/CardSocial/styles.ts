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
  border-top: double 5px transparent;
  border-radius: 5px;
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
  width: 110%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  :hover {
    opacity: 0.7;
  }

  h2 {
    color: ${({ theme }) => theme.Text};
    font-weight: 700;
    font-size: 4em;
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
    margin-bottom: 2vh;
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

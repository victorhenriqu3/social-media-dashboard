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
  width: 400px;
  margin: auto;
  border-top: double 10px transparent;
  border-radius: 15px;
  background-image: linear-gradient(
      ${({ theme }) => theme.CardBG},
      ${({ theme }) => theme.CardBG}
    ),
    ${(props)=>{
      const Social = props.Social;
      return `var(--${Social})`}};
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
    width: 40%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 3vh;
  }

  .row span {
    margin-left: 2vh;
  }

  .Indicator {
    color: ${(props) => (props.Up ? "var(--LimeGreen)" : "var(--BrightRed)")};
  }

  .Followers {
    padding: 5vh 0;
    text-align: center;
    font-weight: 400;
    letter-spacing: 0.5em;
  }

  .bio {
    font-size: 1.2em;
  }
`;

export default ContainerCard;

import styled from "styled-components";

const ContainerGrid = styled.div`
  .flipper {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    transform-style: preserve-3d;
  }
  .flip-container:hover .flipper {
    transform: rotateY(180deg);
    /* se quiser uma animação na vertical,
	troque por rotateX(180deg)
	*/
  }

  .front,
  .back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .back {
    transform: rotateY(180deg);
  }

  #flipActive:checked ~ .flip-container .flipper {
    transform: rotateY(180deg);
  }

  #flipActive {
    display: none;
  }

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

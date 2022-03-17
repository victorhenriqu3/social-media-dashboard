import styled from "styled-components";

const ContainerToggler = styled.div`
  .Wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5vw ;
  }
  .ToggleTitle {
    margin-right: 1vw;
  }
  input[type="checkbox"] {
    height: 0;
    width: 0;
    visibility: hidden;
  }

  label {
    cursor: pointer;
    text-indent: -9999px;
    width: 100px;
    height: 40px;
    background-image: linear-gradient(
      to right,
      hsl(210, 78%, 56%),
      hsl(146, 68%, 55%)
    );
    display: block;
    border-radius: 100px;
    position: relative;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  label:after {
    content: "";
    position: absolute;
    top: 5px;
    left: 5px;
    width: 30px;
    height: 30px;
    background: hsl(230, 17%, 14%);
    border-radius: 90px;
    transition: 0.3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  input:checked + label {
    background: hsl(230, 22%, 74%);
  }

  input:hover + label:hover {
    background-image: linear-gradient(
      to right,
      hsl(210, 78%, 56%),
      hsl(146, 68%, 55%)
    );
  }

  input:checked + label:after {
    box-shadow: 0 -2px -5px rgba(0, 0, 0, 0.3);
    background: hsl(0, 0%, 100%);
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 90px;
  }
`;

export default ContainerToggler;

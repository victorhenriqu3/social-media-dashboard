import styled from "styled-components";

const ContainerToggler = styled.div`
  .Wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .ToggleTitle {
    margin-right: 1vw;
    color: ${({ theme }) => theme.SecondaryText};
    font-weight: 700;
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
    background: ${({ theme }) => theme.Toggle};
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
    background: ${({ theme }) => theme.BG};
    border-radius: 90px;
    transition: 0.3s;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  }

  input:checked + label {
    background: ${({ theme }) => theme.Toggle};
  }

  input:hover + label:hover {
    background: var(--Dark-Toggle);
  }

  input:checked + label:after {
    box-shadow: 0 -2px -5px rgba(0, 0, 0, 0.3);
    background: ${({ theme }) => theme.BG};
    left: calc(100% - 5px);
    transform: translateX(-100%);
  }

  label:active:after {
    width: 90px;
  }
`;

export default ContainerToggler;

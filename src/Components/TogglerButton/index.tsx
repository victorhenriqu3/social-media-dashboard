import React from "react";
import ContainerToggler from "./styles";

interface ThemeTogglerProps {
  ThemeToggler: () => void;
}

function TogglerButton({ ThemeToggler }: ThemeTogglerProps) {
  return (
    <>
      <ContainerToggler>
        <div className='Wrapper'>
          <p className='ToggleTitle'>Dark Mode</p>
          <input
            id='checkbox'
            type='checkbox'
            onClick={ThemeToggler}
            onChange={() => false}
            checked={window.localStorage.getItem("theme") === "light"}
          />
          <label htmlFor='checkbox' className='switch'></label>
        </div>
      </ContainerToggler>
    </>
  );
}

export default TogglerButton;

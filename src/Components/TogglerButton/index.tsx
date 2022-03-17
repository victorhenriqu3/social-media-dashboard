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
          <p className='ToggleTitle'>Dark Theme</p>
          <input
            id='checkbox'
            type='checkbox'
            onClick={ThemeToggler}
            onChange={() => false}
          />
          <label htmlFor='checkbox' className='switch'></label>
        </div>
      </ContainerToggler>
    </>
  );
}

export default TogglerButton;

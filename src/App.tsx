import React from 'react';

import "./App.css";
import TogglerButton from "./Components/TogglerButton";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <TogglerButton ThemeToggler={() => console.log("Toggled Theme")} />
      </header>
    </div>
  );
}

export default App;

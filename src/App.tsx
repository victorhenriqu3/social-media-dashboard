import React from "react";
import TogglerButton from "./Components/TogglerButton";

function App() {
  return <TogglerButton ThemeToggler={() => console.log("Toggled Theme")} />;
}

export default App;

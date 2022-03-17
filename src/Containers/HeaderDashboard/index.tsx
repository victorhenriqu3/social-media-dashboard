import React from "react";
import TogglerButton, {
  ThemeTogglerProps,
} from "../../Components/TogglerButton";

export default function HeaderDashboard({ ThemeToggler }: ThemeTogglerProps) {
  return (
    <>
      <header>
        <TogglerButton ThemeToggler={ThemeToggler} />
      </header>
    </>
  );
}

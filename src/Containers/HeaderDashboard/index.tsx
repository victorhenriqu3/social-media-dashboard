import React from "react";
import TogglerButton, {
  ThemeTogglerProps,
} from "../../Components/TogglerButton";
import ContainerHeader from "./styles";

export default function HeaderDashboard({ ThemeToggler }: ThemeTogglerProps) {
  return (
    <>
      <ContainerHeader>
        <section className='HeaderTitle'>
          <h1>Social Media Dashboard</h1>
          <p>Total Followers: 23,004</p>
        </section>
        <hr />
        <TogglerButton ThemeToggler={ThemeToggler} />
      </ContainerHeader>
    </>
  );
}

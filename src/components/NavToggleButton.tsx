import React, { useContext } from "react";
import { ToggleContext } from "./StateContext";

const ToggleButton = () => {
  const { navOpen, setNavOpen } = useContext(ToggleContext);
  /* const { isOpen, setOpen } = useContext(ButtonContext); */
  /* console.log(navOpen); */

  return (
    <button
      /* className="toggle-button" */ className={
        navOpen ? "toggle-button-active" : "toggle-button"
      }
      onClick={() => setNavOpen(!navOpen)}
    >
      <div className="toggle-button_line" />
      <div className="toggle-button_line" />
      <div className="toggle-button_line" />
      <div className="toggle-button_group"></div>
    </button>
  );
};

export default ToggleButton;

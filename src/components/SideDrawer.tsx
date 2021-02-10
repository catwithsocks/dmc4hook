import React, { useContext } from "react";
import { ToggleContext, ButtonContext } from "./StateContext";

const SideDrawer = () => {
  const { navOpen, setNavOpen } = useContext(ToggleContext);
  const { isOpen, setIsOpen } = useContext(ButtonContext);

  return (
    <div className={navOpen ? "active" : ""}>
      <nav
        className="sideDrawer"
        onClick={() => {
          setIsOpen(!isOpen);
          setNavOpen(!navOpen);
        }}
      >
        <div className="nav-wrapper">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#benefit-title">Overview</a>
            </li>
            <li>
              <a href="#help-title">Help</a>
            </li>
            <li>
              <a href="https://github.com/muhopensores/dmc4_hook/releases" target="_blank" rel="noopener noreferrer">Download</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default SideDrawer;

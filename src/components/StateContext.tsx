import React, { useState, createContext } from "react";

interface NavProps {
  navOpen: boolean;
  setNavOpen(navOpen: boolean): void;
}

interface ButtonProps {
  isOpen: boolean;
  setIsOpen(isOpen: boolean): void;
}

interface Props {
  children?: React.ReactNode;
}

const ToggleContext = createContext<NavProps>({
  navOpen: false,
  setNavOpen: () => {},
});

const ButtonContext = createContext<ButtonProps>({
  isOpen: false,
  setIsOpen: () => {},
});

const NavToggleProvider: React.FC<Props> = ({ children }) => {
  const [navOpen, setNavOpen] = useState<boolean>(false);
  return (
    <ToggleContext.Provider value={{ navOpen, setNavOpen }}>
      {children}
    </ToggleContext.Provider>
  );
};

const ToggleButtonProvider: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <ButtonContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ButtonContext.Provider>
  );
};

export {
  ToggleContext,
  ButtonContext,
  NavToggleProvider,
  ToggleButtonProvider,
};

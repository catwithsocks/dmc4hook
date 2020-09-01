import React from "react";

import {
  NavToggleProvider,
  ToggleButtonProvider,
} from "./components/StateContext";
import Home from "./pages/Home";
import ToggleButton from "./components/NavToggleButton";
import SideDrawer from "./components/SideDrawer";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <ToggleButtonProvider>
        <NavToggleProvider>
          <header className="App-header">
            <ToggleButton />
            <SideDrawer />
          </header>
          <main className="App-main">
            <Home />
          </main>
        </NavToggleProvider>
      </ToggleButtonProvider>
    </div>
  );
}

export default App;

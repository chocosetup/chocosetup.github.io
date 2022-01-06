import React from "react";
import "./App.css";
import AppPicker from "./AppPicker";
import Header from "./Header";
import Introduction from "./Introduction";
import Install from "./Install";

function App() {
  return (
    <div className="Chocosetup">
      <Header />
      <Introduction />
      <Install />
      <AppPicker />
      <footer className="footer"></footer>
    </div>
  );
}

export default App;

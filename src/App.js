import React from "react";
import "./App.css";
import AppPicker from "./AppPicker";
import Header from "./Header";
import Introduction from "./Introduction";

function App() {
  return (
    <div className="Chocosetup">
      <Header />
      <Introduction />
      <AppPicker />
      <footer className="footer"></footer>
    </div>
  );
}

export default App;

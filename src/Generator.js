import React from "react";
import "./Generator.css";

function Generator(props) {
  function logPickedApps() {
    console.log("Picked apps : ", props.pickedApps);
  }

  return (
    <div className="generator">
      <h2>2. Download and run your custom installer</h2>
      <button className="button" disabled="" onClick={logPickedApps.bind(this)}>
        <span className="text">Download</span>
      </button>
    </div>
  );
}

export default Generator;

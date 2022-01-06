import React from "react";
import "./Install.css";

function Install() {
  return (
    <div className="install">
      <h2>1. Install Chocolatey</h2>
      <p>
        Install Chocolatey according to the official{" "}
        <a
          href="https://chocolatey.org/install#individual"
          target="_blank"
          rel="noopener noreferrer"
        >
          tutorial.
        </a>
      </p>
    </div>
  );
}

export default Install;

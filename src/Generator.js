import React, { useState } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";
import "./Generator.css";

function Generator(props) {
  const chocolateyInstallCommand = // See: https://chocolatey.org/install#individual
    "Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))";

  const appInstallCommand = "choco install {1} -y";

  const [script, setScript] = useState("");

  function logPickedApps() {
    let script = "";
    script += chocolateyInstallCommand + "\n";
    props.pickedApps.forEach((app) => {
      script += appInstallCommand.replace("{1}", app) + "\n";
    });
    console.log(script);
    setScript(script);
  }

  function shouldDisable() {
    return props.pickedApps.size === 0;
  }

  return (
    <div className="generator">
      <h2>2. Download and run your custom installer</h2>
      <button
        className="button"
        type="button"
        disabled={shouldDisable()}
        onClick={logPickedApps.bind(this)}
      >
        <span className="text">Generate Script</span>
      </button>
      <div className="script-container">
        <Highlight className="powershell">{script}</Highlight>
      </div>
    </div>
  );
}

export default Generator;

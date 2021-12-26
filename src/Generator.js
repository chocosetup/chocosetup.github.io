import React from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";
import "./Generator.css";

function Generator(props) {
  const chocolateyInstallCommand = // See: https://chocolatey.org/install#individual
    "Set-ExecutionPolicy Bypass -Scope Process -Force; [System.Net.ServicePointManager]::SecurityProtocol = [System.Net.ServicePointManager]::SecurityProtocol -bor 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))";

  const appInstallCommand = "choco install {1} -y";

  function generateScriptForPickedApps() {
    let script = "";
    script += chocolateyInstallCommand + "\n";
    props.pickedApps.forEach((app) => {
      script += appInstallCommand.replace("{1}", app) + "\n";
    });
    return script;
  }

  function startDownload(text) {
    const filename = "Chocosetup.ps1";
    const blob = new Blob([text], { type: "text/plain" });
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveBlob(blob, filename);
    } else {
      const elem = window.document.createElement("a");
      elem.hidden = true;
      elem.href = window.URL.createObjectURL(blob);
      elem.download = filename;
      document.body.appendChild(elem);
      elem.click();
      document.body.removeChild(elem);
    }
  }

  function shouldDisable() {
    return props.pickedApps.size === 0;
  }

  return (
    <div className="generator">
      <h2>2. Run your custom installer script</h2>

      <button
        className="button"
        disabled={shouldDisable()}
        onClick={() => startDownload(generateScriptForPickedApps())}
      >
        Download Script
      </button>

      <div className="script-container" hidden={shouldDisable()}>
        <Highlight className="powershell">
          {generateScriptForPickedApps()}
        </Highlight>
      </div>
    </div>
  );
}

export default Generator;

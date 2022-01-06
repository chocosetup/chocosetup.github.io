import React from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";
import "./Generator.css";

function Generator(props) {
  const appInstallCommand = "choco install {1} -y";

  function generateScriptForPickedApps() {
    let script = "";
    props.pickedApps.forEach((app) => {
      script += appInstallCommand.replace("{1}", app) + "\n";
    });
    return script;
  }

  function copyScript(text) {
    navigator.clipboard.writeText(text);
  }

  function shouldDisable() {
    return props.pickedApps.size === 0;
  }

  return (
    <div className="generator">
      <h2>3. Run your custom installer script</h2>
      <p>
        Copy the generated script and run it in an{" "}
        <a
          href="https://www.howtogeek.com/194041/how-to-open-the-command-prompt-as-administrator-in-windows-8.1/"
          target="_blank"
          rel="noopener noreferrer"
        >
          administrative shell
        </a>
        .
      </p>

      <div className="script-container" hidden={shouldDisable()}>
        <Highlight className="powershell">
          {generateScriptForPickedApps()}
        </Highlight>
      </div>

      <button
        className="button"
        disabled={shouldDisable()}
        onClick={() => copyScript(generateScriptForPickedApps())}
      >
        Copy Script
      </button>
    </div>
  );
}

export default Generator;

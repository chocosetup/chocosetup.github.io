import React, { useEffect, useState } from "react";
import Highlight from "react-highlight";
import "highlight.js/styles/atom-one-dark.css";
import "./Generator.css";
import { HiClipboardCopy, HiClipboardCheck } from "react-icons/hi";

function Generator(props) {
  const [scriptCopied, setScriptCopied] = useState(false);

  useEffect(() => {
    setScriptCopied(false);
  }, [props.pickedApps]);

  const scriptIsEmpty = props.pickedApps.size === 0;

  const script = generateScriptForPickedApps(props.pickedApps);

  function generateScriptForPickedApps(pickedApps) {
    const appInstallCommand = "choco install {1} -y";
    let script = "";
    pickedApps.forEach((app) => {
      script += appInstallCommand.replace("{1}", app) + "\n";
    });
    return script;
  }

  function copyScript(text) {
    navigator.clipboard.writeText(text);
    setScriptCopied(true);
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

      <div className="script-container" hidden={scriptIsEmpty}>
        <Highlight className="powershell">{script}</Highlight>
      </div>

      <button
        className="button"
        disabled={scriptIsEmpty}
        onClick={() => copyScript(script)}
      >
        Copy Script{" "}
        {scriptCopied ? (
          <HiClipboardCheck className="react-icon" />
        ) : (
          <HiClipboardCopy className="react-icon" />
        )}
      </button>
    </div>
  );
}

export default Generator;

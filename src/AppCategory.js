import React from "react";
import "./AppCategory.css";

function AppCategory(props) {
  function handleCheckboxChange(e) {
    let apps = new Set(props.pickedApps);

    if (e.target.checked) {
      apps.add(e.target.value);
    } else {
      apps.delete(e.target.value);
    }

    props.setPickedApps(apps);
  }

  return (
    <div className="category">
      <h3>{props.name}</h3>

      <ul>
        {props.apps.map((app) => {
          return (
            <li key={app.chocoid}>
              <label className="app-label" title={app.name}>
                <input
                  type="checkbox"
                  onChange={handleCheckboxChange.bind(this)}
                  className="app-checkbox"
                  name="apps"
                  value={app.chocoid}
                />
                {app.name}
              </label>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default AppCategory;

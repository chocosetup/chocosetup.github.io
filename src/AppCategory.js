import React from 'react';
import './AppCategory.css';

function AppCategory(props) {
  return (
    <div className="category">
      <h3>
        {props.name}
      </h3>

      <ul>
        {
          props.apps.map((app, i) => {
            return <li key={i}>
              <label class="app-label" title={app.name}>
                <input type="checkbox" class="app-checkbox" name="apps" value={app.chocoid} />
                {app.name}
              </label>
            </li>
          })
        }
      </ul>
    </div>
  );
}

export default AppCategory;

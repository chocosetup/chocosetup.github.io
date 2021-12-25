import React, { useState } from "react";
import AppCategory from "./AppCategory";
import "./AppPicker.css";
import Generator from "./Generator";
import AppList from "./AppList.json";

function AppPicker() {
  const [pickedApps, setPickedApps] = useState(new Set());

  return (
    <div className="apppicker">
      <h2>1. Pick the apps you want</h2>

      <div className="category-container">
        {AppList.categories.map((category, i) => {
          return (
            <AppCategory
              {...category}
              key={category.name + i}
              pickedApps={pickedApps}
              setPickedApps={setPickedApps}
            />
          );
        })}
      </div>

      <Generator pickedApps={pickedApps} />
    </div>
  );
}

export default AppPicker;

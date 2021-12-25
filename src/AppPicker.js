import React from "react";
import AppCategory from "./AppCategory";
import "./AppPicker.css";
import Generator from "./Generator";
import AppList from "./AppList.json";

function AppPicker() {
  return (
    <div className="apppicker">
      <h2>1. Pick the apps you want</h2>

      <div class="category-container">
        {AppList.categories.map((category, i) => {
          return <AppCategory {...category} key={i} />;
        })}
      </div>

      <Generator />
    </div>
  );
}

export default AppPicker;

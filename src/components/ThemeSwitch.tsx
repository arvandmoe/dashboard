import React, { useState } from "react";
import { getTheme, switchTheme } from "../utils/theme";

const ThemeSwitch = () => {
  const [checked, setChecked] = useState(getTheme() === "dark");

  function toggleSwitch() {
    setChecked(!checked);
    const newTheme = !checked ? "dark" : "light";
    switchTheme(newTheme);
  }

  return (
    <div className="isolate">
      <label
        htmlFor="checked-toggle"
        className="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="checked-toggle"
          className="sr-only peer"
          checked={checked}
          onChange={toggleSwitch}
        ></input>
        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-slate-300 dark:peer-focus:ring-slate-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-600"></div>
      </label>
    </div>
  );
};

export default ThemeSwitch;

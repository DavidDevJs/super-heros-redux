import React from "react";

import "./filter.css";

const FilterAdjectives = () => {
  return (
    <div className="filter__adjectives">
      <select name="skills" id="skills" defaultValue={"DEFAULT"}>
        <optgroup label="Gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </optgroup>
        <optgroup label="Race">
          <option value="human">Human</option>
        </optgroup>
        <optgroup label="Height">
          <option value="human">Human</option>
        </optgroup>
        <optgroup label="Eye Color">
          <option value="blue">blue</option>
        </optgroup>
        <optgroup label="Hair Color">
          <option value="black">Black</option>
        </optgroup>
      </select>
    </div>
  );
};

export { FilterAdjectives };

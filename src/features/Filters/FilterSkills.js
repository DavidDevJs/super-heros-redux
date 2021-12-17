import React from "react";

const FilterSkills = () => {
  return (
    <div className="skills">
      <select name="skills" id="filter-skills">
        <option value="intelligence">Intelligence</option>
        <option value="strength">Strength</option>
        <option value="speed">Speed</option>
        <option value="durability">Durability</option>
        <option value="power">Power</option>
        <option value="combat">Combat</option>
      </select>
    </div>
  );
};

export { FilterSkills };

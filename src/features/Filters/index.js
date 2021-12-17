import React from "react";
import { FilterAdjectives } from "./FilterAdjectives";
import { FilterSkills } from "./FilterSkills";

import "./filter.css";

const Filters = () => {
  return (
    <div className="filter__wrapper">
      <FilterSkills />
      <FilterAdjectives />
    </div>
  );
};

export { Filters };

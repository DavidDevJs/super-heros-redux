import React, { useState } from "react";
import { FcFilledFilter } from "react-icons/fc";

import { FilterAdjectives } from "./FilterAdjectives";
import { FilterSkills } from "./FilterSkills";

import "./filter.css";

const Filters = () => {
  const [active, setActive] = useState(false);
  return (
    <div className="filter__wrapper">
      <button
        className="filter__button"
        onClick={() => setActive((value) => !value)}
      >
        <FcFilledFilter className="filter__button--icon" />
      </button>
      <div
        className={
          active
            ? "filter__skills-container"
            : "filter__skills-container--disabled"
        }
      >
        <FilterSkills className="filter__skills" />
        <FilterAdjectives className="filter__adjectives" />
      </div>
    </div>
  );
};

export { Filters };

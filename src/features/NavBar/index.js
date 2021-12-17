import React from "react";
import { Filters } from "../Filters";
import { Search } from "../Search";

import "./nav.css";

const NavBar = () => {
  return (
    <nav className="nav__hero">
      <h1 className="nav__hero--title">Hero App</h1>
      <Filters />
    </nav>
  );
};

export { NavBar };

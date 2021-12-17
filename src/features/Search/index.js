import React from "react";

import "./search.css";

const Search = () => {
  return (
    <div className="search">
      <input
        className="search__input"
        type="text"
        name="search"
        id="hero-search"
        placeholder="Search your hero"
      />
    </div>
  );
};

export { Search };

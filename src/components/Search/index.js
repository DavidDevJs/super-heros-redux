import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setHeroes } from "../../app/slices/heroes";

import "./search.css";
import { Filters } from "../Filters";

const Search = () => {
  const [search, setSearch] = useState("Superman");

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://superheroapi.com/api/${process.env.REACT_APP_APIKEY}/search/${search}`
      )
      .then((data) => dispatch(setHeroes(data.data)))
      .catch((err) => console.log(err));
  }, [dispatch, search]);

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  return (
    <div className="search">
      <label>
        Search
        <input
          className="search__input"
          type="text"
          name="search"
          id="hero-search"
          placeholder="Name Hero ..."
          onChange={handleChange}
        />
      </label>
      <Filters />
    </div>
  );
};

export { Search };

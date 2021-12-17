import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setHeroes } from "../../app/slices/heroes";

import "./search.css";

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
      <form>
        <input
          className="search__input"
          type="text"
          name="search"
          id="hero-search"
          placeholder="Search your hero"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export { Search };

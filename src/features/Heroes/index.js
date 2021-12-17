import React from "react";
import { useSelector } from "react-redux";
import { Search } from "../Search";

import { Card } from "./Card";
const HeroSection = () => {
  const { list } = useSelector((state) => state.heroes);

  return (
    <section className="wrapper__heroes">
      <Search />
      <ul className="list__heroes">
        {list.results?.map((hero, index) => (
          <li key={index}>
            <Card {...hero} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export { HeroSection };

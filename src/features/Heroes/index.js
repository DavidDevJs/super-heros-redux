import React from "react";
import { Card } from "./Card";

const HeroSection = () => {
  return (
    <section className="wrapper__heroes">
      <ul className="list__heroes">
        <Card />
      </ul>
    </section>
  );
};

export { HeroSection };

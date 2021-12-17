import React from "react";
import "./heroes.css";

const Card = ({ ...data }) => {
  console.log(data.image);
  const styledImage = {
    backgroundImage: `url(${data.image.url})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "contain",
    backgroundPosition: "center",
  };

  return (
    <div className="card" style={styledImage}>
      <h2>{data.name}</h2>
      <ul>
        <li>intelligence: {data.powerstats.intelligence}</li>
        <li>Strength: {data.powerstats.strength} </li>
        <li>Speed: {data.powerstats.speed}</li>
        <li>Durability: {data.powerstats.durability}</li>
        <li>Power: {data.powerstats.power}</li>
        <li>Combat: {data.powerstats.combat}</li>
      </ul>
    </div>
  );
};

export { Card };

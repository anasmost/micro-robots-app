import React from "react";

import "./card.style.css";

export const Card = (props) => {
  return (
    <div className="card-container">
      <img src={`https://robohash.org/${props.robot.id}?set=set2&size=180x180`} alt="robot" />
      <h3>{props.robot.name}</h3>
      <h4>{props.robot.email}</h4>
    </div>
  );
};

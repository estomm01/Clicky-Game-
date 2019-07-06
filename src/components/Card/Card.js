//sets up the reusable Card component
import React from "react";

import "./Card.css";

//pass the image into each card so all 12 are rendered
const Card = props => (
    <div className="Card col-md-3 mt-3" onClick={props.imageClick}>
    <div className="img-container">
      <img alt={props.image.replace(".jpg", "",)} src={require("../../images/" + props.image)} />
    </div>
  </div>
);

export default Card;
//"Card col-md-4"

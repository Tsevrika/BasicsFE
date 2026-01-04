import React from "react";

function GoodsCard(props) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", width: "150px" }}>
      <img src={props.image} alt={props.name} width="120" />
      <p>{props.name}</p>
      <p>{props.price} грн</p>
    </div>
  );
}

export default GoodsCard;

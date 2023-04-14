import React from "react";
import "./styles.css";
import TypeMe, { LineBreak, Delete, Delay } from "react-typeme";
import { HeaderBack } from "../../assets";

function ServicesCard({
  title = "React Native",
  description = "Some quick example text to build on the card title and make up the bulk of the card's content.",
  subtitle = "Android & IOS",
}) {
  return (
    <div className="card my-4" style={{ width: "18rem" }}>
      <img src={HeaderBack} className="card-img-top" alt="..." />
      <div className="card-body">
        <h3>{title}</h3>
        <h5 className="scdry">{subtitle}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}

export default ServicesCard;

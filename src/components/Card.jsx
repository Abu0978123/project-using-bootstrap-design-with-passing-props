import React from "react";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <div>
      <div className="card " style={{ width: "20rem" }}>
        <img src={props.imgURL} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text ">
            Course Price <span className="color-red">{props.price}</span>
          </p>
          <p className="card-text">{props.data}</p>
          <NavLink to={''} className="btn btn-primary">Go Some Where</NavLink>
        </div>
      </div>
    </div>
  );
}

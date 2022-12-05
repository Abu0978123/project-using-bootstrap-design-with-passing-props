import React from "react";
import {  NavLink } from "react-router-dom";
export default function Common(props) {
  return (
    <section id="header" className="d-flex ">
      <div className="container-fluid nav_bg">
        <div className="row ">
          <div className="col-10 mx-auto ">
            <div className="row">
              <div className="col-md-6 d-flex justify-content-center flex-column">
                <h4>
                  {props.name} <br />
                  <strong className="brand-name"> Legend Company</strong>
                </h4>
                <i>
                  <h4 className="my-1">{props.title}</h4>
                </i>
                <div className="mt-3">
                  <NavLink className="btn btn-outline-primary" to={props.visit}>
                    {props.btnName}
                  </NavLink>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 header-img ">
                <img className="animated" src={props.imgURL} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

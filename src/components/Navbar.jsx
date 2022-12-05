import React from 'react';
import { Link, NavLink } from 'react-router-dom';
export default function Navbar() {
  return (
    <div className="row ">
        <div className="col-10 mx-auto navbarr">
    <nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid justify">
    <NavLink to={'/'} className="navbar-brand" >Project</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav margin mb-2 mb-lg-0">
      <NavLink className="nav-link"  to="/">Home</NavLink>
      <NavLink className="nav-link"  to="/services">Services</NavLink>
      <NavLink className="nav-link"  to="/about">About</NavLink>
      <NavLink className="nav-link"  to="/contact">Contact</NavLink>
      
      </ul>
    </div>
  </div>
</nav>
</div>
    </div>
  )
}

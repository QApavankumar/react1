import React from "react";

import {NavLink} from "react-router-dom";

function Navbar(){
return(
<>
<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Travel</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Bookings">Bookings</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Notifications">Notifications</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Payments">Payments</a>
        </li> 
         <li className="nav-item">
          <a className="nav-link" href="/Profile">Profile</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Search">Search</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/Settings">Settings</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</>
)
}
export default Navbar;
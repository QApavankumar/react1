import React from "react";

import {NavLink} from "react-router-dom";

function Navbar(){
return(
<nav>
<NavLink to="/">Home</NavLink>
<NavLink to="/Bookings">Bookings</NavLink>
<NavLink to="/Notifications">Notifications</NavLink>
<NavLink to="/Payments">Payments</NavLink>
<NavLink to="/Profile">Profile</NavLink>
<NavLink to="/Search">Search</NavLink>
<NavLink to="/Settings">Settings</NavLink>
</nav>

)
}
export default Navbar;
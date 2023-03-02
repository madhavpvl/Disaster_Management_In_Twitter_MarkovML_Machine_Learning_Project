import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="ui three item menu">
      <NavLink to="/tweets" className="item" target="_blank">
        New Tweets
      </NavLink>
      <NavLink to="/rules" className="item" target="_blank">
        Manage Rules
      </NavLink>
      <NavLink to="/disasterMap" className="item" target="_blank">
        DisasterMap
      </NavLink>
    </div>
  );
};

export default Navbar;
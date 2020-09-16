import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <Link to="/">
          <i className="fa fa-heartbeat"></i> Home
        </Link>
        <Link to="/recipes">
          <i className="fa fa-book"></i> Recipes
        </Link>
      </div>
      <div className="navbar-right">
        <Link to="/search">
          <i className="fa fa-search"></i> Search
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

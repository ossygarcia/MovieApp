import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Vidly
      </a>
      <div id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="/movies" className="nav-link">
              Movies
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/customers" className="nav-link">
              Customers
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/rentals" className="nav-link">
              Rentals
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <p className="navbar-brand">DAILY JOURNAL</p>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li id="home">
              <Link to="/">HOME</Link>
            </li>
            <li id="about">
              <Link to="/about">ABOUT US</Link>
            </li>
            <li id="contact">
              <Link to="/contact">CONTACT US</Link>
            </li>
            <li id="compose">
              <Link to="/compose">COMPOSE</Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;

import React from "react";
import { NavLink, Link } from "react-router-dom";
import { greeting } from "../../portfolio.js";
import "./Header.css";

const Header = ({ theme }) => {
  return (
    <div>
      <header className="header">
        <NavLink to="/" tag={Link} className="logo">
          <span style={{ color: theme.text }}> &lt;</span>
          <span className="logo-name" style={{ color: "#010101" }}>
            {greeting.logo_name}
          </span>
          <span style={{ color: theme.text }}>/&gt;</span>
        </NavLink>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu" style={{ backgroundColor: theme.body }}>
          <li>
            <NavLink
              to="/"
              tag={Link}
              exact
              activeClassName="active"
              style={{ color: theme.text }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/experience"
              tag={Link}
              activeClassName="active"
              style={{ color: theme.text }}
            >
              Experience
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              tag={Link}
              activeClassName="active"
              style={{ color: theme.text }}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              tag={Link}
              activeClassName="active"
              style={{ color: theme.text }}
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;

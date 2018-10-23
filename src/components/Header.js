import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="bold-link" exact>
      Home😂
    </NavLink>
    <NavLink to="/portfolio" activeClassName="bold-link">
      Portfolio
    </NavLink>
    <NavLink to="/contact" activeClassName="bold-link" exact>
      Contact
    </NavLink>
  </header>
);

export default Header;

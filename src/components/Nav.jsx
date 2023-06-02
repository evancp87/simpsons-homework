import React, { Component } from "react";
import { Outlet, Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <>
        <nav className="nav">
          <ul className="nav-list">
            <li>
              <Link to="/">Simpsons</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            {/* <li>
              <Link to="/splash-screen">Splash-screen</Link>
            </li> */}
          </ul>
        </nav>
        <Outlet />
      </>
    );
  }
}

export default Nav;

import { Outlet, Link } from "react-router-dom";
import React from "react";

function Layout () {
    return (
      <>
        <ul id="menu">
          <li>
            <Link to="/"><h5>Home</h5></Link>
          </li>
          <li>
            <Link to="/login"><h5>Login</h5></Link>
          </li>
          <li>
            <Link to="/register"><h5>Register</h5></Link>
          </li>
        </ul>
        <Outlet />
      </>
    )
  };
  
  export default Layout;
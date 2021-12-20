import React from "react";
import "./NavBar.css";
import Logo from "../../image/task.png";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-body">
      <div className="navbar-container">
        <Link className="navbar-logo-content" to="/">
          <img src={Logo} alt="task" className="navbar-logo-img" />
          <div className="navbar-logo">TODO</div>
        </Link>
        <div className="navbar-links">
          <div className="navbar-links__content">
            <NavLink
              activeClassName="active"
              className="navbar-links__content-link"
              to="/"
            >
              <div className="navbar-links__content-home">Home </div>
            </NavLink>

            <NavLink
              activeClassName="active"
              className="navbar-links__content-link"
              to="/add-task"
            >
              <div className="navbar-links__content-addTask">Add Task</div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

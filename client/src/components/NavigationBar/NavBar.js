import React,{useState} from "react";
import "./NavBar.css";
import Logo from "../../image/task.png";
import Hamburger from "../../image/menu.png";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
  const [show,setShow] = useState(false);
  return (
    
    <>
      <div className="navbar-body">
      {show&&<div className="navbar-links-responsive__content">
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
      </div>}

        <div className="navbar-container">
          <Link className="navbar-logo-content" to="/">
            <img src={Logo} alt="task" className="navbar-logo-img" />
            <div className="navbar-logo">TODO</div>
          </Link>
          <div className="navbar-links">
            <div></div>
            <div className="navbar-links__hamburger" onClick={()=>{setShow(!show)}}>
              <img
                src={Hamburger}
                alt="menu"
                className="navbar-links__hamburger_logo"
              />
            </div>
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
    </>
  );
};

export default NavBar;

import React, { useContext, useState } from "react";
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { UserContext } from "../user-context";
import './styles.css';

const TopNav = () => {
  const { isLoggedIn, setIsloggedIn } = useContext(UserContext);
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");
    setIsloggedIn(false);
  };

  return isLoggedIn ?
    <div>
      <Navbar color="faded" light>
        <NavbarToggler onClick={toggleNavbar} />
        <Link to="/login" onClick={logoutHandler} className = 'logout-btn'><Button color="info">Logout</Button></Link>
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link to="/events">Create Event</Link>
            </NavItem>
            <NavItem>
              <Link to="/">Dashboard</Link>
            </NavItem>
            <NavItem>
              <Link to="/myregistrations">My Registrations</Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
   : ""
};

export default TopNav;

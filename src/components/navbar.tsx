import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavbarComponent = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#">Your Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/" className="nav-link" onClick={handleLinkClick}>
            Home
          </Link>
          <NavDropdown
            title="Store"
            id="basic-nav-dropdown"
            show={dropdownOpen}
            onClick={handleDropdownClick}
          >
            <Link to="/filmlist" className="dropdown-item" onClick={handleLinkClick}>
              Lista på filmer
            </Link>
            <NavDropdown.Item href="#">Lista på skådespelare</NavDropdown.Item>
            <NavDropdown.Item href="#">Medlemmarnas rekommendationer</NavDropdown.Item>
          </NavDropdown>
          <Link to="#about" className="nav-link" onClick={handleLinkClick}>
            About
          </Link>
          <Link to="#contact" className="nav-link" onClick={handleLinkClick}>
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;

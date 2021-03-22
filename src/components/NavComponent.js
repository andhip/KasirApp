import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";

function NavComponent() {
  return (
    <Navbar variant="dark" expand="lg">
      <div className="container">
        <Navbar.Brand href="#home">
          <FontAwesomeIcon
            icon={faUtensils}
            className="mr-2"
            color="white"
            spin
          />
          <strong>HyMart</strong>App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link" active>
              Paket HyMart
            </Nav.Link>
            <NavDropdown title="Menus" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav.Link
            href="https://andhip.github.io/links"
            className="mr-sm-2 andynhov"
          >
            @andynhov
          </Nav.Link>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavComponent;

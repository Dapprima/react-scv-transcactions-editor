import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export default function NavbarComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Nav>
        <Nav.Link as={NavLink} to="/" exact>
          Transactions
        </Nav.Link>
        <Nav.Link as={NavLink} to="/login" exact>
          Login
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

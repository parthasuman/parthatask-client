import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Header = () => {
  const { logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.error(error));
  };

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand>
          <Link to="/">Partha Task</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/addtask">Add Task</Link>
            </Nav.Link>

            <Nav.Link>
              <Link to="/mytask">My Task</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/completetask">Completed Task</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/login">Login</Link>
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link>
              <Link to="/details">Details</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/media">Media</Link>
            </Nav.Link>
            <Nav.Link>
              <button onClick={handleLogOut}>Log Out</button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

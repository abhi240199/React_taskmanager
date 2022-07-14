// @flow
import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
// import { Link } from "react-router-dom";

export class Header extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav.Link href="/">
              <Navbar.Brand>
                <img
                  alt=""
                  src="https://w7.pngwing.com/pngs/36/68/png-transparent-project-management-computer-icons-task-task-text-logo-project-management-thumbnail.png"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />{" "}
                TaskManager
              </Navbar.Brand>
            </Nav.Link>
            <Nav>
              <Nav.Link href="profile">Profile</Nav.Link>

              <Nav.Link href="signin">Sign In</Nav.Link>
              <Nav.Link eventKey={2} href="signup">
                Sign Up
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </>
    );
  }
}

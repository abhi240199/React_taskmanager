// @flow
import * as React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export class Footer extends React.Component {
  render() {
    return (
      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>Footer</Navbar.Brand>
          </Container>
        </Navbar>
      </>
    );
  }
}

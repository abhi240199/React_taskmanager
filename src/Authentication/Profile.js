import * as React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
export class Profile extends React.Component {
  render() {
    return (
      <>
        <br></br>
        <br></br>

        <Card style={{ width: "18rem" }}>
          <Card.Header>My Profile</Card.Header>
          <ListGroup variant="flush">
            <ListGroup.Item>Name:Abhishek Patel</ListGroup.Item>
            <ListGroup.Item>Email:abhishek@gmail.com</ListGroup.Item>
          </ListGroup>
        </Card>
        <br></br>
        <br></br>
      </>
    );
  }
}

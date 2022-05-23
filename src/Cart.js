// @flow
import * as React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export class Cart extends React.Component {
  render() {
    return (
      <div>
        <Card style={{ width: "18rem", marginBottom: 10 }}>
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem>
              my name is abhis hdbjhw ,jhdbsf erlsghlg kljeragl my name is abhis
            </ListGroupItem>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Done</Card.Link>
            <Card.Link href="#">Delete</Card.Link>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

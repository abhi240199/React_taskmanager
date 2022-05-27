// @flow
import * as React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export class PendingTask extends React.Component {
  render() {
    const { title, text, completed, id } = this.props.task;
    return (
      <div>
        {completed === false ? (
          <Card style={{ width: "18rem", marginBottom: 10 }}>
            <Card.Body>
              <Card.Title>{title}</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>{text}</ListGroupItem>
            </ListGroup>
            <Card.Body>
              <Card.Link href="#" onClick={() => this.props.pendingTask(id)}>
                Done
              </Card.Link>
              <Card.Link
                href="#"
                onClick={() => this.props.handleDeleteTask(this.props.task)}
              >
                Delete
              </Card.Link>
            </Card.Body>
          </Card>
        ) : (
          <></>
        )}
      </div>
    );
  }
}

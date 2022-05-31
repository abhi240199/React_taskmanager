// @flow
import * as React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

export class ComletedTask extends React.Component {
  render() {
    return (
      <div>
        <h2>Completed Task</h2>
        <br></br>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {this.props.data.map((item) =>
            item.completed ? (
              <Card style={{ width: "18rem", marginBottom: 10 }} key={item.id}>
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroupItem>{item.text}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                  <Card.Link
                    href="#"
                    onClick={() => this.props.handleDeleteTask(item)}
                  >
                    Delete
                  </Card.Link>
                </Card.Body>
              </Card>
            ) : (
              <></>
            )
          )}
        </div>
      </div>
    );
  }
}

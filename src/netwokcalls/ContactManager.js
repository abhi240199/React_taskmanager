// @flow
import * as React from "react";

export class ContactManager extends React.Component {
  constructor() {
    super();
    this.state = {
      setContact: [],
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          setContact: data,
        });
      });
  }

  render() {
    console.log(this.state.setContact);
    return (
      <div>
        {this.state.setContact.map((item) => (
          <h3 key={item.id}>{item.name}</h3>
        ))}
      </div>
    );
  }
}

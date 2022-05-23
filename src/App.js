// @flow
import * as React from "react";
import { Cart } from "./Cart";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [1, 2, 3, 4, 5],
      curr_title: "",
      curr_text: "",
    };
  }
  addItem = () => {};
  render() {
    return (
      <>
        <h2>Pending Task</h2>
        <br></br>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {this.state.data.map((item) => (
            <Cart />
          ))}
        </div>
        <br></br>
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
          {this.state.data.map((item) => (
            <Cart />
          ))}
        </div>
      </>
    );
  }
}

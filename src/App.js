// @flow
import * as React from "react";
import { Cart } from "./Cart";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [1, 2, 3, 4],
      curr_title: "",
      curr_text: "",
    };
  }
  addItem = () => {};
  render() {
    return (
      <div>
        {this.state.data.map((item) => (
          <Cart />
        ))}
      </div>
    );
  }
}

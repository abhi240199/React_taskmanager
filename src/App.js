// @flow
import * as React from "react";
import { Cart } from "./Cart";
import { CompletedCart } from "./ComletedCart";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: "Study",
          text: "Daily study",
          id: 1,
          completed: false,
        },
        {
          title: "Writing",
          text: "one page writing",
          id: 2,
          completed: false,
        },
        {
          title: "Game",
          text: "Play Cricket",
          id: 3,
          completed: false,
        },
      ],
      curr_title: "",
      curr_text: "",
      id: 4,
    };
  }
  addItem = (e) => {
    this.setState({
      id: this.state.id + 1,
    });
    var taskArray = this.state.data;
    taskArray.push({
      title: this.state.curr_title,
      text: this.state.curr_text,
      id: this.state.id,
      completed: false,
    });
    this.setState({
      data: taskArray,
    });
  };
  handleText = (e) => {
    this.setState({
      curr_text: e.target.value,
    });
  };
  handleTitle = (e) => {
    this.setState({
      curr_title: e.target.value,
    });
  };
  pendingTask = (id) => {
    const temp = [...this.state.data];
    var task = temp.find((item) => item.id === id);
    task.completed = true;
    this.setState({
      data: temp,
    });
  };
  handleDeleteTask = (item) => {
    const temp = [...this.state.data];
    const index = temp.indexOf(item);
    temp.splice(index, 1);
    this.setState({
      data: temp,
    });
  };
  render() {
    return (
      <>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <h3>Create Task</h3>
          </div>
          <br></br>

          <div>
            <input
              type="text"
              placeholder="Add Title"
              onChange={this.handleTitle}
            ></input>
          </div>
          <div>
            <textarea
              type="text"
              placeholder="About Task"
              onChange={this.handleText}
            ></textarea>
          </div>
          <div>
            <input
              type="submit"
              placeholder="About Task"
              onClick={this.addItem}
            ></input>
          </div>
          <br></br>
        </div>
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
            <Cart
              key={item.id}
              task={item}
              pendingTask={this.pendingTask}
              handleDeleteTask={this.handleDeleteTask}
            />
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
            <CompletedCart
              key={item.id}
              task={item}
              handleDeleteTask={this.handleDeleteTask}
            />
          ))}
        </div>
      </>
    );
  }
}

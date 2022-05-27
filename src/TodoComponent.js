// @flow
import * as React from "react";
import { PendingTask } from "./PendingTask";
import { ComletedTask } from "./ComletedTask";
export default class TodoComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          title: "Morning",
          text: "Running",
          id: 1,
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
    console.log("addItem");
  };
  handleText = (e) => {
    this.setState({
      curr_text: e.target.value,
    });
    console.log("handleText");
  };
  handleTitle = (e) => {
    this.setState({
      curr_title: e.target.value,
    });
    console.log("handleTitle");
  };
  pendingTask = (id) => {
    const temp = [...this.state.data];
    var task = temp.find((item) => item.id === id);
    task.completed = true;
    console.log(task);
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
            <PendingTask
              key={item.id}
              task={item}
              pendingTask={this.pendingTask}
              handleDeleteTask={this.handleDeleteTask}
            />
          ))}
        </div>
        <br></br>
        <ComletedTask
          data={this.state.data}
          handleDeleteTask={this.handleDeleteTask}
        />
      </>
    );
  }
}

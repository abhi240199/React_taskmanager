// @flow
import * as React from "react";

export class Form extends React.Component {
  render() {
    console.log(this.props);
    return (
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
            onChange={(e) => this.props.handleTitle(e)}
          ></input>
        </div>
        <div>
          <textarea
            type="text"
            placeholder="About Task"
            onChange={(e) => this.handleText(e)}
          ></textarea>
        </div>
        <div>
          <input
            type="submit"
            placeholder="About Task"
            onClick={(e) => this.addItem(e)}
          ></input>
        </div>
        <br></br>
      </div>
    );
  }
}

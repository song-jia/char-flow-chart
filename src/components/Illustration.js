// @flow
import React from "react";
import Sketchpad from "./Sketchpad";

class Illustration extends React.Component {
  render() {
    let elements = [];
    return (
      <div>
        <h1>Illustration</h1>
        <Sketchpad width={400} height={300} elements={elements} />
      </div>
    );
  }
}

export default Illustration;

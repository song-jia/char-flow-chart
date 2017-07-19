// @flow
import React, { Component, PureComponent } from "react";
type Props = {
  width: number,
  height: number,
  elements: Array<mixed>
};

class Sketchpad extends PureComponent {
  props: Props;

  constructor(props: Props) {
    super(props);
  }

  render() {
    const style = {
      width: this.props.width + "px",
      height: this.props.height + "px"
    };
    return (
      <div id="canvas">
        <canvas style={style} />
      </div>
    );
  }
}

export default Sketchpad;

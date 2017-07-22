// @flow
import React, { Component, PureComponent } from "react";
import * as painter from "../painter";
import type { Item } from "../models/types";

type Props = {
  width: number,
  height: number,
  items: Array<Item>
};

class Sketchpad extends PureComponent {
  props: Props;
  canvas: HTMLCanvasElement;

  constructor(props: Props) {
    super(props);
  }

  componentDidMount() {
    let ctx: CanvasRenderingContext2D = this.canvas.getContext("2d");
    ctx.font = "15px Source Code Pro";
    painter.draw(ctx, this.props.items);
  }

  render() {
    const style = {
      width: this.props.width + "px",
      height: this.props.height + "px"
    };
    return (
      <div id="canvas">
        <canvas
          width={this.props.width}
          height={this.props.height}
          ref={(canvas: HTMLCanvasElement) => {
            this.canvas = canvas;
          }}
        />
      </div>
    );
  }
}

export default Sketchpad;

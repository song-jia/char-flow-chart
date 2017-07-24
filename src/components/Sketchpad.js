// @flow
import React, { PureComponent } from "react";
import * as painter from "../painter";
import type { Item } from "../models/types";

type Props = {
  width: number,
  height: number,
  items: Array<Item>,
  addLine: Function
};

class Sketchpad extends PureComponent {
  props: Props;
  canvas: HTMLCanvasElement;

  constructor(props: Props) {
    super(props);
    (this: any).addLineHandler = this.addLineHandler.bind(this);
  }

  componentDidMount() {
    let ctx: CanvasRenderingContext2D = this.canvas.getContext("2d");
    ctx.font = "15px Source Code Pro";
    painter.draw(ctx, this.props.items);
  }

  addLineHandler() {
    this.props.addLine({ x: 10, y: 50 }, { x: 100, y: 50 });
  }

  render() {
    return (
      <div id="canvas">
        <canvas
          width={this.props.width}
          height={this.props.height}
          ref={(canvas: HTMLCanvasElement) => {
            this.canvas = canvas;
          }}
        />

        <button onClick={this.addLineHandler}>new Line</button>
      </div>
    );
  }
}

export default Sketchpad;

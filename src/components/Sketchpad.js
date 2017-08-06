// @flow
import React, { PureComponent } from "react";
import * as painter from "../painter";
import PixelPosition from "../models/base/position/PixelPosition";

type Props = {
  width: number,
  height: number,
  items: Object,
  addLine: Function
};

class Sketchpad extends PureComponent {
  props: Props;
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;

  constructor(props: Props) {
    super(props);
    (this: any).addLineHandler = this.addLineHandler.bind(this);
  }

  componentDidMount() {
    let ctx: CanvasRenderingContext2D = this.canvas.getContext("2d");
    ctx.font = "15px Source Code Pro";
    this.ctx = ctx;
    painter.draw(ctx, this.props.items);
  }

  componentDidUpdate() {
    painter.draw(this.ctx, this.props.items);
  }

  addLineHandler() {}

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

        <button
          onClick={() =>
            this.props.addLine(
              new PixelPosition(10, 50),
              new PixelPosition(100, 50)
            )}
        >
          new horizontal Line
        </button>
        <button
          onClick={() =>
            this.props.addLine(
              new PixelPosition(150, 10),
              new PixelPosition(150, 100)
            )}
        >
          new vertical Line
        </button>
      </div>
    );
  }
}

export default Sketchpad;

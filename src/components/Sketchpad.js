// @flow
import React, { Component, PureComponent } from "react";
import Dash from "../glyphs/basic/Dash";
import Cross from "../glyphs/basic/Cross";
import position from "../glyphs/position";

type Props = {
  width: number,
  height: number,
  glyphs: Array<mixed>
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
    Cross.draw(ctx, position(30, 20));
    Dash.draw(ctx, position(10, 20));
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

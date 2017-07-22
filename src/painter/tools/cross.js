// @flow
import type { PixelPosition } from "../types";
import type { Tool } from "./types";

type CrossProps = {
  position: PixelPosition
};

const cross: Tool = {
  draw(ctx: CanvasRenderingContext2D, props: CrossProps) {
    ctx.fillText("+", props.position.x, props.position.y);
  }
};

export default cross;

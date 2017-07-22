// @flow
import type { PixelPosition } from "../types";
import type { Tool } from "./types";

type DashProps = {
  position: PixelPosition
};

const dash: Tool = {
  draw(ctx: CanvasRenderingContext2D, props: DashProps) {
    ctx.fillText("-", props.position.x, props.position.y);
  }
};

export default dash;

// @flow
import { IBasic } from "./IBasic";
import type { Position } from "../types";

class Dash implements IBasic {
  static draw(ctx: CanvasRenderingContext2D, pos: Position) {
    ctx.fillText("-", pos.x, pos.y);
  }
}

export default Dash;

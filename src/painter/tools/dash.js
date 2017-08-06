// @flow
import type { Tool } from "./types";
import Item from "../../models/items/Item";

const dash: Tool = {
  draw(ctx: CanvasRenderingContext2D, item: Item) {
    let pos = item.position.toPixel();
    ctx.fillText("-", pos.x, pos.y);
  }
};

export default dash;

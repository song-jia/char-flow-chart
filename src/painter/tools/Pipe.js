// @flow
import type { ITool } from "./ITool";
import type Item from "../../models/items/Item";

class Pipe implements ITool {
  draw(ctx: CanvasRenderingContext2D, item: Item): void {
    let pos = item.position.toPixel();
    ctx.fillText("|", pos.x, pos.y);
  }
}

export default Pipe;

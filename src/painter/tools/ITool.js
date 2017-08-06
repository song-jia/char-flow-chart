// @flow
import type Item from "../../models/items/Item";
export interface ITool {
  draw(ctx: CanvasRenderingContext2D, item: Item): void
}

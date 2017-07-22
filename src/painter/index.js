// @flow
import * as tools from "./tools";
import type { Item } from "../models/types";

export const draw = (ctx: CanvasRenderingContext2D, items: Item[]) => {
  for (let item: Item of items) {
    tools.create(item.type).draw(ctx, item.props);
  }
};

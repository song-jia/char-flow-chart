// @flow
import * as tools from "./tools";
import type { ItemsState } from "../models/store/state/Items";

export const draw = (ctx: CanvasRenderingContext2D, items: ItemsState) => {
  for (let key in items) {
    const item = items[key];
    tools.create(item.type).draw(ctx, item);
  }
};

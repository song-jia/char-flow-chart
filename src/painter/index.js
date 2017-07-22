// @flow
import toolFactory from "./tools";

export const draw = (ctx: CanvasRenderingContext2D, items: ItemModel[]) => {
  for (item of items) {
    toolFactory.create(item.type).draw(ctx, items.attributes);
  }
};

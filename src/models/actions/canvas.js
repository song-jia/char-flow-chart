// @flow
import PixelPosition from "../base/PixelPosition";
import Item from "../items/Item";
import DashItem from "../items/DashItem";
import PipeItem from "../items/PipeItem";

export function addLine(start: PixelPosition, end: PixelPosition) {
  return (dispatch: Function) => {
    let items = createLineItems(start, end);
    dispatch(updateItems(items));
  };
}

function createLineItems(start, end): Item[] {
  const direction = checkDirection(start, end);
  if (direction === "horizontal") {
    return createHorizontalLineItems(start, end);
  } else {
    return createVerticalLineItems(start, end);
  }
}

function checkDirection(
  start: PixelPosition,
  end: PixelPosition
): "horizontal" | "vertical" {
  if (start.x === end.x) return "vertical";

  if (start.y === end.y) return "horizontal";

  if (Math.abs(end.x - start.x) <= Math.abs(end.y - start.y)) return "vertical";
  else return "horizontal";
}

function createHorizontalLineItems(
  start: PixelPosition,
  end: PixelPosition
): Item[] {
  let items = [];
  let current = Math.min(start.x, end.x);
  let terminal = Math.max(start.x, end.x);
  while (current <= terminal) {
    items.push(new DashItem(new PixelPosition(current, start.y)));
    current++;
  }
  return items;
}

function createVerticalLineItems(
  start: PixelPosition,
  end: PixelPosition
): Item[] {
  let items = [];
  let current = Math.min(start.y, end.y);
  let terminal = Math.max(start.y, end.y);
  while (current <= terminal) {
    items.push(new PipeItem(new PixelPosition(start.x, current)));
    current++;
  }
  return items;
}

function updateItems(items: Item[]) {
  return {
    type: "UPDATE_ITEMS",
    items
  };
}

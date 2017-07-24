// @flow
import type { PixelPosition } from "../../painter/types";

export function addLine(start: PixelPosition, end: PixelPosition) {
  return (dispatch: Function) => {
    let items = createLineItems(start, end);
    dispatch(updateItems(items));
  };
}

function createLineItems(start, end) {
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
  // TODO: need implements
}

function createHorizontalLineItems(
  start: PixelPosition,
  end: PixelPosition
): Item[] {
  // TODO: need implements
}

function createVerticalLineItems(
  start: PixelPosition,
  end: PixelPosition
): Item[] {
  //TODO: need implements
}

function updateItems(items: Item[]) {
  return {
    type: "UPDATE_ITEMS",
    items
  };
}

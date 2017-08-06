// @flow
import PixelPosition from "./PixelPosition";
import GridPosition from "./GridPosition";
import Grid from "../Grid";

export function pixToGrid(pos: PixelPosition): GridPosition {
  return new GridPosition(
    Math.ceil(pos.x / Grid.width),
    Math.ceil(pos.y / Grid.height)
  );
}

export function gridToPixel(pos: GridPosition): PixelPosition {
  return new PixelPosition(pos.x * Grid.width, pos.y * Grid.height);
}

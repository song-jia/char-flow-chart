// @flow
import GridPosition from "./GridPosition";
import * as convertUtil from "./convertUtil";

export default class PixelPosition {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  toGrid(): GridPosition {
    return convertUtil.pixToGrid(this);
  }
}

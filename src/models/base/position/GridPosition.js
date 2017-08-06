// @flow
import PixelPosition from "./PixelPosition";
import * as convertUtil from "./convertUtil";

export default class GridPosition {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  literal(): string {
    return `${this.x},${this.y}`;
  }

  toPixel(): PixelPosition {
    return convertUtil.gridToPixel(this);
  }
}

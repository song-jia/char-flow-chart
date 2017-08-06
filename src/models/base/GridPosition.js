// @flow
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
}

// @flow
import GridPosition from "../base/GridPosition";
import type { ItemType } from "./ItemType";

export default class Item {
  position: GridPosition;
  type: ItemType;

  constructor(pos: GridPosition, type: ItemType) {
    this.position = pos;
    this.type = type;
  }
}

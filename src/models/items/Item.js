// @flow
import PixelPosition from "../base/PixelPosition";
import type { ItemType } from "./ItemType";

export default class Item {
  position: PixelPosition;
  type: ItemType;

  constructor(pos: PixelPosition, type: ItemType) {
    this.position = pos;
    this.type = type;
  }
}

// @flow
import Item from "./Item";
import type { ItemType } from "./ItemType";
import GridPosition from "../base/position/GridPosition";

const TYPE: ItemType = "cross";

export default class DashItem extends Item {
  constructor(pos: GridPosition) {
    super(pos, TYPE);
  }
}

// @flow
import Item from "./Item";
import GridPosition from "../base/position/GridPosition";

const TYPE = "dash";

export default class DashItem extends Item {
  constructor(pos: GridPosition) {
    super(pos, TYPE);
  }
}

// @flow
import Item from "./Item";
import GridPosition from "../base/GridPosition";

const TYPE = "pipe";

export default class PipeItem extends Item {
  constructor(pos: GridPosition) {
    super(pos, TYPE);
  }
}

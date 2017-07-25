// @flow
import Item from "./Item";
import PixelPosition from "../base/PixelPosition";

const TYPE = "dash";

export default class DashItem extends Item {
  constructor(pos: PixelPosition) {
    super(pos, TYPE);
  }
}

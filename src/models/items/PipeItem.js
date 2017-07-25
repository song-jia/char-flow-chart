// @flow
import Item from "./Item";
import PixelPosition from "../base/PixelPosition";
import type { ItemType } from "./ItemType";

const TYPE = "pipe";

export default class PipeItem extends Item {
  constructor(pos: PixelPosition) {
    super(pos, TYPE);
  }
}

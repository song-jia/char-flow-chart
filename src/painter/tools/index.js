// @flow
import dash from "./dash";
import cross from "./cross";
import textBox from "./textBox";
import type { Tool } from "./types";
import type { ItemType } from "../../models/items/ItemType";

const tools = {
  cross,
  dash,
  textBox
};

export default tools;

export const create = (type: ItemType): Tool => {
  switch (type) {
    case "dash":
      return dash;
    case "cross":
      return cross;
    case "textBox":
      return textBox;
    default:
      throw new Error(`tool ${type} cannot be recognized.`);
  }
};

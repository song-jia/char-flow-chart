// @flow
// import cross from "./cross";
import Dash from "./Dash";
import Pipe from "./Pipe";
// import textBox from "./textBox";
import type { ItemType } from "../../models/items/ItemType";
import type { ITool } from "./ITool";

const tools = {
  dash: new Dash(),
  pipe: new Pipe()
};
export default tools;

export function create(type: ItemType): ITool {
  switch (type) {
    case "dash":
      return tools.dash;
    // case "cross":
    //   return cross;
    // case "textBox":
    //   return textBox;
    case "pipe":
      return tools.pipe;
    default:
      throw new Error(`tool ${type} cannot be recognized.`);
  }
}

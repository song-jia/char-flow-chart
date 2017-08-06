// @flow
import Cross from "./Cross";
import Dash from "./Dash";
import Pipe from "./Pipe";
// import textBox from "./textBox";
import type { ItemType } from "../../models/items/ItemType";
import type { ITool } from "./ITool";

const tools = {
  cross: new Cross(),
  dash: new Dash(),
  pipe: new Pipe()
};
export default tools;

export function create(type: ItemType): ITool {
  switch (type) {
    case "cross":
      return tools.cross;
    case "dash":
      return tools.dash;
    // case "textBox":
    //   return textBox;
    case "pipe":
      return tools.pipe;
    default:
      throw new Error(`tool ${type} cannot be recognized.`);
  }
}

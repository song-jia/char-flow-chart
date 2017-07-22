// @flow
import dash from "./dash";
import cross from "./cross";
import textBox from "./textBox";
import type { Tool, ToolType } from "./types";

const tools = {
  cross,
  dash,
  textBox
};

export default tools;

export const create = (type: ToolType): Tool => {
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

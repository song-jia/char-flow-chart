// @flow
export type Tool = {
  draw: (ctx: CanvasRenderingContext2D, attributes: Object) => void
};

export type ToolType = "dash" | "cross" | "textBox";

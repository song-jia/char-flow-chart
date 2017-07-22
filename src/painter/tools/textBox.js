// @flow
import type { Tool } from "./types";
import type { PixelPosition } from "../types";

type TextBoxProps = {
  position: PixelPosition,
  text: string
};

const textBox: Tool = {
  draw(ctx, props: TextBoxProps) {
    ctx.fillText(props.text, props.position.x, props.position.y);
  }
};

export default textBox;

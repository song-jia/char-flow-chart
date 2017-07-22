// @flow
import type { Position } from "./types";

class TextBox {
  static draw(ctx, pos: Position, text: string) {
    ctx.fillText(text, pos.x, pos.y);
  }
}

export default TextBox;

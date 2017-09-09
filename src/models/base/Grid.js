// @flow
import * as fontUtil from "../../util/fontUtil";
import settings from "../../settings";

const fontMetric = fontUtil.getMetric(settings.fontName, settings.fontSize);

export default class Grid {
  static width: number = Math.ceil(fontMetric.width);
  static height: number = Math.ceil(fontMetric.height);
}

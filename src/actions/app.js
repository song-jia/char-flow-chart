import ActionTypes from './ActionTypes.js';

export function toolButtonClick(id) {
  return {
    type: ActionTypes.TOOL_BUTTON_CLICK,
    id: id
  };
}

export function drawLine() {
  return {
    type: ActionTypes.DRAW_LINE
  };
}

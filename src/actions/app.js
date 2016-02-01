import ActionTypes from './ActionTypes.js';

export function activateTool(tool) {
  return {
    type: ActionTypes.ACTIVATE_TOOL,
    tool: tool
  };
}

export function startUsingTool(x, y) {
  return {
    type: ActionTypes.START_USING_TOOL,
    x: x,
    y: y
  };
}

export function usingTool(x, y) {
  return {
    type: ActionTypes.USING_TOOL,
    x: x,
    y: y
  };
}

export function finishUsingTool(x, y) {
  return {
    type: ActionTypes.FINISH_USING_TOOL,
    x: x,
    y: y
  };
}
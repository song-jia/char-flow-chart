import {Map, OrderedMap} from 'immutable';
import ActionTypes from '../actions/ActionTypes';

const initialState = Map({
  buttons: OrderedMap({
    lineTool: Map({id:'lineTool', disabled: false, chosen: false, text: '直线', class: ''}),
    eraser: Map({id:'eraser', disabled: false, chosen: false, text: '清除', class: ''}),
    textEditor: Map({id:'textEditor', disabled: false, chosen: false, text: '文字', class: ''}),
    export: Map({id:'export', disabled: false, chosen: false, text: '导出', class: ''}),
    drop: Map({id:'drop', disabled: false, chosen: false, text: '清空', class: ''})
  })
});

export default function(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case ActionTypes.TOOL_BUTTON_CLICK:
      return initialState.updateIn(['buttons', action.id, 'chosen'], () => true);
    default:
      return state;
  }
}

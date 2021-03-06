import {Map, OrderedMap} from 'immutable';
import ActionTypes from '../actions/ActionTypes';

const initialState = Map({
  buttons: Map({
    // only one draw tool can be active in moment.
    activeDrawTool: '',
    drawTools: OrderedMap({
      line: Map({id:'line', disabled: false, text: '直线'}),
      rect: Map({id: 'rect', disabled: false, text: '方框'}),
      text: Map({id:'text', disabled: false, text: '文字'}),
      eraser: Map({id:'eraser', disabled: false, text: '清除'})
    }),
    workspaceTools: OrderedMap({
      export: Map({id:'export', disabled: false, text: '导出'}),
      drop: Map({id:'drop', disabled: false, text: '清空'})
    })
  })
});

export default function(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case ActionTypes.ACTIVATE_TOOL:
      return state.updateIn(['buttons', 'activeDrawTool'], () => action.tool);
    default:
      return state;
  }
}

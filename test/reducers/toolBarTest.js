import {expect} from 'chai';
import toolBarReducer from '../../src/reducers/toolBar';
import Immutable from 'immutable';

describe('toolBar reducer', () => {
  const initialState = {
    'buttons': {
      'activeDrawTool': '',
      'drawTools': {
        'eraser': {'disabled': false, 'id': 'eraser', 'text': '清除'},
        'line': {'disabled': false, 'id': 'line', 'text': '直线'},
        'text': {'disabled': false, 'id': 'text', 'text': '文字'}
      },
      'workspaceTools': {
        'drop': {'disabled': false, 'id': 'drop', 'text': '清空'},
        'export': {'disabled': false, 'id': 'export', 'text': '导出'}
      }
    }
  };
  describe('initial', () => {
    it('should return the initial state', () => {
      let state = toolBarReducer();
      let stateObj = state.toJS();
      expect(stateObj).to.deep.equal(initialState);
    });
  });
  describe('receive action for making a button active', () => {
    it ('should record the Id of active button', () => {
      let state = Immutable.fromJS(initialState);
      let tool = 'lineTool';
      let nextState = toolBarReducer(state, {type: 'ACTIVATE_TOOL', tool: tool});
      let nextStateObj = nextState.toJS();
      expect(nextStateObj['buttons']['activeDrawTool']).to.equal(tool);
    });
  });
});

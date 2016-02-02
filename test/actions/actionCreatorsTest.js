import {expect} from 'chai';
import * as actions from '../../src/actions/app';

describe('actions', () => {
  it('should be able to create an action to activate a tool button.', () => {
    const tool = 'draw-line';
    const expectedAction = {
      type: 'ACTIVATE_TOOL',
      tool: tool
    };
    expect(actions.activateTool(tool)).to.deep.equal(expectedAction);
  });
  it('should be able to create an action for start using tool.', () => {
    let x = 10;
    let y = 20;
    const expectedAction = {
      type: 'START_USING_TOOL',
      x: x,
      y: y
    };
    expect(actions.startUsingTool(x, y)).to.deep.equal(expectedAction);
  });
  it('should be able to create an action for using tool.', () => {
    let x = 10;
    let y = 20;
    const expectedAction = {
      type: 'USING_TOOL',
      x: x,
      y: y
    };
    expect(actions.usingTool(x, y)).to.deep.equal(expectedAction);
  });
  it('should be able to create an action for finish using tool.', () => {
    let x = 10;
    let y = 20;
    const expectedAction = {
      type: 'FINISH_USING_TOOL',
      x: x,
      y: y
    };
    expect(actions.finishUsingTool(x, y)).to.deep.equal(expectedAction);
  });
});

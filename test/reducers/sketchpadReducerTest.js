import sketchpadReducer from '../../src/reducers/sketchpad';
import {expect} from 'chai';
import Immutable from 'immutable';

describe('sketchpad reducer', () => {
  const initialState = {
    width: 1920,
    height: 1080,
    gridLineSize: 1,
    unitWidth: 8,
    unitHeight: 12,
    unitFontSize: 12,
    units: {},
    drawingUnits: {},
    startPoint: {},
    tool: ''
  };
  describe('initial.', () => {
    it('should return initial state.', () =>{
      //todo: need to find a way to mock document or required module to make this test case pass.
      //let initialState = sketchpadReducer();
      //expect(initialState).to.have.all.keys(['width', 'height', 'gridLineSize', 'unitWidth', 'unitFontSize', 'units', 'drawingUnits', 'startDrawingUnit']);
    });
  });
  describe('receive action ACTIVATE_TOOL.', () => {
    it ('should change current tool to specified one.', () => {
      let state = Immutable.fromJS(initialState);
      let nextstate = sketchpadReducer(state, {type:'ACTIVATE_TOOL', tool: 'line'});
      let nextStateObj = nextstate.toJS();
      expect(nextStateObj['tool']).to.equal('line');
    });
  });
  describe('receive action START_USING_TOOL.', () => {
    it('should record start point.', () => {
      let state = Immutable.fromJS(initialState);
      let nextState = sketchpadReducer(state, {type:'START_USING_TOOL', x: 100, y: 200});
      let nextStateObj = nextState.toJS();
      expect(nextStateObj['startPoint']).to.deep.equal({row: 15, col: 10});
    });
  });
  describe('receive action USING_TOOL.', () => {
    context('when the tool is drawing line.', () => {
      let state = Object.assign({}, initialState);
      state.tool = 'line';
      state.startPoint = {col: 9, row: 9}; // x: 86 y: 124
      context('when current point is on left or right of start point and on the same line of start point.', () => {
        it('should draw a horizontal line.', () => {
          let nextStateIm = sketchpadReducer(Immutable.fromJS(state), {type: 'USING_TOOL', x: 113, y: 124});
          let nextState = nextStateIm.toJS();
          let expectedState = Object.assign({}, state);
          expectedState.drawingUnits = [
            {x: 82, y: 118, col: 9, row: 9, text: '-'},
            {x: 91, y: 118, col: 10, row: 9, text: '-'},
            {x: 100, y: 118, col: 11, row: 9, text: '-'},
            {x: 109, y: 118, col: 12, row: 9, text: '-'}
          ];
          expect(nextState).to.deep.equal(expectedState);
        });
      });
      context('when current point is on top or bottom of same line as start point.', () => {
        it('should draw a vertical line.', () => {
          let nextStateIm = sketchpadReducer(Immutable.fromJS(state), {type: 'USING_TOOL', x: 86, y: 150});
          let nextState = nextStateIm.toJS();
          let expectedState = Object.assign({}, state);
          expectedState.drawingUnits = [
            {x: 82, y: 118, col: 9, row: 9, text: '|'},
            {x: 82, y: 131, col: 9, row: 10, text: '|'},
            {x: 82, y: 144, col: 9, row: 11, text: '|'}
          ];
          expect(nextState).to.deep.equal(expectedState);
        });
      });
      context('when other cases', () => {
        it('should draw a horizontal line and a vertical line.', () => {
          let nextStateIm = sketchpadReducer(Immutable.fromJS(state), {type: 'USING_TOOL', x: 113, y: 150});
          let nextState = nextStateIm.toJS();
          let expectedState = Object.assign({}, state);
          expectedState.drawingUnits = [
            {x: 82, y: 118, col: 9, row: 9, text: '-'},
            {x: 91, y: 118, col: 10, row: 9, text: '-'},
            {x: 100, y: 118, col: 11, row: 9, text: '-'},
            {x: 109, y: 118, col: 12, row: 9, text: '-'},
            {x: 109, y: 118, col: 12, row: 9, text: '+'},
            {x: 109, y: 131, col: 12, row: 10, text: '|'},
            {x: 109, y: 144, col: 12, row: 11, text: '|'}
          ];
          expect(nextState).to.deep.equal(expectedState);
        });
      });
    });
    context('when the tool is rectangle.', () => {
      let state = Object.assign({}, initialState);
      state.tool = 'rect';
      state.startPoint = {col: 9, row: 9}; // x: 86 y: 124
      context('when current point is not same as start point', () => {
        it ('should draw a rectangle.', () => {
          let nextStateIm = sketchpadReducer(Immutable.fromJS(state), {type: 'USING_TOOL', x: 105, y: 148});
          let nextState = nextStateIm.toJS();
          let expectedState = Object.assign({}, state);
          expectedState.drawingUnits = [
            {x: 82, y: 118, col: 9, row: 9, text: '+'},
            {x: 82, y: 144, col: 9, row: 11, text: '+'},
            {x: 91, y: 118, col: 10, row: 9, text: '-'},
            {x: 91, y: 144, col: 10, row: 11, text: '-'},
            {x: 100, y: 118, col: 11, row: 9, text: '+'},
            {x: 100, y: 144, col: 11, row: 11, text: '+'},
            {x: 82, y: 131, col: 9, row: 10, text: '|'},
            {x: 100, y: 131, col: 11, row: 10, text: '|'}
          ];
          expect(nextState).to.deep.equal(expectedState);
        });
      });
    });
    context('when no tool selected.', () => {
      it('should return initial state', () => {
        let state = Immutable.fromJS(initialState);
        let nextState = sketchpadReducer(state, {type: 'USING_TOOL', x:1, y:1});
        expect(state).to.equals(nextState);
      });
    });
  });
  describe('receive action FINISH_USING_TOOL.', () => {
    context('when tool is line or rect.', () => {
      it ('should save the line in drawing cache.', () => {
        let state = Object.assign({}, initialState);
        state.tool = 'line';
        state.drawingUnits = [
          {x: 82, y: 118, col: 9, row: 9, text: '-'},
          {x: 91, y: 118, col: 10, row: 9, text: '-'},
          {x: 100, y: 118, col: 11, row: 9, text: '-'},
          {x: 109, y: 118, col: 12, row: 9, text: '-'}
        ];
        let nextState = sketchpadReducer(Immutable.fromJS(state), {type:'FINISH_USING_TOOL', x: 1, y: 1});
        let nextStateObj = nextState.toJS();
        let expectedUnits = {
          9: { // col 9
            9: {x: 82, y: 118, col: 9, row: 9, text: '-'} // row 9
          },
          10: { // col 10
            9: {x: 91, y: 118, col: 10, row: 9, text: '-'} // row 9
          },
          11: { // col 11
            9: {x: 100, y: 118, col: 11, row: 9, text: '-'} // row 9
          },
          12: { // col 12
            9: {x: 109, y: 118, col: 12, row: 9, text: '-'} // row 9
          }
        };
        expect(nextStateObj.units).to.deep.equals(expectedUnits);
        expect(nextStateObj.drawingUnits).to.be.empty;
      });
      it ('should set the text of cross point to (+). ', () => {
        let state = Object.assign({}, initialState);
        state.tool = 'line';
        state.drawingUnits = [
          {x: 91, y: 105, col: 10, row: 8, text: '|'},
          {x: 91, y: 118, col: 10, row: 9, text: '|'},
          {x: 91, y: 131, col: 10, row: 10, text: '|'}
        ];
        state.units = {
          9: { // col 9
            9: {x: 82, y: 118, col: 9, row: 9, text: '-'} // row 9
          },
          10: { // col 10
            9: {x: 91, y: 118, col: 10, row: 9, text: '-'} // row 9
          },
          11: { // col 11
            9: {x: 100, y: 118, col: 11, row: 9, text: '-'} // row 9
          }
        };
        let nextState = sketchpadReducer(Immutable.fromJS(state), {type:'FINISH_USING_TOOL', x: 1, y: 1});
        let nextStateObj = nextState.toJS();
        let expectedUnits = {
          9: { // col 9
            9: {x: 82, y: 118, col: 9, row: 9, text: '-'} // row 9
          },
          10: { // col 10
            8: {x: 91, y: 105, col: 10, row: 8, text: '|'}, // row 8
            9: {x: 91, y: 118, col: 10, row: 9, text: '+'}, // row 9
            10: {x: 91, y: 131, col: 10, row: 10, text: '|'} // row 10
          },
          11: { // col 11
            9: {x: 100, y: 118, col: 11, row: 9, text: '-'} // row 9
          }
        };
        expect(nextStateObj.units).to.deep.equals(expectedUnits);
        expect(nextStateObj.drawingUnits).to.be.empty;
      });
    });
  });
});

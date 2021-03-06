import Immutable, {Map, List} from 'immutable';
import {getTextSize} from '../util/fontUtil';
import ActionTypes from '../actions/ActionTypes';

function changeTool(state, action) {
  return state.set('tool', action.tool);
}

// draw a horizontal line from unit (col1,row) to unit (col2, row), return units of line
function drawHorizontalLine(col1, col2, row, state) {
  let units = [];
  if (col1 == col2) {
    return units;
  }
  let startCol = col1 < col2 ? col1 : col2;
  let endCol = col1 > col2 ? col1 : col2;
  for (let i = startCol; i <= endCol; i++) {
    let unit = {col: i, row: row, text: '-'};
    let unitPos = getUnitPosition(i, row, state.get('unitWidth'), state.get('unitHeight'), state.get('gridLineSize'));
    unit.x = unitPos.x;
    unit.y = unitPos.y;
    units.push(unit);
  }
  return units;
}

function drawLine(state, action) {
  let currentUnit = mouseInUnit(state, action.x, action.y);
  // if (state.getIn(['lastWorkingUnit', 'row']) === currentUnit.row && state.getIn(['lastWorkingUnit', 'col']) === currentUnit.col) {
  //   return state;
  // }
  let startUnit = state.get('startPoint').toJS();
  let horizontalUnits = drawHorizontalLine(startUnit.col, currentUnit.col, startUnit.row, state);
  let verticalUnits = drawVerticalLine(startUnit.row, currentUnit.row, currentUnit.col, state);
  // set cross point
  if (horizontalUnits.length > 0 && verticalUnits.length > 0) {
    verticalUnits[0].text = '+';
  }
  let drawingUnits = horizontalUnits.concat(verticalUnits);
  // return state.set('lastWorkingUnit', Immutable.fromJS(currentUnit))
  return state.set('drawingUnits', Immutable.fromJS(drawingUnits));
}

function drawRect(state, action) {
  let currentUnit = mouseInUnit(state, action.x, action.y);
  let startUnit = state.get('startPoint').toJS();
  let drawingUnits = [];
  // top line & bottom line
  for (let col = startUnit.col; col <= currentUnit.col; col++) {
    let text = '-';
    if (col === startUnit.col || col === currentUnit.col) {
      text = '+';
    }
    drawingUnits.push(drawUnit(col, startUnit.row, text, state.get('unitWidth'), state.get('unitHeight'), state.get('gridLineSize')));
    drawingUnits.push(drawUnit(col, currentUnit.row, text, state.get('unitWidth'), state.get('unitHeight'), state.get('gridLineSize')));
  }
  // left line & right line
  for (let row = startUnit.row + 1; row <= currentUnit.row - 1; row++) {
    drawingUnits.push(drawUnit(startUnit.col, row, '|', state.get('unitWidth'), state.get('unitHeight'), state.get('gridLineSize')));
    drawingUnits.push(drawUnit(currentUnit.col, row, '|', state.get('unitWidth'), state.get('unitHeight'), state.get('gridLineSize')));
  }
  return state.set('drawingUnits', Immutable.fromJS(drawingUnits));
}

function drawUnit(col, row, text, unitWidth, unitHeight, border) {
  let unitPos = getUnitPosition(col, row, unitWidth, unitHeight, border);
  return {
    x: unitPos.x,
    y: unitPos.y,
    col: col,
    row: row,
    text: text
  };
}

// draw a vertical line from unit (col, row1) to unit (col, row2), return units of line
function drawVerticalLine(row1, row2, col, state) {
  let units = [];
  if (row1 == row2) {
    return units;
  }
  let startRow = row1 < row2 ? row1 : row2;
  let endRow = row1 > row2 ? row1 : row2;
  for (let i = startRow; i <= endRow; i++) {
    let unit = {col: col, row: i, text: '|'};
    let unitPos = getUnitPosition(col, i, state.get('unitWidth'), state.get('unitHeight'), state.get('gridLineSize'));
    unit.x = unitPos.x;
    unit.y = unitPos.y;
    units.push(unit);
  }
  return units;
}

function finishUsingTool(state, action) {
  if (state.get('tool') === 'line' || state.get('tool') === 'rect') {
    return saveDrawingUnits(state, action);
  }
  return state;
}
function getInitialState() {
  const width = 1920; // px
  const height = 1080; // px
  const gridLine = 1; //px
  const unitFontSize = 12; // the font size of unit.
  let textSize = getTextSize('-', unitFontSize, 'monospace');
  console.log(textSize);
  let unitWidth = textSize.width;
  let unitHeight = textSize.height;

  // generate grid
  // let rows = [];
  // let rowNum = Math.floor((height - gridLine) / (unitHeight + gridLine));
  // let colNum = Math.floor((width - gridLine) / (unitWidth + gridLine));
  // for (let row = 0; row < rowNum; row++) {
  //   let cols = [];
  //   for (let col = 0; col < colNum; col++) {
  //     cols.push({
  //       x: col * (unitWidth + gridLine) + gridLine,
  //       y: row * (unitHeight + gridLine) + gridLine,
  //       row: row,
  //       col: col,
  //       text: ''
  //     });
  //   }
  //   rows.push(cols);
  // }

  return Immutable.fromJS({
    width: width,
    height: height,
    gridLineSize: gridLine,
    unitWidth: unitWidth,
    unitHeight: unitHeight,
    unitFontSize: unitFontSize,
    units: {},
    drawingUnits: {},
    startPoint: {},
    currentDrawingUnit: {}
  });
}

// get (x, y) of unit
function getUnitPosition(col, row, unitWidth, unitHeight, gridLine) {
  let x =  gridLine + col * (gridLine + unitWidth);
  let y =  gridLine + row * (gridLine + unitHeight);
  return {x: x, y: y};
}

// check if the unit that will be saved should be a cross point.
function isCrossPoint(unit, units) {
  if (isHorizontal(unit)) {
    // unit besides on top or bottom is vertical line.
    let topUnit = units.getIn([unit.col.toString(), (unit.row - 1).toString()]);
    if (topUnit) {
      topUnit = topUnit.toJS();
    }
    let bottomUnit = units.getIn([unit.col.toString(), (unit.row + 1).toString()]);
    if (bottomUnit) {
      bottomUnit = bottomUnit.toJS();
    }
    return isVertical(topUnit) || isVertical(bottomUnit);
  }
  if (isVertical(unit)) {
    // unit besides on left or right is horizontal line.
    let leftUnit = units.getIn([(unit.col - 1).toString(), unit.row.toString()]);
    if (leftUnit) {
      leftUnit = leftUnit.toJS();
    }
    let rightUnit = units.getIn([(unit.col + 1).toString(), unit.row.toString()]);
    if (rightUnit) {
      rightUnit = rightUnit.toJS();
    }
    return isHorizontal(leftUnit) || isHorizontal(rightUnit);
  }
}

function isHorizontal(unit) {
  return unit ? unit.text == '-' : false;
}

function isVertical(unit) {
  return unit ? unit.text == '|' : false;
}

// get the unit mouse in.
function mouseInUnit(state, x, y) {
  let gridLineSize = state.get('gridLineSize');
  let row = Math.ceil((y - gridLineSize) / (state.get('unitHeight') + gridLineSize)) - 1;
  let col = Math.ceil((x - gridLineSize) / (state.get('unitWidth') + gridLineSize)) - 1;
  return {row: row, col: col};
}

function recordStartPoint(state, action) {
  let hoverUnit = mouseInUnit(state, action.x, action.y);
  let nextState = state.set('startPoint', Map(hoverUnit));
  return nextState;
}

// save drawing units to cache
function saveDrawingUnits (state, action) {
  let drawingUnits = state.get('drawingUnits').toJS();
  let currentUnits = state.get('units');
  let units = {};
  // convert drawingUnits: [unit, unit ...] to units {col: {row: unit, ...}, ...}
  for (let i = 0; i < drawingUnits.length; i++) {
    let drawingUnit = drawingUnits[i];
    if (isCrossPoint(drawingUnit, currentUnits)) {
      drawingUnit.text = '+';
    }
    saveUnitToUnits(drawingUnit, units);
  }
  // return state.set('units', Immutable.fromJS(units)).set('drawingUnits', List());
  return state.mergeDeep({'units': units}).set('drawingUnits', List());
}

// save a unit to units cache.
function saveUnitToUnits(unit, units) {
  let col = {};
  if (units.hasOwnProperty(unit.col)) {
    col = units[unit.col];
  } else {
    units[unit.col] = col;
  }
  col[unit.row] = unit;
}

function usingTool(state, action) {
  if (state.get('tool') === 'line') {
    return drawLine(state, action);
  }
  if (state.get('tool') === 'rect') {
    return drawRect(state, action);
  }
  return state;
}

export default function(state, action) {
  if (typeof state === 'undefined') {
    return getInitialState();
  }
  switch (action.type) {
    case ActionTypes.ACTIVATE_TOOL:
      return changeTool(state, action);
    case ActionTypes.START_USING_TOOL:
      return recordStartPoint(state, action);
    case ActionTypes.USING_TOOL:
      return usingTool(state, action);
    case ActionTypes.FINISH_USING_TOOL:
      return finishUsingTool(state, action);
    default:
      return state;
  }
}

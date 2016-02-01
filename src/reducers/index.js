import {combineReducers} from 'redux';
import drawTools from './drawTools';
import toolBar from './toolBar';
import sketchpad from './sketchpad';

export default combineReducers({
  drawTools: drawTools,
  toolBar: toolBar,
  sketchpad: sketchpad
});

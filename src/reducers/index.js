import {combineReducers} from 'redux';
import drawTools from './drawTools';
import toolBar from './toolBar';

export default combineReducers({
  'drawTools': drawTools,
  'toolBar': toolBar
});

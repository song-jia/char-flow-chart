// @flow
import Sketchpad from "../components/Sketchpad";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as canvasActions from "../models/actions/canvas";

const mapStateToProps = state => state.canvas;

const mapDispatchToProps = dispatch =>
  bindActionCreators(canvasActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sketchpad);

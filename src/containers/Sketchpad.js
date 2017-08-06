// @flow
import Sketchpad from "../components/Sketchpad";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as canvasActions from "../models/actions/canvas";

// TODO: width and height need to be calculated base on window size.
const mapStateToProps = state => ({
  height: 600,
  items: state.items,
  width: 600
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(canvasActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Sketchpad);

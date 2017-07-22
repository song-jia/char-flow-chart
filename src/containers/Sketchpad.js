// @flow
import Sketchpad from "../components/Sketchpad";
import { connect } from "react-redux";

const mapStateToProps = state => state.canvas;

export default connect(mapStateToProps)(Sketchpad);

import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/app';
import {bindActionCreators} from 'redux';
import ToolBar from '../components/ToolBar.jsx';
// import Sketchpad from '../components/Sketchpad.jsx';
import Sketchpad from '../components/SketchpadCanvas.jsx';

class App extends Component {

  render() {
    return (
      <div>
        <ToolBar {...this.props} />
        <Sketchpad {...this.props} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

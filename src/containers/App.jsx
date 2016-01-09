import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as Actions from '../actions/app';
import {bindActionCreators} from 'redux';
import ToolBar from '../components/ToolBar.jsx';

class App extends Component {

  render() {
    return (
      <div>
        <ToolBar {...this.props} />
        char flow chart app
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

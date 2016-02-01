import React,{Component} from 'react';
import ToolsGroup from './ToolsGroup.jsx';

class ToolBox extends Component {
  render() {
    const buttons = this.props.toolBar.get('buttons');
    return (
      <div className="tool-bar pure-menu pure-menu-horizontal pure-g">
        <div className="pure-u-4-5">
          <ToolsGroup
            tools={buttons.get('drawTools')}
            activeTool={buttons.get('activeDrawTool')}
            onButtonClick={this.props.actions.activateTool}/>
        </div>
        <div className="pure-u-1-5">
          <ToolsGroup
            tools={buttons.get('workspaceTools')}
            activeTool=''
            onButtonClick={this.props.actions.activateTool}/>
        </div>
      </div>
    );
  }
}

export default ToolBox;

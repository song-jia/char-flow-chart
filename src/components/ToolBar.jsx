import React,{Component} from 'react';
import ToolsGroup from './ToolsGroup.jsx';

class ToolBox extends Component {
  render() {
    const buttons = this.props.toolBar.get('buttons');
    // let buttonList = [];
    // buttons.forEach(button => {
    //   let id = button.get('id');
    //   buttonList.push(
    //     <li className="pure-menu-item">
    //       <button
    //         key={id}
    //         id={id}
    //         disabled={button.get('disabled')}
    //         className={'tool-button' + ' ' + this.chosenClass(button.get('chosen'))}
    //         onClick={e => this.buttonClick(e)}
    //       >
    //         {button.get('text')}
    //       </button>
    //     </li>
    //   );
    // });
    return (
      <div className="tool-bar pure-menu pure-menu-horizontal pure-g">
        <div className="pure-u-4-5">
          <ToolsGroup
            tools={buttons.get('drawTools')}
            activeTool={buttons.get('activeDrawTool')}
            onButtonClick={this.props.actions.toolButtonClick}/>
        </div>
        <div className="pure-u-1-5">
          <ToolsGroup
            tools={buttons.get('workspaceTools')}
            activeTool=''
            onButtonClick={this.props.actions.toolButtonClick}/>  
        </div>
      </div>
    );
  }
}

export default ToolBox;

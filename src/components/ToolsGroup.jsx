import React, {Component} from 'react';

class ToolsGroup extends Component {
  render() {
    let {tools, activeTool} = this.props;
    let buttons = tools.map(v => {
      let id = v.get('id');
      return (
        <button
          key={id}
          id={id}
          disabled={v.get('disabled')}
          className={'tool-button' + (id === activeTool ? ' tool-button-active' : '')}
          onClick={e => this.handleButtonClick(e)}
        >
          {v.get('text')}
        </button>
      );
    });
    return (
      <ul className="pure-menu-list">
        {buttons.toArray()}
      </ul>
    );
  }

  handleButtonClick(e) {
    this.props.onButtonClick(e.target.id);
  }
}

export default ToolsGroup;

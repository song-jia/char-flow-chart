import React,{Component} from 'react';

class ToolBox extends Component {
  render() {
    const buttons = this.props.toolBar.get('buttons');
    let buttonList = [];
    buttons.forEach(button => {
      let id = button.get('id');
      buttonList.push(
        <button
          key={id}
          id={id}
          disabled={button.get('disabled')}
          className={button.get('class') + ' ' + this.chosenClass(button.get('chosen'))}
          onClick={e => this.buttonClick(e)}
        >
          {button.get('text')}
        </button>);
    });
    return (
      <div>
        {buttonList}
      </div>
    );
  }
  chosenClass(chosen) {
    return chosen ? 'chosen' : '';
  }
  buttonClick(e) {
    this.props.actions.toolButtonClick(e.target.id);
  }

  disableButton(disabled) {
    return disabled ? 'disabled' : '';
  }
}

export default ToolBox;

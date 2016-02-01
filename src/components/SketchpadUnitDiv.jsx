import React, {Component} from 'react';

class SketchpadUnitDiv extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.data !== this.props.data;
  }
  render() {
    let unit = this.props.data;
    let style = {
      backgroundColor: 'white',
      position: 'absolute',
      width: this.props.width + 'px',
      height: this.props.height + 'px',
      left: unit.getIn(['position', 'x']) + 'px',
      top: unit.getIn(['position', 'y']) + 'px'
    };
    return(
      <div id={unit.get('id')} style={style} onClick={e => this.handleClick(e)}>
        {unit.get('text')}
      </div>
    );
  }

  handleClick(e) {
    this.props.onMoveIn(e.target.id);
  }
}

export default SketchpadUnitDiv;

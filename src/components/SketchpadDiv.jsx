import React, {Component} from 'react';
import SketchpadUnitDiv from './SketchpadUnitDiv.jsx';

class Sketchpad extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.sketchpad !== this.props.sketchpad;
  }

  render() {
    let {sketchpad} = this.props;
    let units = sketchpad.get('units');
    let unitsComponents = [];
    units.forEach(
      row => {
        row.forEach (
          unit => {
            unitsComponents.push(
              <SketchpadUnitDiv onMoveIn={this.props.actions.drawLine} key={unit.get('id')} data={unit} width={sketchpad.get('unitWidth')} height={sketchpad.get('unitHeight')}/>
            );
          }
        );
      }
    );

    let style = {
      backgroundColor: 'red',
      width: sketchpad.get('width'),
      height:sketchpad.get('height'),
      position: 'relative',
      fontFamily: 'monospace',
      fontSize: sketchpad.get('unitFontSize')
    };
    return(
      <div style={style}>
        {unitsComponents}
      </div>
    );
  }
}

export default Sketchpad;

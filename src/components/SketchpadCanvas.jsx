import React,{Component} from 'react';

class Sketchpad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouseDown: false
    };
  }

  componentDidMount() {
    let {sketchpad} = this.props;
    let canvas = this.refs.drawArea;
    this.initialPad(
      canvas,
      sketchpad.get('width'),
      sketchpad.get('height'),
      sketchpad.get('unitWidth'),
      sketchpad.get('unitHeight'),
      sketchpad.get('gridLineSize')
    );
  }

  componentDidUpdate(preProps) {
    let {sketchpad} = this.props;
    this.clearPreDrawingUnits(preProps);
    let drawingUnits = sketchpad.get('drawingUnits');
    let units = sketchpad.get('units');
    let preUnits = preProps.sketchpad.get('units');
    if (units !== preUnits) {
      this.displayUnits(units);
    }
    drawingUnits.forEach((unit) => {
      this.displayDrawingUnit(unit); 
    });
  }

  displayUnits(units) {
    units.forEach((row) => {
      row.forEach((unit) => {
        this.displayUnit(unit);
      });
    });
  }

  clearPreDrawingUnits(props) {
    let {sketchpad} = props;
    let drawingUnits = sketchpad.get('drawingUnits');
    let canvas = this.refs.drawArea;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    drawingUnits.forEach((unit) => {
      ctx.fillRect(unit.get('x'), unit.get('y'), sketchpad.get('unitWidth'), sketchpad.get('unitHeight'));
    });
  }

  displayUnit(unit) {
    let canvas = this.refs.drawArea;
    let {sketchpad} = this.props;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(unit.get('x'), unit.get('y'), sketchpad.get('unitWidth'), sketchpad.get('unitHeight'));
    ctx.fillStyle = '#FF0000';
    ctx.font = '12px monospace';
    ctx.textBaseline = 'middle';
    ctx.fillText(unit.get('text'), unit.get('x'), unit.get('y') + (sketchpad.get('unitHeight') / 2) - 1);
  }

  displayDrawingUnit(unit) {
    let canvas = this.refs.drawArea;
    let {sketchpad} = this.props;
    let ctx = canvas.getContext('2d');
    ctx.fillStyle = '#CCCCCC';
    ctx.fillRect(unit.get('x'), unit.get('y'), sketchpad.get('unitWidth'), sketchpad.get('unitHeight'));
    ctx.fillStyle = '#FF0000';
    ctx.font = '12px monospace';
    ctx.textBaseline = 'middle';
    ctx.fillText(unit.get('text'), unit.get('x'), unit.get('y') + (sketchpad.get('unitHeight') / 2) - 1);
  }

  initialPad(canvas, width, height, unitWidth, unitHeight, gridLineSize) {
    canvas.width = width;
    canvas.height = height;
    let ctx = canvas.getContext('2d');
    let lineColor = 'rgb(42, 185, 132)';
    // draw grid.
    // draw vertical lines
    for (let x = 0; x < width; x += unitWidth + gridLineSize) {
      ctx.lineWidth = gridLineSize;
      ctx.strokeStyle = lineColor;
      ctx.moveTo(x + 0.5, 0);
      ctx.lineTo(x + 0.5, height);
      ctx.stroke();
    }
    // draw horizontal lines
    for (let y = 0; y < height; y += unitHeight + gridLineSize) {
      ctx.lineWidth = gridLineSize;
      ctx.strokeStyle = lineColor;
      ctx.moveTo(0, y + 0.5);
      ctx.lineTo(width, y + 0.5);
      ctx.stroke();
    }
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.sketchpad !== this.props.sketchpad
      && nextProps.sketchpad.get('drawingUnits') !== this.props.sketchpad.get('drawingUnits');
  }


  render() {
    return (
      <div id="canvas">
        <canvas ref="drawArea" onMouseDown={e => this.onMouseDown(e)} onMouseUp={e => this.onMouseUp(e)}
          onMouseMove={e => this.onMouseMove(e)}/>
      </div>
    );
  }

  onMouseDown(e) {
    this.setState({
      mouseDown: true
    });
    this.props.actions.startUsingTool(e.clientX, e.clientY);
  }

  onMouseUp(e) {
    this.setState({
      mouseDown: false
    });
    this.props.actions.finishUsingTool(e.clientX, e.clientY);
  }

  onMouseMove(e) {
    if (this.state.mouseDown) {
      this.props.actions.usingTool(e.clientX, e.clientY);
    }
  }
}

export default Sketchpad;

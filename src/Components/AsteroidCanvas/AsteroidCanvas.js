import React, { Component } from 'react';
import styled from 'styled-components';

// mario colors
// sky blue: #9494FF;
// mtn green: #109400;
// tree/bush green: #82CE2C;
// brick brown: #9C4A00;
// ? block: #E79C21;
// dungeon blue : #007B8C
// castle grey: #BCBCBC;
// lava red: #D62A16
// water blue: #2441E8;
// coral pink: #F15EA1;
// coral pink 2: #CC2276;

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

class AsteroidCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angle: 0,
      containW: 0,
      containH: 0
    };
    this.containerRef = React.createRef();
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  componentDidMount() {
    this.rAF = requestAnimationFrame(this.updateAnimationState);
    this.setState({
      containW: this.containerRef.current.clientWidth,
      containH: this.containerRef.current.clientHeight
    });
    console.log('bro im mounting!');
    console.dir(this.containerRef.current);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  updateAnimationState() {
    this.setState(prevState => ({ angle: prevState.angle + 1 }));
    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  render() {
    return (
      <CanvasContainer ref={this.containerRef}>
        <Canvas
          angle={this.state.angle}
          containW={this.state.containW}
          containH={this.state.containH}
        />
      </CanvasContainer>
    );
  }
}

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    const { angle, containW, containH } = this.props;
    //  console.log(`hi im the canvas updating`);
    //  console.log(`w: ${containW}`);
    //  console.log(`h: ${containH}`);
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    //  const width = `${containW}px`;
    //  const height = `${containH}px`;
    ctx.save();
    ctx.beginPath();
    ctx.clearRect(0, 0, width, height);
    ctx.translate(width / 2, height / 2);
    ctx.rotate((angle * Math.PI) / 180);
    ctx.fillStyle = '#4397AC';
    ctx.fillRect(-width / 4, -height / 4, width / 2, height / 2);
    ctx.restore();
  }

  render() {
    return (
      <canvas
        className="asteroid-canvas"
        width={this.props.containW}
        height={this.props.containH}
        ref={this.canvasRef}
      ></canvas>
    );
  }
}

export default AsteroidCanvas;

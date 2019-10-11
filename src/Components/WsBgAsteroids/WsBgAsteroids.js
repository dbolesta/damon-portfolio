import React, { Component } from 'react';
import styled from 'styled-components';

import { getRandomIntInclusive } from '../../Utils/utils';

// helpful article
// https://philna.sh/blog/2018/09/27/techniques-for-animating-on-the-canvas-in-react/

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

// function to create semi-random asteroid shapes to use in canvas draw
// bless this beautiful boy:
// https://embed.com/typescript-games/html-canvas-asteroids.html
function polyPoints(size) {
  let xrand = 0;
  let yrand = 0;

  let pointList = [];

  xrand = Math.round(Math.random() * size - size / 2);
  yrand = Math.round(Math.random() * size - size / 2);

  pointList.push({ x: xrand, y: yrand + 3 * size });

  xrand = Math.round(Math.random() * size - size / 2);
  yrand = Math.round(Math.random() * size - size / 2);

  pointList.push({ x: xrand - 1 * size, y: yrand + 2 * size });

  xrand = Math.round(Math.random() * size - size / 2);
  yrand = Math.round(Math.random() * size - size / 2);

  pointList.push({ x: xrand - 2 * size, y: yrand + 2 * size });

  xrand = Math.round(Math.random() * size - size / 2);
  yrand = Math.round(Math.random() * size - size / 2);

  pointList.push({ x: xrand - 3 * size, y: yrand + size });

  xrand = Math.round(Math.random() * size - size / 2);
  yrand = Math.round(Math.random() * size - size / 2);

  pointList.push({ x: xrand - 4 * size, y: yrand });

  xrand = Math.round(Math.random() * size - size / 2);
  yrand = Math.round(Math.random() * size - size / 2);

  pointList.push({ x: xrand - 1 * size, y: yrand - 3 * size });

  xrand = Math.round(Math.random() * size - size / 2);
  yrand = Math.round(Math.random() * size - size / 2);

  pointList.push({ x: xrand + 2 * size, y: yrand - 4 * size });

  xrand = Math.round(Math.random() * size - size / 2);
  yrand = Math.round(Math.random() * size - size / 2);

  pointList.push({ x: xrand + 2 * size, y: yrand - 3 * size });

  xrand = Math.round(Math.random() * size - size / 2);
  yrand = Math.round(Math.random() * size - size / 2);

  pointList.push({ x: xrand + 4 * size, y: yrand - 2 * size });

  xrand = Math.round(Math.random() * size - size / 2);
  yrand = Math.round(Math.random() * size - size / 2);

  pointList.push({ x: xrand + 4 * size, y: yrand + size });

  xrand = Math.round(Math.random() * size - size / 2);
  yrand = Math.round(Math.random() * size - size / 2);

  pointList.push({ x: xrand + 3 * size, y: yrand + 2 * size });

  return pointList;
}

// Asteroid Container

class AsteroidCanvas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balls: [],
      containW: 0,
      containH: 0
    };
    this.containerRef = React.createRef();
    this.updateAnimationState = this.updateAnimationState.bind(this);
  }

  // used to update canvas size on window resize
  updateDimensions = () => {
    this.setState({
      containW: this.containerRef.current.clientWidth,
      containH: this.containerRef.current.clientHeight + 50
    });
  };

  // Asteroid Container Mounted:
  // we need to initilize data, notjust width and height,
  // but starting positions, velocity, color, id data for asteroids
  componentDidMount() {
    window.addEventListener('resize', this.updateDimensions);
    // start requestAnimationFrame
    this.rAF = requestAnimationFrame(this.updateAnimationState);

    // make vars for canvas height and width, since we'll need em multiple times
    const containW = this.containerRef.current.clientWidth;
    const containH = this.containerRef.current.clientHeight + 50; // maybe fixes canvas height not reaching bottom sometimes..?

    // make empty array, and fill it with initial data for asteroids
    // each object has information for 1 asteroid
    let balls = [];

    let pongColors = [
      '#D0E671',
      '#A6E089',
      '#68F1AD',
      '#7DD3DE',
      '#A7CAE6',
      '#E6D4F9',
      'hsl(0, 83%, 68%)',
      'hsl(23, 83%, 68%)'
    ];

    for (var i = 0; i < pongColors.length * 2; i++) {
      let size = getRandomIntInclusive(6, 20);
      let points = polyPoints(size);

      balls.push({
        id: i,
        x: getRandomIntInclusive(0, containW),
        y: getRandomIntInclusive(0, containH),
        velX:
          parseFloat(`0.${getRandomIntInclusive(0, 9)}`) *
          (Math.round(Math.random()) * 2 - 1), // randomly make negative or not
        velY:
          parseFloat(`0.${getRandomIntInclusive(0, 9)}`) *
          (Math.round(Math.random()) * 2 - 1),
        color: pongColors[i % pongColors.length], // since we loop throuh colors twice, need to use mod to select colors on second loop
        size: size,
        rotationSpeed: getRandomIntInclusive(-2, 2, false),
        rotation: 0,
        points: points
      });
    }

    this.setState({
      containW,
      containH,
      balls
    });
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
    window.removeEventListener('resize', this.updateDimensions);
  }

  // where all updating of asteroid information will occur
  updateAnimationState() {
    let ballCopy = { ...this.state.balls };

    // wrap objects (x, y position) when they get to the edges of the canvas
    for (var i in ballCopy) {
      if (
        ballCopy[i].x - ballCopy[i].size * 4 >=
        this.state.containW
      ) {
        ballCopy[i].x = 1 - ballCopy[i].size * 4;
      }
      if (ballCopy[i].x + ballCopy[i].size * 4 <= 0) {
        ballCopy[i].x = this.state.containW + ballCopy[i].size * 4;
      }
      if (
        ballCopy[i].y - ballCopy[i].size * 4 >=
        this.state.containH
      ) {
        ballCopy[i].y = 1 - ballCopy[i].size * 4;
      }
      if (ballCopy[i].y + ballCopy[i].size * 4 <= 0) {
        ballCopy[i].y = this.state.containH + ballCopy[i].size * 4;
      }

      // move at assigned velocity
      ballCopy[i].x += ballCopy[i].velX;
      ballCopy[i].y += ballCopy[i].velY;

      ballCopy[i].rotation += ballCopy[i].rotationSpeed * 0.3;
    }

    this.setState({ balls: ballCopy });

    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  render() {
    return (
      <CanvasContainer ref={this.containerRef}>
        <Canvas
          balls={this.state.balls}
          containW={this.state.containW}
          containH={this.state.containH}
        />
      </CanvasContainer>
    );
  }
}

////////////
////
//// Canvas Component Starts here
////
////////////

class Canvas extends React.Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidUpdate() {
    const { balls } = this.props;

    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;

    //width of asteroids lines
    ctx.lineWidth = 2;

    // use this for clean clear
    ctx.clearRect(0, 0, width, height);

    // // use this for fadded effect
    // ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    // ctx.fillRect(0, 0, width, height);

    for (var i in balls) {
      ctx.save();

      // move based on translations, dont actually change x or y position
      ctx.translate(balls[i].x, balls[i].y);

      ctx.rotate((balls[i].rotation * Math.PI) / 180); // extra math so we can use degress instead of radians

      ctx.beginPath();
      ctx.strokeStyle = balls[i].color;

      ctx.moveTo(balls[i].points[0].x, balls[i].points[0].y);
      for (var j = 1; j < balls[i].points.length; j++) {
        ctx.lineTo(balls[i].points[j].x, balls[i].points[j].y);
      }
      ctx.closePath();

      // if you want asteroids to be filled
      // ctx.fillStyle = '#000';
      // ctx.fill();

      ctx.stroke();

      ctx.restore();
    }
  } // end componentDidUpdate()

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

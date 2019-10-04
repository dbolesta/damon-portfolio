import React, { Component } from 'react';
import styled from 'styled-components';

import { getRandomIntInclusive } from '../../Utils/utils';

const CanvasContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

// function to create semi-random asteroic shapes to use in canvas draw
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

  // Asteroid Container Mounted:
  // we need to initilize data, notjust width and height,
  // but starting positions, velocity, color, id data for asteroids
  componentDidMount() {
    // start requestAnimationFrame
    this.rAF = requestAnimationFrame(this.updateAnimationState);

    // make vars for canvas height and width, since we'll need em multiple times
    const containW = this.containerRef.current.clientWidth;
    const containH = this.containerRef.current.clientHeight;

    // make empty array, and fill it with initial data for asteroids
    // each object has information for 1 asteroid

    let marioColors = [
      '#9494FF',
      '#109400',
      '#82CE2C',
      '#9C4A00',
      '#E79C21',
      '#007B8C',
      '#BCBCBC',
      '#D62A16',
      '#2441E8',
      '#F15EA1',
      '#CC2276'
    ];

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

    let balls = [];
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

  componentDidMount() {}

  componentDidUpdate() {
    const { angle, containW, containH } = this.props;

    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    ctx.save();

    ctx.lineWidth = 2;

    // use this for clean clear
    ctx.clearRect(0, 0, width, height);

    // these 2 functions should... probably.. not be in the update function...?
    function Shape(x, y, velX, velY) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
    }

    function Ball(
      x,
      y,
      velX,
      velY,
      color,
      size,
      points,
      rotation,
      rotationSpeed
    ) {
      Shape.call(this, x, y, velX, velY);

      this.color = color;
      this.size = size;
      this.points = points;
      this.rotation = rotation;
      this.rotationSpeed = rotationSpeed;
    }

    Ball.prototype = Object.create(Shape.prototype);
    Ball.prototype.constructor = Ball;

    // some prototypes
    Ball.prototype.draw = function() {
      ctx.save();

      // move based on translations, dont actually change x or y position
      ctx.translate(this.x, this.y);

      ctx.rotate((this.rotation * Math.PI) / 180); // extra math so we can use degress instead of radians

      ctx.beginPath();
      ctx.strokeStyle = this.color;

      ctx.moveTo(this.points[0].x, this.points[0].y);
      for (var i = 1; i < this.points.length; i++) {
        ctx.lineTo(this.points[i].x, this.points[i].y);
      }
      ctx.closePath();

      // if you want asteroids to be filled
      // ctx.fillStyle = '#000';
      // ctx.fill();

      ctx.stroke();

      ctx.restore();
    };

    const { balls } = this.props;

    var newBalls = [];

    Object.keys(balls).map(function(keyName, keyIndex) {
      // use keyName to get current key's name
      // and a[keyName] to get its value
      newBalls.push(
        new Ball(
          balls[keyName].x,
          balls[keyName].y,
          balls[keyName].velX,
          balls[keyName].velY,
          balls[keyName].color,
          balls[keyName].size,
          balls[keyName].points,
          balls[keyName].rotation,
          balls[keyName].rotationSpeed
        )
      );
    });

    for (var i = 0; i < newBalls.length; i++) {
      newBalls[i].draw();
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

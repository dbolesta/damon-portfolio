import React, { Component } from 'react';
import styled from 'styled-components';

import { getRandomIntInclusive } from '../../Utils/utils';

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
    let balls = [];
    for (var i = 0; i < 10; i++) {
      balls.push({
        id: i,
        x: getRandomIntInclusive(0, containW),
        y: getRandomIntInclusive(0, containH),
        velX: getRandomIntInclusive(-7, 7),
        velY: getRandomIntInclusive(-7, 7),
        color:
          'rgb(' +
          getRandomIntInclusive(0, 255) +
          ',' +
          getRandomIntInclusive(0, 255) +
          ',' +
          getRandomIntInclusive(0, 255) +
          ')',
        size: getRandomIntInclusive(10, 20),
        angle: getRandomIntInclusive(-2, 2)
      });
    }

    this.setState({
      containW,
      containH,
      balls
    });
    console.log('bro im mounting!');
    console.dir(this.state);
  }

  componentWillUnmount() {
    cancelAnimationFrame(this.rAF);
  }

  // where all updating of asteroid information will occur
  updateAnimationState() {
    //  this.setState(prevState => ({ angle: prevState.angle + 1 }));

    let ballCopy = { ...this.state.balls };

    //  console.log('%c BallCopyLoop', 'font-size: 16px');

    for (var i in ballCopy) {
      if (ballCopy[i].x + ballCopy[i].size >= this.state.containW) {
        ballCopy[i].velX = -ballCopy[i].velX;
      }
      if (ballCopy[i].x - ballCopy[i].size <= 0) {
        ballCopy[i].velX = -ballCopy[i].velX;
      }
      if (ballCopy[i].y + ballCopy[i].size >= this.state.containH) {
        ballCopy[i].velY = -ballCopy[i].velY;
      }
      if (ballCopy[i].y - ballCopy[i].size <= 0) {
        ballCopy[i].velY = -ballCopy[i].velY;
      }
      ballCopy[i].x += ballCopy[i].velX;
      ballCopy[i].y += ballCopy[i].velY;
    }

    this.setState({ balls: ballCopy });

    //  console.log('%c Ball Copy', 'font-size: 16px');
    //  console.log(ballCopy);

    this.rAF = requestAnimationFrame(this.updateAnimationState);
  }

  render() {
    //  console.log(
    //    '%c About to pass state... we there?',
    //    'font-size: 16px'
    //  );
    //  console.log(this.state.balls);

    return (
      <CanvasContainer ref={this.containerRef}>
        <Canvas
          balls={this.state.balls}
          angle={this.state.angle}
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

  componentDidMount() {
    console.log(
      '%c Canvas Mount!! Where the balls at',
      'font-size: 16px'
    );
    console.log(this.props);

    //  this.setState({
    //    balls: balls
    //  });
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

    ctx.lineWidth = 3;

    // use this for clean clear
    ctx.clearRect(0, 0, width, height);

    // use this for fadded effect
    //  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
    //  ctx.fillRect(0, 0, width, height);

    /// start okey...

    function Shape(x, y, velX, velY) {
      this.x = x;
      this.y = y;
      this.velX = velX;
      this.velY = velY;
    }

    function Ball(x, y, velX, velY, color, size) {
      Shape.call(this, x, y, velX, velY);

      this.color = color;
      this.size = size;
    }

    Ball.prototype = Object.create(Shape.prototype);
    Ball.prototype.constructor = Ball;

    // some prototypes
    Ball.prototype.draw = function() {
      console.log('should be drawing...');
      ctx.beginPath();
      // ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;

      // asteroid attempt..
      // ctx.moveTo(this.x, this.y);
      // ctx.lineTo(this.x - 3, this.y - 3);
      // ctx.lineTo(this.x - 4, this.y - 4);
      // ctx.lineTo(this.x + 4, this.y + 4);
      // ctx.lineTo(this.x + 7, this.y + 7);
      // ctx.lineTo(this.x + 9, this.y + 9);
      // ctx.closePath();

      ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
      ctx.stroke();
      // ctx.fill();
    };

    //  console.log('%c Uh here wtf, stete?', 'font-size: 16px');
    //  console.log(this.props.balls);

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
          balls[keyName].size
        )
      );
    });

    for (var i = 0; i < newBalls.length; i++) {
      newBalls[i].draw();
    }
    /// end. okayy....

    //  ctx.beginPath();
    //  ctx.translate(width / 2, height / 2);
    //  ctx.rotate((angle * Math.PI) / 180);
    //  ctx.strokeStyle = '#2441E8';
    //  ctx.strokeRect(-width / 4, -height / 4, width / 2, height / 2);
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

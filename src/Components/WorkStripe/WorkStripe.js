import React from 'react';
import styled, { keyframes } from 'styled-components';

import WorkCard from '../WorkCard';

// maybe use these if canvas fails..?
import asteroid from '../../Images/asteroidtest3.svg';
import asteroidRed from '../../Images/asteroidRed.svg';
import asteroidBlue from '../../Images/asteroidBlue.svg';
import asteroidYellow from '../../Images/asteroidYellow.svg';
import asteroidGreen from '../../Images/asteroidGreen.svg';

import WsBgAsteroids from '../WsBgAsteroids';
import WsBgCircle from '../WsBgCircle';
import WsBgPerspective from '../WsBgPerspective';

const WorkStripeContainer = styled.div`
  text-align: left;
  padding: 2rem;
  background-color: ${props => props.bgColor || 'white'};
  position: relative;
  overflow: hidden;
`;

const WorkStripeName = styled.h2`
  /* background-color: #565656; */
  color: ${props => props.textColor};
  display: inline-block;
  font-family: 'Varela Round';
  margin: 0;
  margin-left: -2rem;
  padding: 0 2rem;
  text-align: left;
  font-size: 5rem;
  font-weight: 200;
  position: relative;
  z-index: 2;


  /* sites specific styling */
  ${props =>
    props.sites
      ? `-webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-color: #ffff00;
  mix-blend-mode: difference;`
      : ''}

  /* games specific styling */
  ${props =>
    props.games
      ? `background-image: radial-gradient(red 1px, transparent 1px), radial-gradient(red 1px, transparent 1px);
      background-position: 0px 0, 5px 5px;
      background-size: 10px 10px;`
      : ''}
`;

const WorkStripeWrapper = styled.div`
  position: relative;
  z-index: 2;
  margin: 0 -2rem; /* maybe messy, consider refactoring */
`;

const WorkCardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const asteroidAnim = (top, right, bottom, left) => keyframes`
  0% {
    top: 40%;
    left: 20%;
  }
  50% {
    top: 110%;
    left: 110%;
  }
  51% {
    top: -10%;
    left: -10%;
  }
  100% {
    top: 40%;
    left: 20%;
  }
`;

const AsteroidsContainer = styled.div`
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  img {
    position: absolute;
    border: 1px solid red;
    top: 10%;
    left: 30%;

    &:nth-of-type(1) {
      /* top: 0%;
      left: 10%; */
      animation: ${asteroidAnim(null, null, null, null)} 4s infinite;
      /* animation-delay: 0.3s; */
    }
    &:nth-of-type(2) {
      top: 10%;
      left: 30%;
    }
    &:nth-of-type(3) {
      top: 25%;
      left: 5%;
    }
    &:nth-of-type(4) {
      top: 50%;
      left: 85%;
    }
    &:nth-of-type(5) {
      top: 7%;
      left: 60%;
    }
  }

  /* svg {
    stroke: rgb(255, 255, 255);
    stroke-width: 3px;
    position: absolute;
    border: 1px solid red;
  } */
`;

const WorkStripe = React.forwardRef((props, ref) => {
  return (
    <WorkStripeContainer
      ref={ref}
      className="rotate-theme"
      bgColor={props.bgColor}
    >
      <WorkStripeName
        textColor={props.textColor}
        redDot={props.redDot}
        sites={props.sites}
        games={props.games}
      >
        {props.category}
      </WorkStripeName>
      <WorkStripeWrapper>
        <WorkCardsContainer>
          {props.data.map(work => {
            return <WorkCard data={work} />;
          })}
        </WorkCardsContainer>
      </WorkStripeWrapper>

      {props.circleBg ? <WsBgPerspective /> : null}

      {props.games ? <WsBgAsteroids /> : null}
    </WorkStripeContainer>
  );
});

export default WorkStripe;

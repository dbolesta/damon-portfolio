import React from 'react';
import styled, { keyframes } from 'styled-components';

import WorkCard from '../WorkCard';

console.log('Ayyyy, big boy');

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
  /* border: 1px solid red; */
  /* width: 100vw; */
  overflow-x: scroll;
  position: relative;
  z-index: 2;
`;

const WorkCardsContainer = styled.div`
  display: flex;
`;

const CircleBg = styled.div`
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  span {
    position: absolute;
    mix-blend-mode: difference;

    &:nth-of-type(1) {
      top: 6%;
      left: -9%;
      width: 50rem;
      height: 50rem;
      background-color: pink;
      border-radius: 50%;
    }
    &:nth-of-type(2) {
      top: -6%;
      right: -24%;
      width: 50rem;
      height: 50rem;
      background-color: blue;
      border-radius: 50%;
    }
    &:nth-of-type(3) {
      bottom: 25%;
      width: 60rem;
      height: 60rem;
      background-color: red;
      border-radius: 50%;
    }
  }
`;

// @keyframes spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

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

  svg {
    stroke: rgb(255, 255, 255);
    stroke-width: 3px;
    position: absolute;
    top: 0;
    right: 0;
    display: none;
  }
`;

const WorkStripe = props => {
  console.log(`inside Workstripe ${props.category}`);
  console.log(props.data);

  return (
    <WorkStripeContainer
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

      {props.circleBg ? (
        <CircleBg>
          <span></span>
          <span></span>
          <span></span>
        </CircleBg>
      ) : null}

      {props.games ? (
        <AsteroidsContainer>
          <svg width="100%" height="100%">
            <polygon points="210.0158843540267,125 233.61857369965355,160.29231397174297 214.37423882189307,189.93418541221308 186.14229642709967,209.15515137834922 161.86490027618026,238.45849667960744 125,216.6350884043444 94.7288731498378,218.16494875848804 57.319619886580696,218.1540515587271 54.24917799620712,176.403481077093 27.96067739712845,156.52998722277204 37.87577899050338,125.00000000000001 7.6504540484571635,86.87082117635524 47.978517998219374,69.0406177557069 74.00331149472117,54.809079937434134 93.54022159280956,28.17675791300853 124.99999999999999,23.84910749157379 160.54066434713067,15.617082438564353 174.55401188060694,56.79475396071885 220.0004967151359,55.97809895482014 234.038610160136,89.57120790911029 "></polygon>
          </svg>
        </AsteroidsContainer>
      ) : null}
    </WorkStripeContainer>
  );
};

export default WorkStripe;

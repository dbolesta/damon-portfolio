import React from 'react';
import styled from 'styled-components';

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
    </WorkStripeContainer>
  );
};

export default WorkStripe;

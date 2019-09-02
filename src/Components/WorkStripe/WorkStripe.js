import React from 'react';
import styled from 'styled-components';

import WorkCard from '../WorkCard';

const WorkStripeContainer = styled.div`
  text-align: left;
  padding: 2rem;
  background-color: ${props => props.bgColor || 'white'};
  position: relative;
`;

const WorkStripeName = styled.h2`
  background-color: #565656;
  color: transparent;
  display: inline-block;
  margin: 0;
  text-align: left;
  text-shadow: 2px 2px 3px rgba(255, 255, 255, 0.5);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;

  position: absolute;
  top: 0;
  left: 0;
  font-size: 6rem;

  z-index: -1;
`;

const WorkStripeWrapper = styled.div`
  /* border: 1px solid red; */
  /* width: 100vw; */
  overflow-x: scroll;
`;

const WorkCardsContainer = styled.div`
  display: flex;
`;

const WorkStripe = props => {
  // const boxes = [];

  // for (let x = 0; x < 3; x++) {
  //   boxes.push(x);
  // }

  return (
    <WorkStripeContainer
      className="rotate-theme"
      bgColor={props.bgColor}
    >
      <WorkStripeName>{props.category}</WorkStripeName>
      <WorkStripeWrapper>
        <WorkCardsContainer>
          {[1, 2, 3, 4, 5].map(box => {
            return <WorkCard title={box} />;
          })}
        </WorkCardsContainer>
      </WorkStripeWrapper>
    </WorkStripeContainer>
  );
};

export default WorkStripe;

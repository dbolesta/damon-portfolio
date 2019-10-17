import React from 'react';
import styled from 'styled-components';

import WorkCard from '../WorkCard';

import Asteroids from '../Backgrounds/Asteroids';
import Perspective from '../Backgrounds/Perspective';

import { generateKey } from '../../Utils/utils';

const WorkStripeContainer = styled.div`
  text-align: left;
  padding: 2rem;
  background-color: ${props => props.bgColor || 'white'};
  position: relative;
  overflow: hidden;
`;

const WorkStripeName = styled.h2`
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
            return (
              <WorkCard
                data={work}
                key={generateKey(work.title[0].text.slice(0, 2))}
              />
            );
          })}
        </WorkCardsContainer>
      </WorkStripeWrapper>

      {props.circleBg ? <Perspective /> : null}

      {props.games ? <Asteroids /> : null}
    </WorkStripeContainer>
  );
});

export default WorkStripe;

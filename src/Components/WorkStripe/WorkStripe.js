import React from 'react';
import styled from 'styled-components';

import WorkCard from '../WorkCard';

import Asteroids from '../Backgrounds/Asteroids';
import Simple from '../Backgrounds/Simple';

import { generateKey } from '../../Utils/utils';

import waves from '../../Images/waves.png';
import prism from '../../Images/prism.png';

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
  mix-blend-mode: difference;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='20' viewBox='0 0 100 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.184 20c.357-.13.72-.264 1.088-.402l1.768-.661C33.64 15.347 39.647 14 50 14c10.271 0 15.362 1.222 24.629 4.928.955.383 1.869.74 2.75 1.072h6.225c-2.51-.73-5.139-1.691-8.233-2.928C65.888 13.278 60.562 12 50 12c-10.626 0-16.855 1.397-26.66 5.063l-1.767.662c-2.475.923-4.66 1.674-6.724 2.275h6.335zm0-20C13.258 2.892 8.077 4 0 4V2c5.744 0 9.951-.574 14.85-2h6.334zM77.38 0C85.239 2.966 90.502 4 100 4V2c-6.842 0-11.386-.542-16.396-2h-6.225zM0 14c8.44 0 13.718-1.21 22.272-4.402l1.768-.661C33.64 5.347 39.647 4 50 4c10.271 0 15.362 1.222 24.629 4.928C84.112 12.722 89.438 14 100 14v-2c-10.271 0-15.362-1.222-24.629-4.928C65.888 3.278 60.562 2 50 2 39.374 2 33.145 3.397 23.34 7.063l-1.767.662C13.223 10.84 8.163 12 0 12v2z' fill='%2311e8df' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E");
  background-attachment: fixed`
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

      {props.circleBg ? <Simple /> : null}

      {props.games ? <Asteroids /> : null}
    </WorkStripeContainer>
  );
});

export default WorkStripe;

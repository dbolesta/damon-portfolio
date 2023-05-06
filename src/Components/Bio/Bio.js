import React from 'react';
import styled from 'styled-components';
import { generateKey } from '../../Utils/utils';

import Pillars from '../Backgrounds/Pillars';

const BioContainer = styled.div`
  background-color: #fafafa;
  /* background-color: #262626; */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  flex-direction: column;
`;

const BioWrapper = styled.div`
  padding: 6rem 1rem 0;
  max-width: 600px;
  z-index: 1;

  h1,
  p {
    /* text-shadow: -1px -1px 0 #fafafa, 0 -1px 0 #fafafa,
      1px -1px 0 #fafafa, 1px 0 0 #fafafa, 1px 1px 0 #fafafa,
      0 1px 0 #fafafa, -1px 1px 0 #fafafa, -1px 0 0 #fafafa; */

    /* color: #dedede; */
  }

  h1 {
    margin-top: 0;
  }
`;

const TechRow = styled.div`
  width: 80%;
  margin: 1rem 0 3rem;
  z-index: 1;
  display: flex;
  flex-direction: column;

  h4 {
    margin: 0;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 95%;
  }

  ul {
    display: flex;
    padding-left: 0;
    list-style: none;
    align-items: flex-end;
    justify-content: space-around;
    flex-wrap: wrap;

    li {
      flex-direction: column;
      display: flex;
      align-items: center;
      margin: 0.5rem 1rem;

      img {
        width: 1.4rem;
      }
      span {
        font-family: 'Varela Round';
        font-weight: 500;
        font-size: 0.9rem;
        margin-top: 4px;
      }
    }
  }
`;

const Bio = React.forwardRef((props, ref) => {
  return (
    <BioContainer ref={ref}>
      <BioWrapper>
        <h1>Hi, I'm Damon Bolesta</h1>
        <p>
          I'm a software engineer specializing in both fullstack web development 
          and game development. I am passionate about creating software and applications 
          that are helpful, meaningful, and - ideally - joyful. I find working with 
          others who feel the same to be energizing.
        </p>

        <p>
          I believe the web is one of the most important platforms 
          ever created, and I am always eager to work hard, learn 
          more each day, and create remarkable things for it.
        </p>
      </BioWrapper>

      <TechRow>
        <h4>Tools & Technologies</h4>
        <ul>
          {props.data && props.data[0]
            ? props.data[0].techs.map(t => {
                const { tech_name: name, tech_icon: icon } = t;
                return (
                  <li key={generateKey(name[0].text.slice(0, 2))}>
                    <img src={icon.url} alt={name[0].text} />
                    <span>{name[0].text}</span>
                  </li>
                );
              })
            : null}
        </ul>
      </TechRow>
      <Pillars />
    </BioContainer>
  );
});

export default Bio;

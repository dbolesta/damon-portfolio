import React from 'react';
import styled from 'styled-components';
import { generateKey } from '../../Utils/utils';

import ColorTriangles from '../Backgrounds/ColorTriangles';

const BioContainer = styled.div`
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  flex-direction: column;
`;

const BioWrapper = styled.div`
  padding-top: 6rem;
  max-width: 600px;
  z-index: 1;

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
    justify-content: space-between;

    li {
      flex-direction: column;
      display: flex;
      align-items: center;

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
        <h1>Hi, I'm Damon</h1>
        <p>
          I make websites and games with JavaScript. After studying
          Web Applications and Development at NYU, I went on to work
          on various websites on platforms like Shopify and Wordpress,
          create websites ranging from vanilla JavaScript all the way
          to libraries like React, and also make browser-based games
          with the Phaser framework for fun.
        </p>

        <p>
          I believe the web is one of the most important platforms
          ever created, and I am always eager to work hard and
          increase the web's usefulness and versatility.
        </p>
      </BioWrapper>

      <TechRow>
        <h4>My Tech Stack</h4>
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
      <ColorTriangles />
    </BioContainer>
  );
});

export default Bio;

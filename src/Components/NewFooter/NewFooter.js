import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import {
  Parallax,
  ParallaxLayer
} from 'react-spring/renderprops-addons';

import {
  getRandomIntInclusive,
  calculateVisibilityForFooter
} from '../../Utils/utils';

import starSVG from '../../Images/star.svg';

const NewFooterContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

// ****
// Stars
// ****

const StarsContainer = styled.div`
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  height: 90%;
`;

const StarsParallax = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  /* top: 0; */
  height: 100%;

  /* border: 1px solid red; */

  bottom: ${props => props.bottomValue}px;
`;

const StarImg = styled.img`
  position: absolute;
  top: ${props => props.topValue}%;
  left: ${props => props.leftValue}%;
  opacity: 0 ${props => props.opacityValue};
  transform: rotate(${props => props.rotateValue}deg);
  width: ${props => props.sizeValue}px;

  transition: all 0.5s ease-in-out;
`;

const NewFooter = props => {
  // let parallax;

  const footerRef = useRef();

  // will be calculated using the 4 states below
  const [percentInView, setPercentInView] = useState(0);

  // vars needed to calculate % of footer in window
  const [windowScroll, setWindowScroll] = useState(0);
  const [windowHeight, setWindowHeight] = useState(0);
  const [footerHeight, setFooterHeight] = useState(0);
  const [footerTop, setFooterTop] = useState(0);

  // STAR DATA STATE
  const [starData, setStarData] = useState(() => {
    const starDataBuild = [];
    for (let x = 0; x < 69; x++) {
      starDataBuild.push({
        topValue: getRandomIntInclusive(1, 99),
        leftValue: getRandomIntInclusive(1, 99),
        opacityValue: getRandomIntInclusive(4, 9),
        sizeValue: getRandomIntInclusive(9, 23),
        rotateValue: getRandomIntInclusive(0, 72) // 72deg of rotation is max of visible difference for a 5 point star
      });
    }
    return starDataBuild;
  });

  // scroll state updates & event listener
  useEffect(() => {
    const handleScroll = () => {
      setWindowScroll(window.scrollY);
      setWindowHeight(window.innerHeight);
      setFooterHeight(footerRef.current.offsetHeight);
      setFooterTop(footerRef.current.offsetTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // update and recalculate % of footer in window
  useEffect(() => {
    setPercentInView(
      calculateVisibilityForFooter(
        windowScroll,
        windowHeight,
        footerHeight,
        footerTop
      )
    );
  }, [windowScroll, windowHeight, footerHeight, footerTop]);

  // create stars
  const randStars = [];
  for (let x = 0; x < starData.length; x++) {
    randStars.push(
      <StarImg
        key={x}
        topValue={starData[x] && starData[x].topValue}
        leftValue={starData[x] && starData[x].leftValue}
        opacityValue={starData[x] && starData[x].opacityValue}
        sizeValue={starData[x] && starData[x].sizeValue}
        rotateValue={starData[x] && starData[x].rotateValue} // 72deg of rotation is max of visible difference for a 5 point star
        src={starSVG}
      />
    );
  }

  return (
    <NewFooterContainer ref={footerRef}>
      <StarsContainer>
        <StarsParallax
          bottomValue={(percentInView * (0 - 75)) / 100 + 75}
        >
          {randStars.slice(0, 23)}
        </StarsParallax>
        <StarsParallax
          bottomValue={(percentInView * (0 - 150)) / 100 + 150}
        >
          {randStars.slice(24, 46)}
        </StarsParallax>
        <StarsParallax
          bottomValue={(percentInView * (0 - 225)) / 100 + 225}
        >
          {randStars.slice(47, 69)}
        </StarsParallax>
      </StarsContainer>

      {/* <Parallax
          ref={ref => (parallax = ref)}
          pages={1}
          className="parallaxContainer"
        >
          <ParallaxLayer
            offset={1}
            speed={2}
            style={{ backgroundColor: '#805E73' }}
          />
          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: '#87BCDE' }}
          />
        </Parallax> */}
    </NewFooterContainer>
  );
};

export default NewFooter;

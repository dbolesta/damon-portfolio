import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {
  getRandomIntInclusive,
  getScrollPercent
} from '../../../Utils/utils';

import starSVG from '../../../Images/star.svg';

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

// use attrs to avoid styled-components warning about generating over 200 classes
const ParallaxContainer = styled.div.attrs(({ bottomValue }) => ({
  style: {
    bottom: bottomValue + '%'
  }
}))`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;
`;

// prettier-ignore
const StarImg = styled.img`
  position: absolute;
  top: ${props => props.topValue}%;
  left: ${props => props.leftValue}%;
  opacity: 0.${props => props.opacityValue};
  transform: rotate(${props => props.rotateValue}deg);
  width: ${props => props.sizeValue}px;

  transition: all 0.5s ease-in-out;
`;

const StarsParallax = () => {
  // keeps track of how much percentage of the page has been scrolled
  const [percentScrolled, setPercentScrolled] = useState(0);

  // STAR DATA STATE
  const [starData] = useState(() => {
    const starDataBuild = [];
    for (let x = 0; x < 69; x++) {
      starDataBuild.push({
        topValue: getRandomIntInclusive(1, 99),
        leftValue: getRandomIntInclusive(1, 99),
        opacityValue: getRandomIntInclusive(4, 9),
        sizeValue: getRandomIntInclusive(3, 15), // 9, 23
        rotateValue: getRandomIntInclusive(0, 72) // 72deg of rotation is max of visible difference for a 5 point star
      });
    }
    return starDataBuild;
  });

  // scroll state updates & event listener
  useEffect(() => {
    const handleScroll = () => {
      // uses util
      setPercentScrolled(getScrollPercent());
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <StarsContainer>
      <ParallaxContainer
        bottomValue={(percentScrolled * (0 - 150)) / 100 + 150} //75
      >
        {randStars.slice(0, 23)}
      </ParallaxContainer>
      <ParallaxContainer
        bottomValue={(percentScrolled * (0 - 300)) / 100 + 300} //250
      >
        {randStars.slice(24, 46)}
      </ParallaxContainer>
      <ParallaxContainer
        bottomValue={(percentScrolled * (0 - 450)) / 100 + 450} //225
      >
        {randStars.slice(47, 69)}
      </ParallaxContainer>
    </StarsContainer>
  );
};

export default StarsParallax;

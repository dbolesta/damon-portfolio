import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import {
  getRandomIntInclusive,
  calculateVisibilityForFooter,
  getScrollPercent
} from '../../Utils/utils';

import Star from '../Star';

import starSVG from '../../Images/star.svg';

const FooterContainer = styled.footer`
  /* background-color: hsl(-90, 90%, 24%); */
  /* background: rgb(60, 15, 114);
  background: linear-gradient(
    -6deg,
    rgba(60, 15, 114, 1) 35%,
    rgba(58, 25, 146, 1) 100%
  ); */
  height: 100%;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    background: linear-gradient(-6deg, #3a4c54 0%, #011d35 100%);
  }
`;

const FooterArtContainer = styled.div`
  position: relative;
  height: 100%;
`;

// ****
// Moon
// ****

const MoonTwo = styled.div`
  position: absolute;
  display: block;
  right: 5%;
  top: 15%;
  margin: 2rem;
  width: 10rem;
  height: 10rem;
  background-color: transparent;
  box-shadow: inset -37px -9px 0 15px #f3d076;
  border-radius: 50%;
`;

// ****
// Mountains
// ****

const MountainsContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Mountain = styled.div`
  width: 0;
  height: 0;
  border-left: ${props => props.widthValue}vw solid transparent;
  border-right: ${props => props.widthValue}vw solid transparent;
  border-bottom: ${props => props.heightValue}vh solid
    ${props => props.colorValue};
  /* bottom: -${props =>
    props.bottomValue ? props.bottomValue : 0}px; */
  bottom: 0;
  position: absolute;
  left: ${props => props.leftValue}%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  /* transition: all 0.3s ease-in-out; */

  a {
    color: white;
    font-family: "Varela Round";
    text-decoration: none;
    color: #f6dd3b;
    text-shadow: 1px 1px 0px #FC2376;
    font-weight: 600;
    font-size: 1.4rem;
    transition: text-shadow 0.1s cubic-bezier(0.71, 0.21, 0.4, 0.83);

    &:hover {
      text-shadow: 2px 2px 0px #FC2376;
    }
  }
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

// use attrs to avoid styled-components warning about generating over 200 classes
// const StarsParallax = styled.div.attrs(({ bottomValue }) => ({
//   style: {
//     bottom: bottomValue + '%'
//   }
// }))`

const StarsParallax = styled.div.attrs(({ bottomValue }) => ({
  style: {
    bottom: bottomValue + '%'
  }
}))`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100%;

  /* background-image: url(${starSVG}), url(${starSVG});
  background-position: 0px 0, 5px 5px;
  background-size: 10px 10px; */
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

// ***
// Clouds
// ***

const cloudGlide = marginLeft => keyframes`
  100% {
    margin-left: ${marginLeft};
  }  
`;

const CloudsContainer = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  height: 40%;
`;

const Cloud = styled.span`
  width: 8rem;
  height: 3rem;
  border-radius: 3rem;
  background-color: #6e98d0;
  position: absolute;
  bottom: 0;
  left: ${props => props.leftValue}%;
  opacity: 0.7;
  animation: ${cloudGlide('8rem')} 7s linear infinite;

  &:before {
    content: '';
    background-color: inherit;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    position: absolute;
    top: -22px;
    left: 17px;
  }
  &:after {
    content: '';
    background-color: inherit;
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    position: absolute;
    top: -32px;
    right: 17px;
  }
`;

const Footer = props => {
  // state and stuff
  const footerRef = useRef();

  // keeps track of how much percentage of the page has been scrolled
  const [percentScrolled, setPercentScrolled] = useState(0);

  // STAR DATA STATE
  const [starData, setStarData] = useState(() => {
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

  // FG and BG Mountain data
  const [bgMtnData, setBgMtnData] = useState(() => {
    const bgMtnDataBuild = [];
    for (let x = 0; x < 100; x += 10) {
      bgMtnDataBuild.push({
        widthValue: getRandomIntInclusive(3, 7),
        heightValue: getRandomIntInclusive(13, 30),
        leftValue: x
      });
    }
    return bgMtnDataBuild;
  });

  const [fgMtnData, setFgMtnData] = useState(() => {
    const fgMtnDataBuild = [];
    for (let x = -5; x < 100; x += 10) {
      fgMtnDataBuild.push({
        widthValue: getRandomIntInclusive(4, 7),
        heightValue: getRandomIntInclusive(15, 35),
        leftValue: x,
        startBottomValue: getRandomIntInclusive(50, 450)
      });
    }
    return fgMtnDataBuild;
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

  // create clouds
  const clouds = [];
  for (let x = -15; x < 105; x += 5) {
    clouds.push(<Cloud key={x} leftValue={x} />);
  }

  // create mountains
  const mountains = [];

  // bg
  for (let x = 0; x < bgMtnData.length; x++) {
    if (x === 5) {
      mountains.push(
        <Mountain
          key={x}
          colorValue="#322b61"
          widthValue={3}
          heightValue={38}
          leftValue={50}
        >
          <a href="https://google.com">LinkedIn</a>
        </Mountain>
      );
    } else {
      mountains.push(
        <Mountain
          key={x}
          colorValue="#322b61"
          widthValue={bgMtnData[x] && bgMtnData[x].widthValue}
          heightValue={bgMtnData[x] && bgMtnData[x].heightValue}
          leftValue={bgMtnData[x] && bgMtnData[x].leftValue}
        />
      );
    }
  }

  // How to calculate percentage between the range of two values a third value is
  // https://stackoverflow.com/questions/25835591/how-to-calculate-percentage-between-the-range-of-two-values-a-third-value-is/25835683
  // fg
  for (let x = 0; x < fgMtnData.length; x++) {
    if (x === 3 || x === 7) {
      mountains.push(
        <Mountain
          key={x + 0.5}
          colorValue="#483d8b"
          widthValue={4}
          heightValue={x === 3 ? 45 : 42.5}
          leftValue={x === 3 ? 25 : 65}
        >
          {x === 3 ? (
            <a href="https://github.com/dbolesta">GitHub</a>
          ) : (
            <a href="mailto:dbolesta@gmail.com">Contact</a>
          )}
        </Mountain>
      );
    } else {
      mountains.push(
        <Mountain
          key={x + 0.5}
          colorValue="#483d8b"
          widthValue={fgMtnData[x] && fgMtnData[x].widthValue}
          heightValue={fgMtnData[x] && fgMtnData[x].heightValue}
          leftValue={fgMtnData[x] && fgMtnData[x].leftValue}
          data-startbottom={
            fgMtnData[x] && fgMtnData[x].startBottomValue
          }
        />
      );
    }
  }

  return (
    <FooterContainer ref={footerRef}>
      <FooterArtContainer>
        <StarsContainer>
          <StarsParallax
            bottomValue={(percentScrolled * (0 - 150)) / 100 + 150} //75
          >
            {randStars.slice(0, 23)}
          </StarsParallax>
          <StarsParallax
            bottomValue={(percentScrolled * (0 - 300)) / 100 + 300} //250
          >
            {randStars.slice(24, 46)}
          </StarsParallax>
          <StarsParallax
            bottomValue={(percentScrolled * (0 - 450)) / 100 + 450} //225
          >
            {randStars.slice(47, 69)}
          </StarsParallax>
        </StarsContainer>

        <MoonTwo />

        <CloudsContainer>{clouds}</CloudsContainer>

        <MountainsContainer>{mountains}</MountainsContainer>
      </FooterArtContainer>
    </FooterContainer>
  );
};

export default Footer;

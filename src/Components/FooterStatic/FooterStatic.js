import React, { useState, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { getRandomIntInclusive } from '../../Utils/utils';

// import Moon from './Moon';
import MoonTwo from './MoonTwo';
import StarsParallax from './StarsParallax';

const FooterContainer = styled.footer`
  /* background-color: hsl(-90, 90%, 24%); */
  /* background: rgb(60, 15, 114);
  background: linear-gradient(
    -6deg,
    rgba(60, 15, 114, 1) 35%,
    rgba(58, 25, 146, 1) 100%
  ); */
  height: 100%;

  /* @media (max-width: ${props =>
    props.theme.breakpoints.mobile}) { */
    background: linear-gradient(-6deg, #3a4c54 0%, #011d35 100%);
  /* } */
`;

const FooterArtContainer = styled.div`
  position: relative;
  height: 100%;
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
  bottom: 0;
  position: absolute;
  left: ${props => props.leftValue}%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  a {
    color: white;
    font-family: 'Varela Round';
    text-decoration: none;
    color: #f6dd3b;
    text-shadow: 1px 1px 0px #fc2376;
    font-weight: 600;
    font-size: 1.4rem;
    transition: text-shadow 0.1s cubic-bezier(0.71, 0.21, 0.4, 0.83);

    &:hover {
      text-shadow: 2px 2px 0px #fc2376;
    }
  }
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

  // FG and BG Mountain data
  const [bgMtnData] = useState(() => {
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

  const [fgMtnData] = useState(() => {
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

  // create clouds
  const clouds = [];
  for (let x = -15; x < 105; x += 5) {
    clouds.push(<Cloud key={x} leftValue={x} />);
  }

  // create mountains
  const mountains = [];

  // bg
  for (let x = 0; x < bgMtnData.length; x++) {
    if (x === 6) {
      mountains.push(
        <Mountain
          key={x}
          colorValue="#322b61"
          widthValue={3}
          heightValue={37}
          leftValue={60}
        >
          <a href="mailto:dbolesta@gmail.com">Contact</a>
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
    if (x === 4 || x === 7) {
      mountains.push(
        <Mountain
          key={x + 0.5}
          colorValue="#483d8b"
          widthValue={4}
          heightValue={x === 4 ? 46 : 36}
          leftValue={x === 4 ? 35 : 65}
        >
          {x === 4 ? (
            <a href="https://github.com/dbolesta">GitHub</a>
          ) : (
            <span>&nbsp;</span>
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
        <StarsParallax />

        {/* <Moon url={moonlight1} rebecca={rebecca} /> */}
        <MoonTwo />
        {/* <MoonThree /> */}

        <CloudsContainer>{clouds}</CloudsContainer>

        <MountainsContainer>{mountains}</MountainsContainer>
      </FooterArtContainer>
    </FooterContainer>
  );
};

export default Footer;

import React, { useState, useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import { getRandomIntInclusive } from '../../Utils/utils';

import Star from '../Star';

import starSVG from '../../Images/star.svg';

const FooterContainer = styled.footer`
  /* background-color: hsl(-90, 90%, 24%); */
  background: rgb(60, 15, 114);
  background: linear-gradient(
    -6deg,
    rgba(60, 15, 114, 1) 35%,
    rgba(58, 25, 146, 1) 100%
  );
  height: 90vh;
  overflow: hidden;
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
  bottom: -${props => (props.bottomValue ? props.bottomValue : 0)}px;
  position: absolute;
  left: ${props => props.leftValue}%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  /* transition: all 0.3s ease-in-out; */

  span {
    color: white;
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

// need to prettier-ignore because it will remove the . between integer and $
// prettier-ignore
// const Star = styled.span`
//   position: absolute;
//   top: ${props => props.topValue}%;
//   left: ${props => props.leftValue}%;
//   opacity: 0.${props => props.opacityValue};
//   font-size: 1.${props => props.fontSizeValue}rem;
//   color: #eddd85;
// `;

const StarImg = styled.img`
  position: absolute;
  top: ${props => props.topValue}%;
  left: ${props => props.leftValue}%;
  opacity: 0.${props => props.opacityValue};
  transform: rotate(${props => props.rotateValue}deg);
  width: ${props => props.sizeValue}px;
`;

const StarThree = props => {
  return (
    <svg height="25" fill="#eddd85" width="23">
      <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
    </svg>
  );
};

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

let dScroll = 0;
let wHeight = window.innerHeight;
let fHeight = 0;
let fPos = 0;

const Footer = props => {
  // state and stuff
  const footerRef = useRef();

  const [percentInView, setPercentInView] = useState(0);
  // const handleScroll = () => setPercentInView();

  const [docScroll, setDocScroll] = useState(window.scrollY);

  const [windowHeight, setWindowHeight] = useState(
    window.innerHeight
  );
  const [footerHeight, setFooterHeight] = useState(0);
  //footerRef.current.offsetHeight

  const [footerPosition, setFooterPosition] = useState(0);
  //footerRef.current.offsetTop

  // resize updates
  const handleResize = () => {
    // setWindowHeight(window.innerHeight);
    // setFooterHeight(footerRef.current.offsetHeight);
    // setFooterPosition(footerRef.current.offsetTop);
    fHeight = footerRef.current.offsetHeight;
    fPos = footerRef.current.offsetTop;
    wHeight = window.innerHeight;
  };

  // scroll state updates
  const handleScroll = () => {
    setDocScroll(window.scrollY);
    dScroll = window.scrollY;
    fHeight = footerRef.current.offsetHeight;
    fPos = footerRef.current.offsetTop;
    wHeight = window.innerHeight;

    console.log(
      `docScroll: ${dScroll} windowHeight: ${wHeight} footerHeight: ${fHeight} footerPosition ${fPos}`
    );
    console.log(calculateVisibilityForFooter());

    setPercentInView(calculateVisibilityForFooter());
  };

  function calculateVisibilityForFooter() {
    let hiddenAfter = fPos + fHeight - (dScroll + wHeight);

    if (dScroll > fPos + fHeight || fPos > dScroll + wHeight) {
      return 0;
    } else {
      var result = 100;

      // BY HIDING THIS BLOCK, THIS CODE WILL RETURN THE PERCENTAGE UNTIL THE BOTTOM OF
      // FOOTER HAS HIT THE BOTTOM OF THE WINDOW, ONCE THE FOOTER IS WITHIN THE WINDOW
      /*if (hiddenBefore > 0) {
                result -= (hiddenBefore * 100) / fHeight;
            }*/

      if (hiddenAfter > 0) {
        result -= (hiddenAfter * 100) / fHeight;
      }

      return result;
    }
  }

  // STAR DATA STATE
  const [starData, setStarData] = useState([]);
  const [bgMtnData, setBgMtnData] = useState([]);
  const [fgMtnData, setFgMtnData] = useState([]);

  useEffect(() => {
    // if (footerRef) {
    //   console.log('%c inside foter ref set!', 'font-size: 16px;');
    //   setFooterHeight(footerRef.current.offsetHeight);
    //   setFooterPosition(footerRef.current.offsetTop);
    //   console.log(footerRef);
    // }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    dScroll = window.scrollY;
    wHeight = window.innerHeight;
    fHeight = footerRef.current.offsetHeight;
    fPos = footerRef.current.offsetTop;

    // get and set initial values for randomized star data
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
    setStarData(starDataBuild);

    // get and set initial values for randomized mountain data (bg)
    const bgMtnDataBuild = [];
    for (let x = 0; x < 100; x += 10) {
      bgMtnDataBuild.push({
        widthValue: getRandomIntInclusive(3, 7),
        heightValue: getRandomIntInclusive(13, 30),
        leftValue: x
      });
    }
    setBgMtnData(bgMtnDataBuild);

    // get and set initial values for randomized mountain data (fg)
    const fgMtnDataBuild = [];
    for (let x = -5; x < 100; x += 10) {
      fgMtnDataBuild.push({
        widthValue: getRandomIntInclusive(4, 7),
        heightValue: getRandomIntInclusive(15, 35),
        leftValue: x,
        startBottomValue: getRandomIntInclusive(300, 1600)
      });
    }
    setFgMtnData(fgMtnDataBuild);
  }, []);
  //
  // END OF USEEFFECT

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
          <span>GitHurb</span>
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
          heightValue={40}
          leftValue={x === 3 ? 25 : 65}
        >
          <span>{x === 3 ? 'LinkedIn' : 'Contact'}</span>
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
          bottomValue={
            (percentInView *
              (0 - (fgMtnData[x] && fgMtnData[x].startBottomValue))) /
              100 +
            (fgMtnData[x] && fgMtnData[x].startBottomValue)
          }
        />
      );
    }
  }

  return (
    <FooterContainer ref={footerRef}>
      <FooterArtContainer>
        <StarsContainer>{randStars}</StarsContainer>

        <MoonTwo />

        <StarThree />

        <CloudsContainer>{clouds}</CloudsContainer>

        <MountainsContainer>{mountains}</MountainsContainer>
      </FooterArtContainer>
    </FooterContainer>
  );
};

export default Footer;

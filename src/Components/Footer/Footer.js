import React from 'react';
import styled, { keyframes } from 'styled-components';
import { getRandomIntInclusive } from '../../Utils/utils';

// import Star from '../Star';

const FooterContainer = styled.footer`
  /* background-color: hsl(-90, 90%, 24%); */
  background: rgb(60, 15, 114);
  background: linear-gradient(
    -6deg,
    rgba(60, 15, 114, 1) 35%,
    rgba(58, 25, 146, 1) 100%
  );
  height: 70vh;
`;

const FooterArtContainer = styled.div`
  position: relative;
  height: 100%;
`;

const Moon = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 250px;
  display: none;
  position: absolute;
  right: 30px;
  top: 45px;
  background-color: #eddd85;
`;

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

const MountainsContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Mountain = styled.div`
  width: 0;
  height: 0;
  border-left: ${props => props.width} solid transparent;
  border-right: ${props => props.width} solid transparent;
  border-bottom: ${props => props.height} solid #483d8b;
  bottom: 0;
  position: absolute;
  left: ${props => props.left};
`;

const Mountain2 = styled.div`
  width: 0;
  height: 0;
  border-left: ${props => props.width} solid transparent;
  border-right: ${props => props.width} solid transparent;
  border-bottom: ${props => props.height} solid #322b61;
  bottom: 0;
  position: absolute;
  left: ${props => props.left};
`;

const StarsContainer = styled.div`
  left: 0;
  right: 0;
  top: 0;
  position: absolute;
  height: 90%;
`;

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

// need to prettier-ignore because it will remove the . between integer and $
// prettier-ignore
const Star = styled.span`
  position: absolute;
  top: ${props => props.topValue}%;
  left: ${props => props.leftValue}%;
  opacity: 0.${props => props.opacityValue};
  font-size: 1.${props => props.fontSizeValue}rem;
  color: #eddd85;
`;

const StarTwo = styled.div`
  margin: 50px 0;
  position: relative;
  display: block;
  color: red;
  width: 0px;
  height: 0px;
  border-right: 100px solid transparent;
  border-bottom: 70px solid red;
  border-left: 100px solid transparent;
  transform: rotate(35deg);

  &:before {
    border-bottom: 80px solid red;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    display: block;
    content: '';
    transform: rotate(-35deg);
  }
  &:after {
    position: absolute;
    display: block;
    color: red;
    top: 3px;
    left: -105px;
    width: 0px;
    height: 0px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid red;
    border-left: 100px solid transparent;
    transform: rotate(-70deg);
    content: '';
  }
`;

const StarThree = props => {
  return (
    <svg height="25" width="23" class="star rating" data-rating="1">
      <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
    </svg>
  );
};

const Footer = props => {
  // create stars
  const randStars = [];

  for (let x = 0; x < 69; x++) {
    randStars.push(
      <Star
        key={x}
        topValue={getRandomIntInclusive(1, 99)}
        leftValue={getRandomIntInclusive(1, 99)}
        opacityValue={getRandomIntInclusive(4, 9)}
        fontSizeValue={getRandomIntInclusive(0, 5)}
      >
        *
      </Star>
    );
  }

  // create clouds
  const clouds = [];

  for (let x = -15; x < 105; x += 5) {
    clouds.push(<Cloud key={x} leftValue={x} />);
  }

  // create mountains

  return (
    <FooterContainer>
      <FooterArtContainer>
        <StarsContainer>{randStars}</StarsContainer>

        <Moon />
        <MoonTwo />

        <StarTwo />

        <StarThree />

        <CloudsContainer>{clouds}</CloudsContainer>

        <MountainsContainer>
          <Mountain2 height="40vh" width="50px" left="5%" />
          <Mountain2 height="210px" width="30px" left="15%" />
          <Mountain2 height="100px" width="80px" left="25%" />
          <Mountain2 height="150px" width="50px" left="35%" />
          <Mountain2 height="210px" width="30px" left="45%" />
          <Mountain2 height="100px" width="80px" left="55%" />
          <Mountain2 height="100px" width="80px" left="65%" />
          <Mountain2 height="150px" width="50px" left="75%" />
          <Mountain2 height="210px" width="30px" left="85%" />
          <Mountain2 height="210px" width="30px" left="95%" />

          <Mountain height="50vh" width="20px" left="0%" />
          <Mountain height="40vh" width="50px" left="10%" />
          <Mountain height="210px" width="30px" left="20%" />
          <Mountain height="100px" width="80px" left="30%" />
          <Mountain height="150px" width="50px" left="40%" />
          <Mountain height="210px" width="30px" left="50%" />
          <Mountain height="100px" width="80px" left="60%" />
          <Mountain height="100px" width="80px" left="70%" />
          <Mountain height="150px" width="50px" left="80%" />
          <Mountain height="210px" width="30px" left="90%" />
        </MountainsContainer>
      </FooterArtContainer>
    </FooterContainer>
  );
};

export default Footer;

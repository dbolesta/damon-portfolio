import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';

// import Moon from './Moon';
import MoonTwo from './MoonTwo';
import StarsParallax from './StarsParallax';
import Mountains from './Mountains';

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

  // create clouds
  const clouds = [];
  for (let x = -15; x < 105; x += 5) {
    clouds.push(<Cloud key={x} leftValue={x} />);
  }

  return (
    <FooterContainer ref={footerRef}>
      <FooterArtContainer>
        <StarsParallax />

        <MoonTwo />

        <CloudsContainer>{clouds}</CloudsContainer>

        <Mountains />
      </FooterArtContainer>
    </FooterContainer>
  );
};

export default Footer;

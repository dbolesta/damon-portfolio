import React, { useRef } from 'react';
import styled from 'styled-components';

// import Moon from './Moon';
import StarsParallax from './StarsParallax';
import Moon from './Moon';
import Clouds from './Clouds';
import Mountains from './Mountains';

const FooterContainer = styled.footer`
  height: 100%;
  background: linear-gradient(-6deg, #3a4c54 0%, #011d35 100%);
`;

const FooterArtContainer = styled.div`
  position: relative;
  height: 100%;
`;

const Footer = () => {
  // ref for menu navigation scrolling
  const footerRef = useRef();

  return (
    <FooterContainer ref={footerRef}>
      <FooterArtContainer>
        <StarsParallax />
        <Moon />
        <Clouds />
        <Mountains />
      </FooterArtContainer>
    </FooterContainer>
  );
};

export default Footer;

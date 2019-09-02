import React from 'react';
import styled from 'styled-components';
import { getRandomIntInclusive } from '../../Utils/utils';

import Star from '../Star';

const FooterContainer = styled.footer`
  /* background-color: hsl(-90, 90%, 24%); */
  background: rgb(60, 15, 114);
  background: linear-gradient(
    -6deg,
    rgba(60, 15, 114, 1) 35%,
    rgba(58, 25, 146, 1) 100%
  );
  height: 100vh;
`;

const FooterArtContainer = styled.div`
  position: relative;
  height: 100%;
`;

const Moon = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 250px;

  position: absolute;
  right: 30px;
  top: 45px;
  background-color: #eddd85;
`;

const MountainsContainer = styled.div`
  /* position: absolute; */
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

  height: 70vh;
`;

const Footer = props => {
  const randStars = [];

  function starStyle() {
    return {
      top: `${getRandomIntInclusive(1, 99)}%`,
      left: `${getRandomIntInclusive(1, 99)}%`,
      opacity: `0.${getRandomIntInclusive(4, 9)}`,
      fontSize: `1.${getRandomIntInclusive(0, 5)}rem`
    };
  }

  for (let x = 0; x < 220; x++) {
    randStars.push(
      <Star style={starStyle()} key={x}>
        *
      </Star>
    );
  }

  return (
    <FooterContainer>
      <FooterArtContainer>
        <Moon />
        <StarsContainer>{randStars}</StarsContainer>

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

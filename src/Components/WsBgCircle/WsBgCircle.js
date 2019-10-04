import React from 'react';
import styled from 'styled-components';

const CircleBg = styled.div`
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  span {
    position: absolute;
    mix-blend-mode: difference;

    &:nth-of-type(1) {
      top: 6%;
      left: -9%;
      width: 50rem;
      height: 50rem;
      background-color: pink;
      border-radius: 50%;
    }
    &:nth-of-type(2) {
      top: -6%;
      right: -24%;
      width: 50rem;
      height: 50rem;
      background-color: blue;
      border-radius: 50%;
    }
    &:nth-of-type(3) {
      bottom: 25%;
      width: 60rem;
      height: 60rem;
      background-color: red;
      border-radius: 50%;
    }
  }
`;

const WsBgCircle = () => {
  return (
    <CircleBg>
      <span></span>
      <span></span>
      <span></span>
    </CircleBg>
  );
};

export default WsBgCircle;

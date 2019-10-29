import React from 'react';
import styled, { keyframes } from 'styled-components';

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

const Clouds = () => {
  // create clouds
  const clouds = [];
  for (let x = -15; x < 105; x += 5) {
    clouds.push(<Cloud key={x} leftValue={x} />);
  }

  return <CloudsContainer>{clouds}</CloudsContainer>;
};

export default Clouds;

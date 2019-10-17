import React, { useState } from 'react';
import styled from 'styled-components';

const ColorContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const ColorSlice = styled.div`
  &:before,
  &:after {
    content: '';
    ${props => props.sideValue}: 0;
    position: absolute;
    height: 80%;
    width: 180%;
    mix-blend-mode: hard-light;
  }

  &:before {
    background-color: ${props => props.colorValues[0]};
    ${props => (props.sideValue === 'left' ? 'top' : 'bottom')}: 0;
    transform: rotate(-${props => props.degValue}deg);
    transform-origin: ${props =>
      props.sideValue === 'left' ? 'bottom left' : 'top right'};
  }

  &:after {
    background-color: ${props => props.colorValues[1]};
    ${props => (props.sideValue === 'left' ? 'bottom' : 'top')}: 0;
    transform: rotate(${props => props.degValue}deg);
    transform-origin: ${props =>
      props.sideValue === 'left' ? 'top left' : 'bottom right'};
  }
`;

const ColorTriangles = () => {
  const [colorArray] = useState(() => {
    return ['#6F308E', '#FFD330', '#EE4F2F', '#00A894'];
  });

  return (
    <ColorContainer>
      <ColorSlice
        colorValues={[colorArray[0], colorArray[1]]}
        sideValue={'left'}
        degValue={35}
      />

      <ColorSlice
        colorValues={[colorArray[2], colorArray[3]]}
        sideValue={'right'}
        degValue={35}
      />
    </ColorContainer>
  );
};

export default ColorTriangles;

import React from 'react';
import styled from 'styled-components';
import { getRandomIntInclusive } from '../../Utils/utils';

// prettier-ignore
const StarSVG = styled.svg`
  position: absolute;
  top: ${props => props.topValue}%;
  left: ${props => props.leftValue}%;
  opacity: 0.${props => props.opacityValue};
  transform: rotate(${props => props.rotateValue}deg);
  fill: #eddd85;
`;

const Star = props => {
  return (
    <StarSVG {...props}>
      <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" />
    </StarSVG>
  );
};

export default Star;

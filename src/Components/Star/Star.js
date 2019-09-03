// import React from 'react';
import styled from 'styled-components';
import { getRandomIntInclusive } from '../../Utils/utils';

let starStyles = {
  top: `${getRandomIntInclusive(1, 99)}vw`,
  left: `${getRandomIntInclusive(1, 99)}%`,
  opacity: `${getRandomIntInclusive(4, 9)}`
};

const Star = styled.span`
  position: absolute;
  top: ${starStyles.top};
  left: ${starStyles.left};
  opacity: ${starStyles.opacity};
  color: #eddd85;
`;

export default Star;

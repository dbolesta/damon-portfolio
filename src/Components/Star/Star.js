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
  /* right: 40vw;
  top: 30%; */
  top: ${starStyles.top};
  left: ${starStyles.left};
  opacity: ${starStyles.opacity};


  /* right: ${getRandomIntInclusive(1, 99)}vw;
  top: ${getRandomIntInclusive(1, 99)}%; */
  color: #eddd85;

  /* have font and opacity be random range */
`;

export default Star;

// const Star = props => {
//   return (
//     <div>
//       <span>*</span>
//     </div>
//   );
// };

// export default Star;

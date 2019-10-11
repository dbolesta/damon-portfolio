import React from 'react';
import styled from 'styled-components';

import FooterStatic from '../FooterStatic';

const FootWrapContainer = styled.div`
  /* background-color: blue; */
  background: linear-gradient(-6deg, #3a4c54 0%, #011d35 100%);

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
// #ae4c00 0%,

const FooterViewport = styled.div`
  height: 100vh;
  width: 100%;
`;

const FootWrap = React.forwardRef((props, ref) => {
  return (
    <FootWrapContainer>
      {props.children}
      <FooterViewport ref={ref}>
        <FooterStatic />
      </FooterViewport>
    </FootWrapContainer>
  );
});

export default FootWrap;

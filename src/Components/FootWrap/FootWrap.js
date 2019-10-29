import React from 'react';
import styled from 'styled-components';

import Footer from '../Footer';

const FootWrapContainer = styled.div`
  /* background-color: blue; */
  background: linear-gradient(-6deg, #3a4c54 0%, #011d35 100%);
  overflow-x: hidden;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

const FooterViewport = styled.div`
  height: 100vh;
  width: 100%;
`;

const FootWrap = React.forwardRef((props, ref) => {
  return (
    <FootWrapContainer>
      {props.children}
      <FooterViewport ref={ref}>
        <Footer />
      </FooterViewport>
    </FootWrapContainer>
  );
});

export default FootWrap;

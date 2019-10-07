import React from 'react';
import styled from 'styled-components';

import FooterStatic from '../FooterStatic';

const FootWrapContainer = styled.div`
  background-color: blue;
  background: linear-gradient(-6deg, #3a4c54 0%, #011d35 100%);
`;
// #ae4c00 0%,

const FooterViewport = styled.div`
  height: 100vh;
  width: 100%;
`;

const FootWrap = ({ children }) => {
  return (
    <FootWrapContainer>
      {children}
      <FooterViewport>
        <FooterStatic />
      </FooterViewport>
    </FootWrapContainer>
  );
};

export default FootWrap;

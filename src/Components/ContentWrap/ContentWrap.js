import React from 'react';
import styled from 'styled-components';

const ContentWrapContainer = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: 0;
  z-index: 3;
`;

const ContentWrap = ({ children }) => {
  return (
    <ContentWrapContainer>
      <div>{children}</div>
    </ContentWrapContainer>
  );
};

export default ContentWrap;

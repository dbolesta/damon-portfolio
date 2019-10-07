import React from 'react';
import styled from 'styled-components';

const LeftColumnContainer = styled.div`
  /* background-color: blue;
  background: linear-gradient(-6deg, #3a4c54 0%, #011d35 100%); */
  width: 20%;
  z-index: 3;
`;

// container that is fixed
const LeftColumnContent = styled.div`
  position: fixed;
  width: inherit;
`;
// #ae4c00 0%,

const LeftNav = styled.span`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  span {
    background-color: ${props => props.theme.colors.watermelon};
    /* -webkit-text-fill-color: transparent;
    -webkit-background-clip: text; */
    padding: 0.2rem;
    margin: 10px;
  }
`;

const LeftColumn = ({ children }) => {
  return (
    <LeftColumnContainer>
      <LeftColumnContent>
        {children}
        <LeftNav>
          <span>Bio</span>

          <span>Sites</span>
          <span>Games</span>
          <span>Et cetera</span>
        </LeftNav>
      </LeftColumnContent>
    </LeftColumnContainer>
  );
};

export default LeftColumn;

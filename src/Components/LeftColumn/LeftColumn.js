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

const LeftColumn = props => {
  console.log('%c Props?', 'font-size: 16px');

  console.log(props);

  function scrollIt(compRef) {
    compRef.current.scrollIntoView({ behavior: 'smooth' });
    // console.log(compRef);
    // console.log(compRef);
  }

  return (
    <LeftColumnContainer>
      <LeftColumnContent>
        {props.children}
        <LeftNav>
          <span
            onClick={() =>
              props.clickHandler(props.scrollRefs.scrollBio)
            }
          >
            Bio
          </span>

          <span
            onClick={() =>
              props.clickHandler(props.scrollRefs.scrollSites)
            }
          >
            Sites
          </span>
          <span
            onClick={() =>
              props.clickHandler(props.scrollRefs.scrollGames)
            }
          >
            Games
          </span>
          <span
            onClick={() =>
              props.clickHandler(props.scrollRefs.scrollFooter)
            }
          >
            Et cetera
          </span>
        </LeftNav>
      </LeftColumnContent>
    </LeftColumnContainer>
  );
};

export default LeftColumn;

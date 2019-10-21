import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const LeftColumnContainer = styled.div`
  /* background-color: blue;
  background: linear-gradient(-6deg, #3a4c54 0%, #011d35 100%); */
  background: linear-gradient(-6deg, #011d35 0%, #01111f 100%);
  width: 20%;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
    width: 0%;
  }
`;

// container that is fixed
const LeftColumnContent = styled.div`
  position: fixed;
  width: inherit;
  z-index: 3;
`;
// #ae4c00 0%,

const LeftNav = styled.span`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  transition: transform 0.3s cubic-bezier(0.71, 0.21, 0.4, 0.83);
  transform: ${props =>
    props.headerInView ? 'translateX(-100%)' : 'translateX(0%)'};
  /* transform: translateX(-100%); */

  span {
    background-color: ${props => props.theme.colors.watermelon};
    padding: 0.5rem;
    margin: 10px;
    cursor: pointer;
    font-family: 'Varela Round';
    border-radius: 5px;

    transition: all 0.2s ease-in-out;

    &:hover {
      color: ${props => props.theme.colors.yellow};
    }
    &:active {
      background-color: ${props => props.theme.colors.yellow};
      color: ${props => props.theme.colors.watermelon};
      transition: all 0.02s ease-in-out;
    }
  }
`;

const LeftColumn = props => {
  // detect if header is in view so we can scroll sidebar nav in or not
  const [headerInView, setHeaderInView] = useState(true);

  // scroll listener?
  useEffect(() => {
    const handleScroll = () => {
      let heightOfHeader = 70; // better than forwarding refs just for this, we can fake it
      let windowY = window.scrollY;

      if (windowY > heightOfHeader) {
        setHeaderInView(false);
      } else {
        setHeaderInView(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <LeftColumnContainer>
      <LeftColumnContent>
        {props.children}
        <LeftNav headerInView={headerInView}>
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

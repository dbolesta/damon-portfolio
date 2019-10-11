import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: transparent;
`;

const TopNavListContainer = styled.div`
  width: 100%;
  display: flex;
`;

const TopNavList = styled.ul`
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0;
  margin: 0;
`;

const TopNavItem = styled.li`
  margin: 0;
  font-family: 'Varela Round';
  font-size: 1.5rem;
  padding: 1.2rem 1.5rem;
  font-weight: 100;
  color: ${props => props.theme.colors.watermelon};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.yellow};
  }

  @media (max-width: ${props => props.theme.breakpoints.preMobile}) {
    font-size: 1.2rem;
    padding: 0.89rem 1.5rem;
  }
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }

  &.mobile-nav {
    display: none;

    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      cursor: auto;
      display: inline-block;
      color: ${props => props.theme.colors.yellow};
    }
  }
`;

const Header = props => {
  return (
    <HeaderContainer>
      <TopNavList>
        <TopNavItem
          onClick={() =>
            props.clickHandler(props.scrollRefs.scrollBio)
          }
        >
          Bio
        </TopNavItem>

        <TopNavItem
          onClick={() =>
            props.clickHandler(props.scrollRefs.scrollSites)
          }
        >
          Sites
        </TopNavItem>
        <TopNavItem
          onClick={() =>
            props.clickHandler(props.scrollRefs.scrollGames)
          }
        >
          Games
        </TopNavItem>
        <TopNavItem
          onClick={() =>
            props.clickHandler(props.scrollRefs.scrollFooter)
          }
        >
          Et cetera
        </TopNavItem>
        <TopNavItem className="mobile-nav">damon.js</TopNavItem>
      </TopNavList>
    </HeaderContainer>
  );
};

export default Header;

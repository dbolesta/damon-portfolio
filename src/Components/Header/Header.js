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
  /* padding-top: 2rem; */
  color: ${props => props.theme.colors.watermelon};
`;

const navItems = ['Bio', 'Sites', 'Games', 'Et cetera'];
const navColors = ['red', 'green', 'blue', 'purple'];

const Header = () => {
  return (
    <HeaderContainer>
      <TopNavList>
        {navItems.map((navItem, i) => {
          console.log(navColors[i]);
          return <TopNavItem>{navItem}</TopNavItem>;
        })}
      </TopNavList>
    </HeaderContainer>
  );
};

export default Header;

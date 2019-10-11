import React, { useState } from 'react';
import styled from 'styled-components';

import MobileMenuItems from './MobileMenuItems';
import MobileMenuBurger from './MobileMenuBurger';

// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/

// styles are applied when Open,
// only so that we can have the menu close when clicking outside of the menu

const MobileMenuContainer = styled.div`
  display: none;
  
  ${({ isOpen }) =>
    isOpen &&
    `
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 3;
  `}


    @media (max-width: ${props => props.theme.breakpoints.mobile}) {
      display: block;
    }


`;

const MobileMenu = props => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <MobileMenuContainer
      isOpen={isOpen}
      // this click event causes menu to close if clicked outside of menu area
      onClick={e => {
        if (e.target === e.currentTarget) {
          setIsOpen(!isOpen);
        }
      }}
    >
      <MobileMenuBurger isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileMenuItems
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        {...props}
      />
    </MobileMenuContainer>
  );
};

export default MobileMenu;

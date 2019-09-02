import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  background-color: #92c3ec;

  h1 {
    margin: 0;
    font-family: 'Varela Round';
    font-size: 7rem;
    font-weight: 100;
    padding-top: 8rem;
    color: #f6dd3b;
    background-color: inherit;
    position: relative;
    /* left: -8px; */
    /* box-shadow: 0 14px -28px rgba(0, 0, 0, 0.25),
      0 10px -10px rgba(0, 0, 0, 0.22); */
    /* box-shadow: 0px 15px 21px -15px #111; */

    transition: all 0.4s cubic-bezier(0.57, 0.4, 0.21, 0.91);

    &:before {
      box-shadow: none;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1 className="rotate-theme">damon.js</h1>
    </HeaderContainer>
  );
};

export default Header;

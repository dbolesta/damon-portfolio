import React from 'react';
import styled from 'styled-components';

const SideHeaderContainer = styled.div`
  /* background-color: #92c3ec; */

  h1 {
    margin: 0;
    font-family: 'Tenor Sans'; /* Varela Round */
    font-size: 3rem;
    font-weight: 100;
    /* padding-top: 2rem; */
    color: ${props => props.theme.colors.yellow};
    background-color: inherit;
    position: relative;
    /* left: -8px; */
    /* box-shadow: 0 14px -28px rgba(0, 0, 0, 0.25),
      0 10px -10px rgba(0, 0, 0, 0.22); */
    /* box-shadow: 0px 15px 21px -15px #111; */

    transition: all 0.4s cubic-bezier(0.57, 0.4, 0.21, 0.91);

    @media (max-width: ${props =>
        props.theme.breakpoints.preMobile}) {
      font-size: 2.3rem;
    }

    /* &:before {
      box-shadow: none;
    } */
  }
`;

const SideHeader = props => {
  return (
    <SideHeaderContainer>
      <h1>damon.js</h1>
    </SideHeaderContainer>
  );
};

export default SideHeader;

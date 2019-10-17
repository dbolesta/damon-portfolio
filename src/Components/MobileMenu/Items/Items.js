import React from 'react';
import styled from 'styled-components';

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* background: greenyellow; */
  align-items: flex-start;
  text-align: right;
  padding: 0 2rem;
  padding-top: 1rem;
  flex: 1 1 100%;
  transition: transform 0.3s cubic-bezier(0.71, 0.21, 0.4, 0.83);
  position: relative;
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(100%)'};

  position: fixed;
  right: 0;
  top: 58px; /* height of burger box */
  /* bottom: 0; */
  z-index: 3;

  span {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 1rem 2rem;
    margin: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.2s cubic-bezier(0.71, 0.21, 0.4, 0.83);
    cursor: pointer;
    background-color: ${props => props.theme.colors.watermelon};
    box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);

    &:hover {
      color: ${props => props.theme.colors.yellow};
    }
  }
`;

const Items = ({ isOpen, clickHandler, scrollRefs, setIsOpen }) => {
  return (
    <StyledMenu isOpen={isOpen}>
      <span
        onClick={() => {
          clickHandler(scrollRefs.scrollBio);
          setIsOpen(!isOpen);
        }}
      >
        Bio
      </span>
      <span
        onClick={() => {
          clickHandler(scrollRefs.scrollSites);
          setIsOpen(!isOpen);
        }}
      >
        Sites
      </span>
      <span
        onClick={() => {
          clickHandler(scrollRefs.scrollGames);
          setIsOpen(!isOpen);
        }}
      >
        Games
      </span>
      <span
        onClick={() => {
          clickHandler(scrollRefs.scrollFooter);
          setIsOpen(!isOpen);
        }}
      >
        Et cetera
      </span>
    </StyledMenu>
  );
};

export default Items;

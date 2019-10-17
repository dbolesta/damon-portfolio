import React from 'react';
import styled from 'styled-components';

const CubeWrapper = styled.div`
  width: 58px;
  height: 58px;
  box-shadow: 10px 10px 54px -6px rgba(0, 0, 0, 0.75);

  position: fixed;
  top: 0;
  right: 0;
  z-index: 4;

  .cube {
    width: inherit;
    height: inherit;
    transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transition: transform 0.3s ease-in-out;
    backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
  }
  .cube-front {
    background-color: #92c3ec;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
      width: 2rem;
      height: 0.25rem;
      background: ${props => props.theme.colors.yellow};
      border-radius: 10px;
      transition: all 0.3s cubic-bezier(0.71, 0.21, 0.4, 0.83);
      position: relative;
      transform-origin: 1px;

      &:nth-of-type(2) {
        margin: 5px 0;
      }
    }
  }
  .cube-right {
    transform: translate(100%, 0) rotateY(90deg);
    transform-origin: left;
    background-color: red;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    div {
      width: 2rem;
      height: 0.25rem;
      background: black;
      border-radius: 10px;
      transition: all 0.3s linear;
      position: relative;
      transform-origin: 1px;

      &:nth-of-type(1) {
        position: absolute;
        top: 17px;
        left: 17px;
        transform: rotate(45deg);
      }
      &:nth-of-type(2) {
        position: absolute;
        bottom: 16px;
        left: 17px;
        transform: rotate(-45deg);
      }
    }
  }

  .open {
    transform: translate(-50%, 0) rotateY(-90deg);
  }
`;

const Burger = props => {
  return (
    <CubeWrapper onClick={() => props.setIsOpen(!props.isOpen)}>
      <div className={'cube ' + (props.isOpen ? 'open' : '')}>
        <div className="cube-right">
          <div />
          <div />
        </div>
        <div className="cube-front">
          <div />
          <div />
          <div />
        </div>
      </div>
    </CubeWrapper>
  );
};

export default Burger;

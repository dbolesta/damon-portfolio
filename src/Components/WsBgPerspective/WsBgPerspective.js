// todo put perspective stripes here, based on js30 #27
import React from 'react';
import styled from 'styled-components';

const PerspectiveContainer = styled.div`
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  z-index: 0;

  border: 1px solid red;
  white-space: nowrap;
  user-select: none;
  background: rgba(255, 255, 255, 0.1);
  font-size: 0;
  perspective: 500px;
`;

const Rect = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 80px;
  font-weight: 100;
  width: 100%;
  height: 20%;
  color: rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 0 0 10px rgba(0, 0, 0, 0.15);

  &:nth-child(9n + 1) {
    background: dodgerblue;
  }
  &:nth-child(9n + 2) {
    background: goldenrod;
  }
  &:nth-child(9n + 3) {
    background: paleturquoise;
  }
  &:nth-child(9n + 4) {
    background: gold;
  }
  &:nth-child(9n + 5) {
    background: cadetblue;
  }
  &:nth-child(9n + 6) {
    background: tomato;
  }
  &:nth-child(9n + 7) {
    background: lightcoral;
  }
  &:nth-child(9n + 8) {
    background: darkslateblue;
  }
  &:nth-child(9n + 9) {
    background: rebeccapurple;
  }

  &:nth-child(even) {
    transform: scaleY(1.31) rotateX(40deg);
  }
  &:nth-child(odd) {
    transform: scaleY(1.31) rotateX(-40deg);
  }
`;

const WsBgPerspective = () => {
  return (
    <PerspectiveContainer>
      <Rect />
      <Rect />
      <Rect />
      <Rect />
      <Rect />
      <Rect />
      <Rect />
    </PerspectiveContainer>
  );
};

export default WsBgPerspective;

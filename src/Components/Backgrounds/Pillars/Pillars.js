import React from 'react';
import styled from 'styled-components';

const PillarsContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const Pillar = styled.div`
  position: absolute;
  width: 30px;
  background-color: ${props => props.color};
  height: 100%;
  mix-blend-mode: hard-light;
  transform-style: preserve-3d;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: none;
  }

  &:nth-of-type(1) {
    left: 10%;
    transform: perspective(67px) rotateX(33deg) skew(55deg, 17deg);
    height: 120%;
  }
  &:nth-of-type(2) {
    bottom: 86%;
    left: 48%;
    transform: perspective(147px) rotateY(80deg) skew(-40deg, -24deg);
    width: 104%;
    height: 31px;
  }
  &:nth-of-type(3) {
    left: 26%;
    transform: perspective(37px) rotateY(62deg) skew(46deg, 25deg);
    height: 189%;
  }
  &:nth-of-type(4) {
    left: 12%;
    bottom: -36%;
    height: 176%;
    transform: perspective(77px) rotateX(7deg) skew(144deg, 12deg);
  }
  &:nth-of-type(5) {
    left: 72%;
    top: -47%;
    transform: perspective(167px) rotateX(55deg) skew(55deg, 17deg);
  }
  &:nth-of-type(6) {
    top: 19%;
    left: 35%;
    transform: perspective(147px) rotateY(47deg) skew(77deg, 7deg);
    width: 114%;
    height: 30px;
  }
  &:nth-of-type(7) {
    left: 94%;
    transform: perspective(137px) rotateY(56deg) skew(45deg, -7deg);
  }
  &:nth-of-type(8) {
    left: 106%;
    bottom: -16%;
    transform: perspective(177px) rotateX(31deg) skew(119deg, 9deg);
  }
`;

const PillarM = styled.span`
  position: absolute;
  width: 30px;
  background-color: ${props => props.color};
  height: 100%;
  mix-blend-mode: hard-light;
  display: none;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
  }

  &:nth-of-type(1) {
    left: 10%;
    transform: rotateX(33deg) skew(55deg, 17deg);
    height: 155%;
  }
  &:nth-of-type(2) {
    bottom: 31%;
    left: -22%;
    transform: rotateY(80deg) skew(-40deg, -24deg);
    width: 211%;
    height: 31px;
  }
  &:nth-of-type(3) {
    left: 26%;
    transform: rotateY(62deg) skew(46deg, 25deg);
    height: 189%;
  }
  &:nth-of-type(4) {
    left: -11%;
    bottom: -36%;
    height: 176%;
    transform: rotateX(7deg) skew(144deg, 12deg);
  }
  &:nth-of-type(5) {
    left: 72%;
    top: -47%;
    transform: rotateX(55deg) skew(55deg, 17deg);
  }
  &:nth-of-type(6) {
    top: 6%;
    left: -41%;
    transform: rotateY(47deg) skew(77deg, 7deg);
    width: 182%;
    height: 30px;
  }
  &:nth-of-type(7) {
    left: 77%;
    top: -40%;
    transform: rotateY(37deg) skew(52deg, 2deg);
  }
  &:nth-of-type(8) {
    left: 131%;
    bottom: -16%;
    transform: rotateX(31deg) skew(119deg, 9deg);
  }
`;

const Pillars = () => {
  return (
    <PillarsContainer>
      <Pillar color="#6F308E" />
      <Pillar color="#FFD330" />
      <Pillar color="#EE4F2F" />
      <Pillar color="#00A894" />
      <Pillar color="#F51165" />
      <Pillar color="#47429a" />
      <Pillar color="#212121" />
      <Pillar color="#791d2c" />

      <PillarM color="#6F308E" />
      <PillarM color="#FFD330" />
      <PillarM color="#EE4F2F" />
      <PillarM color="#00A894" />
      <PillarM color="#F51165" />
      <PillarM color="#47429a" />
      <PillarM color="#212121" />
      <PillarM color="#791d2c" />
    </PillarsContainer>
  );
};

export default Pillars;

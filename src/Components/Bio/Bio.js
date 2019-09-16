import React, { useState } from 'react';
import styled from 'styled-components';
import { setServers } from 'dns';

const BioContainer = styled.div`
  background-color: #fafafa;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const BioWrapper = styled.div`
  padding: 6rem 0;
  width: 600px;

  h1 {
    margin-top: 0;
  }
`;

// this is a mess and can and should be much better
const ColorSlice = styled.div`
  &:before,
  &:after {
    content: '';
    ${props => props.sideValue}: 0;
    position: absolute;
    height: 80%;
    width: 80%;
    /* opacity: 0.5; */
    mix-blend-mode: hard-light;
  }

  &:before {
    background-color: ${props => props.colorValues[0]};
    ${props => (props.sideValue === 'left' ? 'top' : 'bottom')}: 0;
    transform: rotate(-${props => props.degValue}deg);
    transform-origin: ${props =>
      props.sideValue === 'left' ? 'bottom left' : 'top right'};
  }

  &:after {
    background-color: ${props => props.colorValues[1]};
    ${props => (props.sideValue === 'left' ? 'bottom' : 'top')}: 0;
    transform: rotate(${props => props.degValue}deg);
    transform-origin: ${props =>
      props.sideValue === 'left' ? 'top left' : 'bottom right'};
  }
`;

const Bio = props => {
  // lazy initial state
  const [colorArray] = useState(() => {
    return ['#6F308E', '#FFD330', '#EE4F2F', '#00A894'];
  });

  return (
    <BioContainer>
      {/* green red blue yellow */}
      <ColorSlice
        colorValues={[colorArray[0], colorArray[1]]}
        sideValue={'left'}
        degValue={35}
      />
      <BioWrapper>
        {/* <h1>Hi, I'm Damon.</h1>
        <p>
          I'm a NYC based web developer with a love of computer
          technology, and solving complex problems.
        </p>
        <p>
          I want you to believe that 'www' stands for "Wow, wonderful
          website!"
        </p> */}
        <h1>Lorem, ipsum dolor.</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Nostrum natus consectetur inventore dicta modi ipsa
          dignissimos quam deleniti eveniet vero!
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
          minima pariatur repellendus accusantium placeat deserunt non
          nesciunt minus vitae maxime, laboriosam magni, omnis veniam
          adipisci?
        </p>
      </BioWrapper>
      <ColorSlice
        colorValues={[colorArray[2], colorArray[3]]}
        sideValue={'right'}
        degValue={35}
      />
    </BioContainer>
  );
};

export default Bio;

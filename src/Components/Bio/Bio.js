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
  z-index: 1;

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
    width: 180%;
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

const Bio = React.forwardRef((props, ref) => {
  // lazy initial state
  const [colorArray] = useState(() => {
    return ['#6F308E', '#FFD330', '#EE4F2F', '#00A894'];
  });

  if (props.data && props.data[0]) {
    console.log('%c inside bio...', 'font-size: 16px');
    console.log(props.data[0]);
  }

  return (
    <BioContainer ref={ref}>
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
        <h1>Hi, I'm Damon</h1>
        <p>
          I make websites and games with JavaScript. After studying
          Web Applications and Development at NYU, I went on to work
          on various websites on platforms like Shopify and Wordpress,
          create websites from scratch using plain JS or frameworks
          like React, and create browser-based games with frameworks
          like Phaser.
        </p>

        <p>
          I believe the web is one of the most important platforms
          ever created, and I am always eager to learn about new
          technologies to help increase the web's usefulness and
          versatility. Bio is WIP
        </p>
      </BioWrapper>

      <div>
        <ul>
          {props.data && props.data[0]
            ? props.data[0].techs.map(t => {
                const { tech_name: name, tech_icon: icon } = t;
                return (
                  <li>
                    <img src={icon.url} alt={name[0].text} />
                    <span>{name[0].text}</span>
                  </li>
                );
              })
            : null}
        </ul>
      </div>

      <ColorSlice
        colorValues={[colorArray[2], colorArray[3]]}
        sideValue={'right'}
        degValue={35}
      />
    </BioContainer>
  );
});

export default Bio;

import React, { useState } from 'react';
import styled from 'styled-components';

import audio1 from '../../../Audio/moonlight1.wav';
import audio2 from '../../../Audio/rebeccaTest2.mp3';

// ****
// Moon
// ****

const MoonContainer = styled.div`
  position: absolute;
  display: block;
  right: 9%;
  top: 20%;
`;

const SecretPause = styled.div`
  width: 3rem;
  height: 3rem;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11),
    0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.8s ease-in-out;

  span {
    height: 1.25rem;
    width: 0.25rem;
    background: #3ecf8e;
    border-radius: 10px;
    transition: all 0.3s cubic-bezier(0.71, 0.21, 0.4, 0.83);
    position: relative;
    transform-origin: 1px;
    box-shadow: 0 1px 2px rgba(36, 180, 126, 0.4);

    &:nth-of-type(1) {
      margin-right: 2px;
    }
    &:nth-of-type(2) {
      margin-left: 2px;
    }
  }
  /* background-color: grey; */
`;

const Moon = styled.div`
  width: 10rem;
  height: 10rem;
  background-color: transparent;
  border-radius: 50%;
  transition: box-shadow 0.8s ease-in-out;
  box-shadow: inset -37px -9px 0 15px #f3d076;

  display: flex;
  align-items: center;
  justify-content: center;

  ${({ playing }) =>
    playing &&
    `
    cursor: pointer;
    box-shadow: inset -132px -86px 0 3px #f3d076;
  `}

  ${SecretPause} {
    transform: ${props =>
      props.playing ? 'scale(1.5)' : 'scale(0)'};
  }
`;

// this is quite a bit more convoluted than it needs to be, only because it is the
// result of great efforts to prevent issues with iOS devices, as worked out in the chat here:
// https://stackoverflow.com/questions/58496746/react-play-audio-onclick-is-causing-an-unhandled-rejection-notallowederror
// also helpful: https://stackoverflow.com/questions/47686345/playing-sound-in-reactjs
const useAudio = (audio1Src, audio2Src) => {
  const [playing, setPlaying] = useState(false);
  const [audio1Ref, setAudio1Ref] = useState(null);
  const [audio2Ref, setAudio2Ref] = useState(null);
  const [playCount, setPlayCount] = useState(0);

  const toggle = () => {
    if (audio1Ref) {
      setPlayCount(playCount + 1); // keep count just for rebecca

      if (!playing) {
        audio1Ref.play();

        //play rebecca only once
        if (playCount <= 1) {
          audio2Ref.play();
        }
      } else {
        audio1Ref.pause();
      }
    }

    setPlaying(!playing);
  };

  return [toggle, setAudio1Ref, setAudio2Ref, playing];
};

const MoonTwo = () => {
  const [toggle, setAudio1Ref, setAudio2Ref, playing] = useAudio(
    audio1,
    audio2
  );

  return (
    <MoonContainer>
      <Moon onClick={toggle} playing={playing}>
        <SecretPause>
          <span />
          <span />
        </SecretPause>
      </Moon>

      <audio ref={c => setAudio1Ref(c)} src={audio1} />
      <audio ref={c => setAudio2Ref(c)} src={audio2} />
    </MoonContainer>
  );
};

export default MoonTwo;

import React, { useState } from 'react';
import styled from 'styled-components';

import audio1 from '../../../Audio/moonlight1.wav';
import audio2 from '../../../Audio/rebeccaTest2.mp3';
// ****
// Moon
// ****

const Moon = styled.div`
  position: absolute;
  display: block;
  right: 5%;
  top: 15%;
  margin: 2rem;
  width: 10rem;
  height: 10rem;
  background-color: transparent;
  box-shadow: inset -37px -9px 0 15px #f3d076;
  border-radius: 50%;
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

  return [toggle, setAudio1Ref, setAudio2Ref];
};

const MoonTwo = () => {
  const [toggle, setAudio1Ref, setAudio2Ref] = useAudio(
    audio1,
    audio2
  );

  return (
    <>
      <Moon onClick={toggle} />
      <audio ref={c => setAudio1Ref(c)} src={audio1} />
      <audio ref={c => setAudio2Ref(c)} src={audio2} />
    </>
  );
};

export default MoonTwo;

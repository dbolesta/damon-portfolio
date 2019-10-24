import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// ****
// Moon
// ****

const MoonTwo = styled.div`
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

// play / pause audio
//https://stackoverflow.com/questions/47686345/playing-sound-in-reactjs
const useAudio = (url, rebecca) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);
  let [audio2] = useState(new Audio(rebecca));
  let [playCount, setPlayCount] = useState(0);
  audio2.volume = 0.5;

  console.log('Use Audio Running');

  const toggle = () => {
    if (playCount === 0) {
      console.log('a flower between two chasms...');
    }
    setPlayCount(playCount + 1);
    setPlaying(!playing);
  };

  useEffect(() => {
    console.log('useEffect Running!');
    playing ? audio.play() : audio.pause();

    if (playCount <= 1) {
      setTimeout(() => {
        playing ? audio2.play() : audio2.pause();
      }, 2200);
    }
  }, [playing, audio, audio2, playCount]);

  return [toggle];
};

const Moon = ({ url, rebecca }) => {
  const [toggle] = useAudio(url, rebecca);

  return (
    <>
      <MoonTwo onClick={toggle} />
    </>
  );
};

export default Moon;

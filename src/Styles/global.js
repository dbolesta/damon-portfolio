import { css } from 'styled-components';
import normalize from './normalize';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Tenor+Sans&display=swap');

  ${normalize}

  :root {
    --work-stripe-box-shadow: 0 -14px 28px rgba(0, 0, 0, 0.25),
      0 -10px 10px rgba(0, 0, 0, 0.22);
  }

  * {
    box-sizing: border-box;
  }

  html {
    font-size: 1rem;
    line-height: 1.6;
    background-color: #8ada4d;
    /* background-color: red; */
    overflow-x: hidden;
    font-family: 'Montserrat';

    @media (max-width: 900px) {
    }
  }

  body {
    /* max-width: 700px; */
    margin: auto;
    background-color: hsl(
      -90,
      90%,
      24%
    ); /* like a dark velvet night sky */
    /* min-height: 150vh; */
  }

  p,
  li,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Montserrat';
  }

  /* this should be as a theme? global rotate?*/
  .rotate-theme2 {
    transform: rotate(-6deg);
    transform-origin: bottom right;

    &::before {
      content: '';
      /* background-color: inherit; */
      background: inherit;
      position: absolute;
      top: 0;
      bottom: 0;
      width: 200%;
    }
    &::before {
      left: -50%;
      z-index: -1;
      box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16),
        0 -3px 6px rgba(0, 0, 0, 0.23);
    }
    /* &::after {
      right: -199px;
    } */
  }
`;

import { css } from 'styled-components';
import normalize from './normalize';

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Varela+Round&display=swap');

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

    @media (max-width: 900px) {
    }
  }

  body {
    max-width: 700px;
    margin: auto;
    background-color: hsl(
      -90,
      90%,
      24%
    ); /* like a dark velvet night sky */
    min-height: 150vh;
  }

  /* this should be as a theme? global rotate?*/
  .rotate-theme {
    transform: rotate(-6deg);
    transform-origin: bottom right;

    &::before,
    &::after {
      content: '';
      background-color: inherit;
      background: inherit;
      position: absolute;
      top: 0;
      bottom: 0;
      width: 200px;
    }
    &::before {
      left: -199px;
    }
    &::after {
      right: -199px;
    }
  }
`;

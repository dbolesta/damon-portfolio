import { css } from 'styled-components';

export const theme = {
  workStripeColors: {
    green: 'hsl(130, 70%, 75%)',
    red: 'hsl(8, 70%, 75%)'
  },
  colors: {
    yellow: '#f6dd3b'
  },
  rotateAndExtend: css`
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
  `
};

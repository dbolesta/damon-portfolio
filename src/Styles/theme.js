import { css } from 'styled-components';

export const theme = {
  workStripeColors: {
    green: 'hsl(130, 70%, 75%)',
    red: 'hsl(8, 70%, 75%)'
  },
  boxShadow:
    '0 4px 6px rgba(50,50,93,0.11), 0 1px 3px rgba(0,0,0,0.08)',
  colors: {
    yellow: '#f6dd3b',
    blue: '#92c3ec',
    blue3: '#70d6ef',
    asteroid: {
      white: '#F4F4F4',
      black: '#010101'
    },
    watermelon: '#FC2376',
    purple: '#d63ccd',
    nukeGreen: 'hsl(130, 87%, 64%)',
    blue2: '#306FBB',
    orange: '#E73B18',
    turq: '#31AAAE',
    turq2: '#4AF6EC',
    pink: '#E684B9'
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
  `,
  breakpoints: {
    mobile: '900px',
    preMobile: '1110px'
  }
};

import { darken } from 'polished';

const breakpoints = [400, 768, 992, 1200];

const brand = {
  primary: '#0D1552',
  secondary: '#7b8acc',
};

const colors = {
  primary: '#0D1552',
  secondary: '#7b8acc',
  dark: '#444',
  text: '#333',
  grey: '#6b6b6b',
  black: '#000',
  white: '#fff',
  bg: '#f9f9f9',
  link: brand.primary,
  linkHover: darken(0.15, brand.primary),
};

const fonts = {
  default: [
    '-apple-system',
    'BlinkMacSystemFont',
    'Segoe UI',
    'Roboto',
    'Helvetica',
    'Arial',
    'sans-serif',
    'Apple Color Emoji',
    'Segoe UI Emoji',
    'Segoe UI Symbol',
  ],
  serif: ['Georgia', 'serif'],
  size: 18,
};

const animation = {
  transitionTime: '300ms',
};

const theme = {
  colors,
  animation,
  breakpoints,
  fonts,
  container: {
    base: '100rem',
    text: '55rem',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
};

export { theme as default, colors, animation, breakpoints, fonts };

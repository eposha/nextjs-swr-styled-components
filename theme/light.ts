import { ITheme } from './theme';

const lightTheme: ITheme = {
  name: 'light',
  base: 'default',
  btn: {
    primary: {
      bg: {
        default: '#4555E9',
        hovered: '#5A73F9',
        disabled: '#5A73F9',
      },
      color: {
        default: '#FFFFFF',
        hovered: '#FFFFFF',
        disabled: '#B3CAEF',
      },
    },
    secondary: {
      bg: {
        default: '#EBEEF1',
        hovered: '#CFD4E2',
        disabled: '#EBEEF1',
      },
      color: {
        default: '#4B4D57',
        hovered: '#4B4D57',
        disabled: '#9598A4',
      },
    },
  },
};

export default lightTheme;

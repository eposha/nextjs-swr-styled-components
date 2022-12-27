import { DefaultTheme } from 'styled-components';

export interface ITheme extends DefaultTheme {
  name: string;
  base: string;
  btn: {
    primary: {
      bg: {
        default: string;
        hovered: string;
        disabled: string;
      };
      color: {
        default: string;
        hovered: string;
        disabled: string;
      };
    };
    secondary: {
      bg: {
        default: string;
        hovered: string;
        disabled: string;
      };
      color: {
        default: string;
        hovered: string;
        disabled: string;
      };
    };
  };
}

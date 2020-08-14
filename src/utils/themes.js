import { blue, neutral, yellow, red, green } from './colors';
import { primaryFont } from './typography';

export const defaultTheme = {
    primaryColor: green[100],
    primaryHoverColor: green[200],
    primaryActiveColor: green[100],
    textColorOnPrimary: neutral[500],
    textColor: neutral[500],
    textColorInverted: neutral[100],
    secondaryColor: green[300],
    secondaryHoverColor: green[300],
    tertiaryTextColor: green[300],
    textColorOnSecondary: green[500],
    disabled: neutral[300],
    textOnDisabled: neutral[400],
    formElementBackground: neutral[100],
    textOnFormElementBackground: neutral[600],
    primaryFont,
    status: {
        warningColor: yellow[100],
        warningColorHover: yellow[200],
        warningColorActive: yellow[300],
        errorColor: red[100],
        errorColorHover: red[200],
        errorColorActive: red[300],
        successColor: green[100],
        successColorHover: green[200],
        successColorActive: green[300]
      }
}

export const darkTheme = {
    primaryColor: neutral[100],
    primaryHoverColor: neutral[200],
    primaryActiveColor: neutral[300],
    textColorOnPrimary: blue[300],
    textColor: blue[300],
    textColorInverted: neutral[100],
    primaryFont: primaryFont,
    disabled: neutral[400],
    textOnDisabled: neutral[300],
    formElementBackground: blue[100],
    textOnFormElementBackground: neutral[600],
    status: {
      warningColor: yellow[100],
      warningColorHover: yellow[200],
      warningColorActive: yellow[300],
      errorColor: red[100],
      errorColorHover: red[200],
      errorColorActive: red[300],
      successColor: green[100],
      successColorHover: green[200],
      successColorActive: green[300]
    }
  };
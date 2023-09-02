import { createStitches } from "@stitches/react";

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme
} = createStitches({
  theme: {
    colors: {
      white: '#f9fafc',
      blue: '#1a56dc',
      gray100: '#d7d8dc',
      gray700: '#6a717e',
      gray800: '#6c7380'
    }
  }
});
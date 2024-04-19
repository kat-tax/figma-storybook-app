import {UnistylesRegistry} from 'react-native-unistyles';
import {initialTheme, themes, breakpoints} from 'design/theme';

export type AppThemes = {[K in keyof typeof themes]: typeof themes[K]}
export type AppBreakpoints = typeof breakpoints

export * from 'react-native-unistyles';
export default UnistylesRegistry
  .addThemes(themes)
  .addBreakpoints(breakpoints)
  .addConfig({
    initialTheme,
    adaptiveThemes: false,
  });

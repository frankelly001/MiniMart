import {colors} from '@/resources/colors';
import {DefaultTheme} from '@react-navigation/native';

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: colors.primary_5,
    background: colors.neutral_light_1,
  },
};

import {SCREEN_HORIZONTAL_SPACE, wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const homeScreenStyles = () =>
  StyleSheet.create({
    list: {
      backgroundColor: '#FBFBFB',
      paddingHorizontal: SCREEN_HORIZONTAL_SPACE,
      paddingVertical: wp(8),
    },
  });

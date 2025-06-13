import {SCREEN_HORIZONTAL_SPACE, wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const cartScreenStyles = () =>
  StyleSheet.create({
    footer: {
      paddingVertical: wp(16),
      paddingHorizontal: SCREEN_HORIZONTAL_SPACE,
      backgroundColor: '#ffffff',
    },
    list: {
      backgroundColor: '#FBFBFB',
      paddingHorizontal: SCREEN_HORIZONTAL_SPACE,
      paddingVertical: wp(8),
    },
    summary: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  });

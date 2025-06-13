import {SCREEN_HORIZONTAL_SPACE, SCREEN_WIDTH, wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const productDetailsScreenStyles = () =>
  StyleSheet.create({
    container: {
      backgroundColor: '#FBFBFB',
      paddingVertical: wp(8),
    },
    footer: {
      paddingVertical: wp(16),

      paddingHorizontal: SCREEN_HORIZONTAL_SPACE,
      backgroundColor: '#ffffff',
    },
    imageContainer: {
      width: '100%',
      height: SCREEN_WIDTH - SCREEN_HORIZONTAL_SPACE * 2,
      borderRadius: wp(15),
      overflow: 'hidden',
    },
    image: {width: '100%', height: '100%'},
    like: {
      position: 'absolute',
      width: wp(44),
      height: wp(44),
      borderRadius: wp(22),
      alignItems: 'center',
      justifyContent: 'center',
      right: 12,
      top: 12,
      backgroundColor: '#FFFFFF',
    },
  });

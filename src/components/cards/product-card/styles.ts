import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const productCardStyles = () =>
  StyleSheet.create({
    container: {
      flex: 1,

      gap: wp(4),
    },
    imageContainer: {
      width: '100%',
      height: wp(162),
      borderRadius: wp(8.62),
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
  });

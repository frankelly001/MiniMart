import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const productCardStyles = () =>
  StyleSheet.create({
    container: {
      gap: wp(10),
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F6F5F8',
      borderRadius: wp(15),
      padding: wp(10),
    },
    imageContainer: {
      width: wp(102.87),
      height: wp(106.15),
      borderRadius: wp(5.65),
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: '100%',
    },
    actionBtn: {
      position: 'absolute',
      right: -5,
      bottom: -5,
    },
  });

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
    detailContainer: {gap: wp(5), flex: 1},
    actionContainer: {flexDirection: 'row', alignItems: 'center', gap: wp(32)},
    actionBtn: {
      width: wp(36),
      height: wp(36),
      borderRadius: wp(18),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
    },
    plusMinusContainer: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  });

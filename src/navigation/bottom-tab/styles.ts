import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const bottomTabStyles = () =>
  StyleSheet.create({
    indicator: {
      position: 'absolute',
      right: -12,
      top: -8,
      height: wp(24.82),
      minWidth: wp(24.82),
      backgroundColor: '#3C4856',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: wp(68.17),
      paddingHorizontal: wp(3),
    },
    tabBar: {
      paddingHorizontal: 0,
      height: wp(82),
      paddingTop: wp(14),
    },
  });

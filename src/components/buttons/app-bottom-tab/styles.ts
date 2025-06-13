import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const bottomTabStyles = ({
  indicatorColor,
}: {indicatorColor?: string} = {}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      gap: wp(4),
      // backgroundColor: 'red',
    },
    indicatorContainer: {
      height: wp(32),
      width: wp(56),
      borderRadius: wp(16),
      backgroundColor: indicatorColor,
      // flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    icon: {marginTop: wp(10), marginBottom: wp(8), height: wp(24)},
    iconAndLabelContainer: {alignItems: 'center'},
  });

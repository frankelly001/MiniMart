import {SCREEN_HORIZONTAL_SPACE, wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const appHeaderStyle = () =>
  StyleSheet.create({
    container: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: 'transparent',
      alignItems: 'center',
      paddingLeft: SCREEN_HORIZONTAL_SPACE,
      paddingRight: SCREEN_HORIZONTAL_SPACE + 4,
      borderTopWidth: 0,
      borderBottomWidth: 0,
      overflow: 'hidden',
      height: wp(40),
    },
    left: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      flexDirection: 'row',
      height: '100%',
    },
    middle: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 2,
      height: '100%',
    },
    right: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
      alignItems: 'center',
      height: '100%',
    },
  });

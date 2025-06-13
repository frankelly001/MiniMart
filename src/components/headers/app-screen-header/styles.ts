import {SCREEN_HORIZONTAL_SPACE, wp} from '@/resources/config';
import {generateTypography} from '@/resources/fonts';
import {StyleSheet} from 'react-native';

export const appHeaderStyle = () =>
  StyleSheet.create({
    container1: {
      borderBottomWidth: 1,
      borderColor: '#E2E8F0',
      padding: SCREEN_HORIZONTAL_SPACE,
    },
    left: {
      flex: 1,
      alignItems: 'flex-start',
    },
    middle: {
      flex: 3,
    },
    right: {
      flex: 1,
      alignItems: 'flex-end',
    },
    container2: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputContainer: {
      height: wp(36),
      borderRadius: wp(5),
      overflow: 'hidden',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(8),
      marginTop: wp(8),
      gap: wp(8),
      borderWidth: 1,
      borderColor: '#E2E8F0',
    },
    input: {
      flex: 1,
      ...generateTypography({size: 14, weight: 'Regular'}),
      color: 'black',
    },
    container3: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: wp(8),
      gap: wp(8),
    },
  });

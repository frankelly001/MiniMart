import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';
import {AppButtonStyle} from './type';

export const appButtonStyles = ({
  height = 40,
  width,

  borderRadius = 10,

  borderStyle,
  paddingHorizontal = 16,
  flex,
  contentGap = 4,
}: {
  isDisabled?: boolean;
} & AppButtonStyle) =>
  StyleSheet.create({
    container: {
      flex,
      gap: wp(contentGap),
      width: typeof width === 'number' ? wp(width) : width,
      height: wp(height),
      paddingHorizontal: wp(paddingHorizontal),
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderStyle,
      backgroundColor: '#60B5FF',
      borderRadius: wp(borderRadius),
      // borderWidth,
      // borderColor: colors?.[isDisabled ? 'neutral_light_3' : borderColor],
    },
  });

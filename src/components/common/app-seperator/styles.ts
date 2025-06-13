import {ColorKeys} from '@/resources/colors';
import {wp} from '@/resources/config';
import {BorderStylesTypes} from '@/types/styles';
import {StyleSheet} from 'react-native';

export const appSeperatorStyles = ({
  color,
  size = 0.6,
  isVertical = false,
  borderStyle = 'solid',
}: {
  color?: ColorKeys;
  size?: number;
  isVertical?: boolean;
  borderStyle?: BorderStylesTypes;
} = {}) =>
  StyleSheet.create({
    container: {
      [!isVertical ? 'height' : 'width']: wp(size),
      [!isVertical ? 'width' : 'height']: '100%',
      borderStyle: borderStyle,
      backgroundColor: color,
    },
  });

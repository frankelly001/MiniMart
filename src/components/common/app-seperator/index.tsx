import React, {FunctionComponent} from 'react';
import {View, ViewStyle} from 'react-native';
import {appSeperatorStyles} from './styles';
import {ColorKeys} from '@/resources/colors';
import {BorderStylesTypes} from '@/types/styles';

const AppSeperator: FunctionComponent<{
  color?: ColorKeys;
  style?: ViewStyle;
  size?: number;
  isVertical?: boolean;
  borderStyle?: BorderStylesTypes;
}> = ({color, style, size, isVertical, borderStyle}) => {
  const styles = appSeperatorStyles({
    color,
    size,
    isVertical,
    borderStyle,
  });
  return <View style={[styles.container, style]} />;
};

export default AppSeperator;

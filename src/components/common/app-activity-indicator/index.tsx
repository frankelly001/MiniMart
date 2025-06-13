import React, {FunctionComponent} from 'react';
import {ActivityIndicator, ViewStyle} from 'react-native';

/**
 * @param size defaults to 20
 * @param color defaults to primary400
 */
const AppActivityIndicator: FunctionComponent<{
  style?: ViewStyle;
  size?: number;
}> = ({style, size = 20}) => {
  return <ActivityIndicator style={style} size={size} color={'white'} />;
};

export default AppActivityIndicator;

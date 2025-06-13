import React, {FunctionComponent} from 'react';
import {View, ViewStyle} from 'react-native';
import {emptyCardStyles} from './styles';

const EmptyCard: FunctionComponent<{containerStyles?: ViewStyle}> = ({
  containerStyles,
}) => {
  const styles = emptyCardStyles();
  return <View style={[styles.container, containerStyles]} />;
};

export default EmptyCard;

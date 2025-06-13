import React, {FunctionComponent, ReactNode} from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import {actionButtonStyles} from './styles';

const ActionButton: FunctionComponent<{Icon: ReactNode; style?: ViewStyle}> = ({
  Icon,
  style,
}) => {
  const styles = actionButtonStyles();
  return (
    <TouchableOpacity style={[styles.container, style]}>
      {Icon}
    </TouchableOpacity>
  );
};

export default ActionButton;

import React, {FunctionComponent} from 'react';
import {TouchableOpacity} from 'react-native';
import AppText from '../../common/app-text';
import {appButtonStyles} from './styles';
import {AppButtonProps} from './type';
import {AppActivityIndicator} from '@/components/common';

/**
 *
 * @param text defaults to Add Label
 * @param textType defaults to button_semibold
 * @param textColor defaults to white
 * @param borderWidth defaults to 1
 */
const AppButton: FunctionComponent<AppButtonProps> = ({
  height,
  width,
  text = 'Add Label',
  onPress,

  isDisabled,
  isLoading,
  containerStyle,

  borderRadius,
  borderWidth = 0.8,
  LeftContent,
  RightContent,
  borderStyle,
  textStyle,
  paddingHorizontal,
  textTransform,
  flex,
  contentGap,
  activeOpacity = 0.8,
}) => {
  const isBusy = isDisabled || isLoading;

  const styles = appButtonStyles({
    height,
    width,
    isDisabled: isBusy,
    borderRadius,
    borderWidth,
    borderStyle,
    paddingHorizontal,
    flex,
    contentGap,
  });

  return (
    <TouchableOpacity
      activeOpacity={isBusy ? 1 : activeOpacity}
      disabled={isBusy}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      {LeftContent}
      {isLoading ? (
        <AppActivityIndicator size={25} />
      ) : (
        <AppText
          color={isDisabled ? 'neutral_dark_5' : '#ffffff'}
          size={14}
          weight="Bold"
          textTransform={textTransform}
          text={text}
          lineHeight={20}
          align={'center'}
          style={textStyle}
        />
      )}
      {RightContent}
    </TouchableOpacity>
  );
};

export default AppButton;

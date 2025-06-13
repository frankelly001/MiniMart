import React, {FunctionComponent} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Toast, {
  ToastConfig,
  ToastConfigParams,
} from 'react-native-toast-message';

import {appToastViewStyles} from './styles';
import {ToastProps, appToastViewProps, toastTypeProps} from './types';
import AppText from '../app-text';
import {detectTouch, isIOS} from '@/resources/config';
import {CloseIcon, SuccessCheckIcon} from '@/assets/svg';

export const toastTypes: {[key in toastTypeProps]: toastTypeProps} = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  WARNING: 'WARNING',
  INFO: 'INFO',
};

const AppToastView: FunctionComponent<appToastViewProps> = ({
  message,

  type = 'INFO',
  onHide,
}) => {
  const toastColors: Record<toastTypeProps, string> = {
    SUCCESS: '#10B981',
    ERROR: '#D82E34',
    WARNING: '#FFB32A',
    INFO: '#60B5FF',
  };

  const styles = appToastViewStyles({statusColor: toastColors[type]});

  return (
    <View style={styles.container}>
      <View style={styles.toast}>
        {type === 'SUCCESS' && <SuccessCheckIcon />}
        <View style={styles.contentContainer}>
          <AppText
            text={message}
            weight="SemiBold"
            size={14}
            color={'#334155'}
            lineHeight={20}
          />
        </View>
        <TouchableOpacity onPress={onHide} hitSlop={detectTouch}>
          <CloseIcon />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const defaultTitle: Record<toastTypeProps, string> = {
  SUCCESS: 'Success',
  ERROR: 'Error encountered!',
  INFO: 'Information',
  WARNING: 'Warning!',
};

export const showToast = (
  toastType: toastTypeProps,
  {
    title,
    message,
    onPress,
    actionText,
  }: {
    title?: string;
    message: string | undefined;
    onPress?: () => void;
    actionText?: string | undefined;
  },
) => {
  return Toast.show({
    type: 'appToast',
    text1: title || defaultTitle[toastType],
    text2: message,
    props: {toastType, actionText},
    onPress: onPress,
  });
};

const toastConfig: ToastConfig = {
  appToast: (obj: ToastConfigParams<ToastProps>) => {
    const {text2, onPress, props} = obj;
    return (
      <AppToastView
        message={text2}
        type={props.toastType}
        onHide={() => {
          onPress();
          Toast.hide();
        }}
      />
    );
  },
};

const AppToast: FunctionComponent = () => {
  return <Toast config={toastConfig} topOffset={isIOS ? 70 : 5} />;
};

export default AppToast;

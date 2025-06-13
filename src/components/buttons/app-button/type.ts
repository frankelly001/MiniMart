import {ReactNode} from 'react';
import {DimensionValue, TextStyle, ViewStyle} from 'react-native';
import {TextTranformTypes} from '@/components/common/app-text/type';

export type AppButtonStyle = {
  /** borderRadius is scaled by wp() and defaults to 10*/
  borderRadius?: number;
  /** height is scaled by wp() and defaults to 44*/
  height?: number;
  /** width is scaled by wp() and defaults to 100%*/
  width?: DimensionValue;
  /** paddingHorizontal is scaled by wp() and defaults to 16*/
  paddingHorizontal?: number;
  // buttonColor?: ColorKeys | 'transparent';
  borderWidth?: number;
  // borderColor?: ColorKeys | 'transparent';
  borderStyle?: 'solid' | 'dotted' | 'dashed';
  flex?: number;
  contentGap?: number;
};

export type AppButtonProps = {
  text?: string;
  onPress?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  containerStyle?: ViewStyle | Array<ViewStyle | undefined>;
  // textType?: TypographyKeys;
  // textColor?: ColorKeys;
  LeftContent?: ReactNode;
  RightContent?: ReactNode;
  textStyle?: TextStyle;
  textTransform?: TextTranformTypes;
  activeOpacity?: number;
} & AppButtonStyle;

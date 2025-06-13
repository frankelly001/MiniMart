import {TypographyProps} from '@/resources/fonts';
import {ReactNode} from 'react';
import {StyleProp, TextProps} from 'react-native';
import {TextStyle} from 'react-native/types';

export type AlignTypes = 'flex-start' | 'flex-end' | 'center' | 'auto';
export type TextTranformTypes =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | undefined;

type TextDecorationLine =
  | 'none'
  | 'underline'
  | 'line-through'
  | 'underline line-through'
  | undefined;

export type AppTextProps = {
  text?: string | ReactNode;
  style?: StyleProp<TextStyle>;
  color?: string;
  align?: AlignTypes;
  children?: React.ReactNode;
  onPress?: () => void;
  textTransform?: TextTranformTypes;
  textDecorationLine?: TextDecorationLine;
} & TypographyProps &
  TextProps;

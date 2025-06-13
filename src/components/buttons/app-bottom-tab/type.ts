import {BottomTabBarButtonProps} from '@react-navigation/bottom-tabs';
import {ReactNode} from 'react';

export type TabButtonProps = {
  activeColor?: string;
  inActiveColor?: string;
  renderIcon: (props: {isFocused: boolean | undefined}) => ReactNode;
  label: string;
} & Omit<BottomTabBarButtonProps, 'children' | 'ref'>;

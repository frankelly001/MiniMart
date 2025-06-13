import {ColorKeys} from '@/resources/colors';
import {ReactNode} from 'react';
import {ScrollView, ScrollViewProps} from 'react-native';

export type AppScreenProps = {
  children: ReactNode;
  isScrollable?: boolean;
  disableSafeArea?: boolean;
  ScreenHeader?: ReactNode;
  ScreenFooter?: ReactNode;
  statusBarBackgroundColor?: ColorKeys;
  horizontalPadding?: number;
  disableBottomSafeArea?: boolean;
  screenBackground?: ColorKeys;
  scrollRef?: React.RefObject<ScrollView>;
} & ScrollViewProps;

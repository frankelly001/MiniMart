import {isAndroid, isIOS, wp} from '@/resources/config';
import React, {Fragment, FunctionComponent} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
} from 'react-native';
import {appScreenStyles} from './styles';
import {AppScreenProps} from './type';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const AppScreen: FunctionComponent<AppScreenProps> = ({
  children,
  isScrollable = true,
  disableSafeArea = false,
  ScreenHeader,
  statusBarBackgroundColor = 'neutral_light_2',
  horizontalPadding,
  contentContainerStyle,
  disableBottomSafeArea = true,
  screenBackground,
  ScreenFooter,
  scrollRef,
  ...scrollViewProps
}) => {
  const Container = disableSafeArea ? View : SafeAreaView;
  const styles = appScreenStyles({screenBackground});

  const {bottom} = useSafeAreaInsets();

  return (
    <Fragment>
      <StatusBar backgroundColor={statusBarBackgroundColor} />

      <Container style={[styles.flex1, styles.screenBackground]}>
        <View
          style={[
            styles.flex1,
            styles.container,
            {...(disableBottomSafeArea && {marginBottom: -bottom})},
          ]}>
          {ScreenHeader}
          <KeyboardAvoidingView
            behavior={isIOS ? 'padding' : 'height'}
            style={[styles.flex1]}>
            {isScrollable ? (
              <ScrollView
                ref={scrollRef}
                contentInsetAdjustmentBehavior="automatic"
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                scrollEnabled={isScrollable}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={[
                  {
                    paddingHorizontal: horizontalPadding,
                    ...(isAndroid && {paddingBottom: wp(20)}),
                  },
                  contentContainerStyle,
                ]}
                {...scrollViewProps}>
                {children}
              </ScrollView>
            ) : (
              <View
                style={[
                  styles.flex1,
                  {
                    paddingHorizontal: horizontalPadding,
                  },
                  contentContainerStyle,
                ]}>
                {children}
              </View>
            )}

            {ScreenFooter}
          </KeyboardAvoidingView>
        </View>
      </Container>
    </Fragment>
  );
};

export default AppScreen;

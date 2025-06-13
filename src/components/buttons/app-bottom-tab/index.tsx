import React, {FunctionComponent, useEffect} from 'react';
import {Animated, Easing, Pressable} from 'react-native';
import {AppText} from '../../common';
import {bottomTabStyles} from './styles';
import {TabButtonProps} from './type';

const AppTabButton: FunctionComponent<TabButtonProps> = ({
  label,
  activeColor = '#60B5FF',
  inActiveColor = '#49454F',
  accessibilityState,
  renderIcon,

  ...buttonProps
}) => {
  const isFocused = !accessibilityState?.selected;
  const color = isFocused ? activeColor : inActiveColor;

  console.log(isFocused);

  const styles = bottomTabStyles({
    indicatorColor: color,
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  // const animatedValue = new Animated.Value(0);

  // useEffect(() => {
  //   const ease = Animated.timing(animatedValue, {
  //     toValue: isFocused ? 56 : 0,
  //     duration: 1000,
  //     easing: Easing.linear,
  //     isInteraction: true,
  //     useNativeDriver: false,
  //   });

  //   ease.start();

  //   // Clean up the animation when the component unmounts
  //   return () => ease.stop();
  // }, [isFocused, animatedValue]);

  // const width = animatedValue.interpolate({
  //   inputRange: [0, 56],
  //   outputRange: [0, 56],
  // });

  return (
    <Pressable {...buttonProps} style={styles.container}>
      <Animated.View style={[styles.indicatorContainer]}>
        {renderIcon({isFocused})}
      </Animated.View>
      <AppText
        text={label}
        size={12}
        weight="SemiBold"
        lineHeight={16}
        style={{color}}
      />
    </Pressable>
  );
};

export default AppTabButton;

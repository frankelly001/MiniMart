import React, {FunctionComponent, useEffect} from 'react';
import {Animated, Easing, Pressable} from 'react-native';
import {AppText} from '../../common';
import {bottomTabStyles} from './styles';
import {TabButtonProps} from './type';
import {useIsFocused} from '@react-navigation/native';
import {wp} from '@/resources/config';

const AppTabButton: FunctionComponent<TabButtonProps> = ({
  label,
  activeColor = '#60B5FF',
  inActiveColor = '#49454F',
  renderIcon,
  ...buttonProps
}) => {
  const isFocused = useIsFocused();
  const color = isFocused ? activeColor : inActiveColor;

  const styles = bottomTabStyles({
    indicatorColor: isFocused ? color : 'transparent',
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const animatedValue = new Animated.Value(0);

  useEffect(() => {
    const ease = Animated.timing(animatedValue, {
      toValue: isFocused ? wp(56) : wp(35),
      duration: 300,
      easing: Easing.linear,
      isInteraction: true,
      useNativeDriver: false,
    });

    ease.start();

    // Clean up the animation when the component unmounts
    return () => ease.stop();
  }, [isFocused, animatedValue]);

  const width = animatedValue.interpolate({
    inputRange: [wp(35), wp(56)],
    outputRange: [wp(35), wp(56)],
  });

  return (
    <Pressable {...buttonProps} style={styles.container}>
      <Animated.View style={[styles.indicatorContainer, {width}]}>
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

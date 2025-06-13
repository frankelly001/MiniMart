import React from 'react';
import {Text} from 'react-native';
import {textAlignStyles} from './styles';
import {AppTextProps} from './type';
import {generateTypography, TypographyProps} from '../../../resources/fonts';

/**
 * @param text defaults to EMPTY_STRING
 * @param type defaults to label_semibold
 * @param textTransform defaults to none
 * @param align defaults to auto
 * @param color defaults to text400
 */
const AppText = React.forwardRef(
  (props: AppTextProps & TypographyProps, ref: React.LegacyRef<Text>) => {
    const {
      text = '',
      color,
      align = 'auto',
      textTransform = 'none',
      style,
      onPress,
      textDecorationLine,
      size,
      weight,
      letterSpacePercent,
      lineHeight,
      family,
      ...otherTextProps
    } = props;

    const textAlign = textAlignStyles[align];
    const textType = generateTypography({
      size,
      family,
      letterSpacePercent,
      lineHeight,
      weight,
    });
    const textColor = {color};

    const baseTextStyle = {
      ...textType,
      ...textColor,
      ...textAlign,
    };

    return (
      <Text
        ref={ref}
        onPress={onPress}
        style={[
          baseTextStyle,
          {
            textTransform,
            textDecorationLine,
          },
          style,
        ]}
        {...otherTextProps}>
        {text}
      </Text>
    );
  },
);

export default AppText;

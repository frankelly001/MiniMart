import {AppText} from '@/components/common';
import {AppTextProps} from '@/components/common/app-text/type';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {bulletPointTextStyles} from './styles';

/**
 * BulletPointText component renders a text item with a bullet point.
 *
 * @param {string} text - The text to display next to the bullet point.
 * @param {string} type - The type of text style to apply. Defaults to 'body_2_semibold'.
 * @param {string} color - The color of the text. Defaults to 'text400'.
 */
const BulletPointText: FunctionComponent<AppTextProps> = ({
  text,

  color = 'neutral_dark_6',

  ...otherProps
}) => {
  if (!text) {
    return null;
  }
  const styles = bulletPointTextStyles;
  return (
    <View style={styles.container}>
      <AppText
        text={'\u2022'}
        style={styles.pointer}
        color={color}
        {...otherProps}
      />
      <AppText
        text={text}
        color={color}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
        }}
        {...otherProps}
      />
    </View>
  );
};

export default BulletPointText;

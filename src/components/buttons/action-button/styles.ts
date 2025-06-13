import {colors} from '@/resources/colors';
import {wp} from '@/resources/config';
import {StyleSheet} from 'react-native';

export const actionButtonStyles = () =>
  StyleSheet.create({
    container: {
      padding: wp(3.6),
      backgroundColor: colors?.primary_1,
      borderRadius: wp(50),
    },
  });

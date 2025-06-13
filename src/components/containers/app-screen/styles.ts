import {StyleSheet} from 'react-native';

export const appScreenStyles = ({
  screenBackground = '#FFFFFF',
}: {screenBackground?: string} = {}) =>
  StyleSheet.create({
    flex1: {flex: 1},
    container: {overflow: 'hidden'},
    screenBackground: {backgroundColor: screenBackground},
  });

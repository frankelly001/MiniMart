import {wp} from '@/resources/config';
import {generateShadow} from '@/utils/helpers';
import {StyleSheet} from 'react-native';

export const appToastViewStyles = ({statusColor}: {statusColor?: string}) =>
  StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: 'transparent',
      paddingHorizontal: 20,
    },

    contentContainer: {flex: 1},
    toast: {
      borderRadius: wp(8),
      overflow: 'hidden',
      backgroundColor: '#ffffff',
      borderLeftWidth: wp(4),
      borderColor: statusColor,
      flexDirection: 'row',
      alignItems: 'center',
      padding: wp(16),
      gap: wp(16),
      ...generateShadow({depth: 16, color: '#00000026'}),
    },
  });

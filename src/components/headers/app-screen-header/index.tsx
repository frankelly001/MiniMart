import {
  ArrowLeftIcon,
  LogoIcon,
  NotificationIcon,
  SearchIcon,
} from '@/assets/svg';
import {AppText} from '@/components/common';
import {detectTouch, SCREEN_HORIZONTAL_SPACE, wp} from '@/resources/config';
import {generateTypography} from '@/resources/fonts';
import {useNavigation} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {appHeaderStyle} from './styles';
import {AppHeaderProps} from './type';

const AppScreenHeader: FunctionComponent<AppHeaderProps> = ({
  onPressBack,
  showInput,
  title,
}) => {
  const navigation = useNavigation();

  const styles = appHeaderStyle();

  return (
    <>
      <View
        style={{
          borderBottomWidth: 1,
          borderColor: '#E2E8F0',
          padding: SCREEN_HORIZONTAL_SPACE,
        }}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-start',
            }}>
            <LogoIcon />
          </View>
          <View
            style={{
              flex: 3,
            }}>
            <AppText
              text="DELIVERY ADDRESS"
              size={10}
              weight="SemiBold"
              align="center"
              lineHeight={28}
            />
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'flex-end',
            }}>
            <NotificationIcon />
          </View>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <AppText
            text="Umuezike Road, Oyo State"
            size={12}
            weight="SemiBold"
            lineHeight={28}
          />
        </View>

        {showInput && (
          <Pressable
            style={{
              height: wp(36),
              borderRadius: wp(5),
              overflow: 'hidden',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: wp(8),
              marginTop: wp(8),
              gap: wp(8),
              borderWidth: 1,
              borderColor: '#E2E8F0',
            }}>
            <SearchIcon />
            <TextInput
              style={{
                flex: 1,
                ...generateTypography({size: 14, weight: 'Regular'}),
                color: 'black',
              }}
              placeholder="Search..."
              placeholderTextColor={'#CBD5E1'}
            />
          </Pressable>
        )}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          padding: wp(8),

          gap: wp(8),
        }}>
        <Pressable
          onPress={
            onPressBack ??
            (navigation?.canGoBack() ? navigation.goBack : undefined)
          }
          hitSlop={detectTouch}>
          <ArrowLeftIcon />
        </Pressable>
        <AppText text={title} size={18} weight="Bold" />
      </View>
    </>
  );
};

export default AppScreenHeader;

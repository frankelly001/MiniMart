import {
  ArrowLeftIcon,
  LogoIcon,
  NotificationIcon,
  SearchIcon,
} from '@/assets/svg';
import {AppText} from '@/components/common';
import {detectTouch} from '@/resources/config';
import {useNavigation} from '@react-navigation/native';
import React, {FunctionComponent} from 'react';
import {Pressable, TextInput, View} from 'react-native';
import {appHeaderStyle} from './styles';
import {AppHeaderProps} from './type';

const AppScreenHeader: FunctionComponent<AppHeaderProps> = ({
  onPressBack,
  search,
  title,
}) => {
  const navigation = useNavigation();

  const styles = appHeaderStyle();

  return (
    <>
      <View style={styles.container1}>
        <View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flexDirection: 'row',
          }}>
          <View style={styles.left}>
            <LogoIcon />
          </View>
          <View style={styles.middle}>
            <AppText
              text="DELIVERY ADDRESS"
              size={10}
              weight="SemiBold"
              align="center"
              lineHeight={28}
            />
          </View>
          <View style={styles.right}>
            <NotificationIcon />
          </View>
        </View>
        <View style={styles.container2}>
          <AppText
            text="Umuezike Road, Oyo State"
            size={12}
            weight="SemiBold"
            lineHeight={28}
          />
        </View>

        {search && (
          <Pressable style={styles.inputContainer}>
            <SearchIcon />
            <TextInput
              value={search.value}
              onChangeText={search.setValue}
              style={styles.input}
              placeholder="Search..."
              placeholderTextColor={'#CBD5E1'}
            />
          </Pressable>
        )}
      </View>
      <View style={styles.container3}>
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

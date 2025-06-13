/* eslint-disable react/no-unstable-nested-components */
import {CartIcon, HeartIcon, HomeIcon, PersonIcon} from '@/assets/svg';
import AppTabButton from '@/components/buttons/app-bottom-tab';
import {AppText} from '@/components/common';
import {CartScreen, HomeScreen} from '@/screens/bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FunctionComponent, useContext} from 'react';
import {View} from 'react-native';
import {routesNames} from '../routes';
import {bottomTabStyles} from './styles';
import {BottomTabParamList} from './type';
import {StoreContext} from '@/providers/store/context';

const {Navigator, Screen} = createBottomTabNavigator<BottomTabParamList>();

const BottomTab: FunctionComponent = () => {
  const styles = bottomTabStyles();
  return (
    <Navigator
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#60B5FF',
        tabBarInactiveTintColor: '#49454F',
      }}>
      <Screen
        name={routesNames.HOME}
        component={HomeScreen}
        options={{
          tabBarButton: props => (
            <AppTabButton
              label="Home"
              renderIcon={({isFocused}) => (
                <HomeIcon stroke={isFocused ? 'white' : 'black'} />
              )}
              {...props}
            />
          ),
        }}
      />
      <Screen
        name={routesNames.CART}
        component={CartScreen}
        options={{
          tabBarButton: props => (
            <AppTabButton
              label="Cart"
              renderIcon={({isFocused}) => (
                <View>
                  <CartIcon stroke={isFocused ? 'white' : 'black'} />
                  <CartTotalItem />
                </View>
              )}
              {...props}
            />
          ),
        }}
      />
      <Screen
        name={routesNames.FAVOURITES}
        component={View}
        options={{
          tabBarButton: props => (
            <AppTabButton
              label="Favorites"
              renderIcon={({isFocused}) => (
                <HeartIcon stroke={isFocused ? 'white' : 'black'} />
              )}
              {...props}
            />
          ),
        }}
      />
      <Screen
        name={routesNames.PROFILE}
        component={View}
        options={{
          tabBarButton: props => (
            <AppTabButton
              label="Profile"
              renderIcon={({isFocused}) => (
                <PersonIcon stroke={isFocused ? 'white' : 'black'} />
              )}
              {...props}
            />
          ),
        }}
      />
    </Navigator>
  );
};

export default BottomTab;

const CartTotalItem = () => {
  const styles = bottomTabStyles();
  const {cart} = useContext(StoreContext);
  const totalItems = cart.reduce((count, item) => count + item.quantity, 0);
  if (!totalItems) {
    return <></>;
  }
  return (
    <View style={styles.indicator}>
      <AppText
        text={totalItems}
        color="#ffffff"
        weight="Bold"
        size={10.22}
        lineHeight={17.04}
      />
    </View>
  );
};

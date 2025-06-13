/* eslint-disable react/no-unstable-nested-components */
import {CartIcon, HeartIcon, HomeIcon, PersonIcon} from '@/assets/svg';
import AppTabButton from '@/components/buttons/app-bottom-tab';
import {wp} from '@/resources/config';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FunctionComponent} from 'react';
import {View} from 'react-native';
import {routesNames} from '../routes';
import {BottomTabParamList} from './type';
import {CartScreen, HomeScreen} from '@/screens/bottom-tabs';

const {Navigator, Screen} = createBottomTabNavigator<BottomTabParamList>();

const BottomTab: FunctionComponent = () => {
  return (
    <Navigator
      screenOptions={{
        lazy: true,
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          // paddingHorizontal: wp(10),
          height: wp(82),
          paddingTop: wp(14),
        },
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
                <CartIcon stroke={isFocused ? 'white' : 'black'} />
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

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {navigationRef} from './rootNavigation';
import {routesNames} from './routes';
import {navigationTheme} from './theme';
import {RootStackParamList} from './types';
import BottomTab from './bottom-tab';
import {ProductDetailsScreen} from '@/screens/stack-screens';

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();

const MainNavigation = () => {
  return (
    <NavigationContainer theme={navigationTheme} ref={navigationRef}>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen
          name={routesNames.BOTTOM_TAB}
          component={BottomTab}
          options={{}}
        />
        <Screen
          name={routesNames.PRODUCT_DETAILS}
          component={ProductDetailsScreen}
          options={{}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;

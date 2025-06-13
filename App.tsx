/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import AppToast from '@/components/common/app-toast';
import MainNavigation from '@/navigation/index';
import StoreProvider from '@/providers/store/provider';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <StoreProvider>
        <SafeAreaProvider>
          <MainNavigation />
        </SafeAreaProvider>
        <AppToast />
      </StoreProvider>
    </GestureHandlerRootView>
  );
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import MainNavigation from '@/navigation/index';
import React from 'react';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    // eslint-disable-next-line react-native/no-inline-styles
    <GestureHandlerRootView style={{flex: 1}}>
      <SafeAreaProvider>
        <MainNavigation />
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default App;

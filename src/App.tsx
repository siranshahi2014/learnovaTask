/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  initialWindowMetrics,
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {store} from '~/features/store';
import AppNavigator from '~/navigation/AppNavigator';

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={{flex: 1}} initialMetrics={initialWindowMetrics}>
        <AppNavigator />
      </SafeAreaProvider>
    </Provider>
  );
}

export default App;

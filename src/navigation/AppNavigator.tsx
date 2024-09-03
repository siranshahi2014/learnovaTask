import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {navigationRef} from './methods';
import ArtistBottomTab from './main/MainStack';
import {ActivityIndicator} from 'react-native';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer ref={navigationRef} fallback={<ActivityIndicator />}>
      <Stack.Navigator detachInactiveScreens={true}>
        <Stack.Screen
          options={{headerShown: false}}
          name="FeedStack"
          component={ArtistBottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

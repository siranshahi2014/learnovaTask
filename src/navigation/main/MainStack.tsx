import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {HomeScreen} from '~/screens';
import {CustomTabBar} from '~/components';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export type MainStackParamList = {
  Home: undefined;
};

export const tabStack = [
  {
    name: 'Home',
    component: HomeScreen,
    options: {
      headerShown: false,
    },
  },
];

export default function ArtistBottomTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainTab"
        component={MainTab}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
const MainTab = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarShowLabel: false,
    }}
    tabBar={props => <CustomTabBar {...props} />}
    initialRouteName="feed">
    {tabStack.map(screen => (
      //@ts-ignore
      <Tab.Screen key={screen.name} {...screen} />
    ))}
  </Tab.Navigator>
);

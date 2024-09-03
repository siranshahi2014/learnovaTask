import React from 'react';
import {StyleSheet, View} from 'react-native';
import {scale} from 'react-native-size-matters';

import {TabBarButton} from '~/components';
import {Colors} from '~/styles/colors';
import {height} from '~/utils/dimension';

const CustomTabBar = ({
  state,
  descriptors,
  navigation,
}: {
  state: any;
  descriptors: any;
  navigation: any;
}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        {state.routes.map((route: any, index: string) => {
          const {options} = descriptors[route.key];
          const isFocused = state.index === index;
          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });
            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({name: route.name, merge: true});
            }
          };

          return (
            <TabBarButton
              key={index}
              isFocused={isFocused}
              options={options}
              onPress={onPress}
              name={route.name}
            />
          );
        })}
      </View>
    </View>
  );
};
export default CustomTabBar;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.white,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-start',
    backgroundColor: Colors.white,
    height: height * 0.07,
    elevation: 3,
    shadowColor: Colors.shadow,
    shadowOffset: [0, 2],
    shadowRadius: 9,
    shadowOpacity: 0.9,
    borderTopLeftRadius: scale(20),
    borderTopRightRadius: scale(20),
  },
});

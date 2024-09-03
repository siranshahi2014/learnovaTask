import React from 'react';
import {StyleSheet, ViewStyle, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {CustomLoading} from '~/components';
import {Colors} from '~/styles/colors';

type ContainerProps = {
  style?: ViewStyle;
  children: any;
  isLoading?: boolean;
  bgColor?: string;
};
const CustomContainer = ({
  style,
  children,
  isLoading = false,
  bgColor,
}: ContainerProps) => {
  return (
    <View
      style={[
        styles.safeArea,
        style,
        {
          backgroundColor: bgColor || Colors.white,
          paddingTop: useSafeAreaInsets().top,
        },
      ]}>
      <View
        style={[
          styles.safeArea,
          style,
          {
            backgroundColor: bgColor || Colors.white,
          },
        ]}>
        {isLoading && <CustomLoading />}
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  safeArea: {flex: 1},
});

export default CustomContainer;

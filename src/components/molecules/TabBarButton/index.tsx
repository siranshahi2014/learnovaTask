import React from 'react';
import {StyleSheet, View} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters';
import {TouchableOpacity} from 'react-native';
import {Colors} from '~/styles/colors';
import Icon from '~/assets/icon';

const TabBarButton = ({
  isFocused,
  options,
  onPress,
  name,
}: {
  isFocused: boolean;
  options: any;
  onPress: any;
  name: string;
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      accessibilityRole="button"
      accessibilityState={isFocused ? {selected: true} : {}}
      accessibilityLabel={options.tabBarAccessibilityLabel}
      testID={options.tabBarTestID}
      onPress={onPress}
      style={styles.container}>
      {name === 'Home' ? (
        isFocused ? (
          <Icon name="home-24" size={24} color={Colors.primary} />
        ) : (
          <Icon name="home-24" size={24} color={Colors.txtMedium} />
        )
      ) : null}
      {name === 'Add' ? (
        isFocused ? (
          <Icon name="add" size={24} color={Colors.primary} />
        ) : (
          <Icon name="add" size={24} color={Colors.txtMedium} />
        )
      ) : null}
      {name === 'Notification' ? (
        isFocused ? (
          <Icon name="notification" size={24} color={Colors.primary} />
        ) : (
          <Icon name="notification" size={24} color={Colors.txtMedium} />
        )
      ) : null}
      {name === 'Profile' ? (
        isFocused ? (
          <Icon name="user" size={24} color={Colors.primary} />
        ) : (
          <Icon name="user" size={24} color={Colors.txtMedium} />
        )
      ) : null}
      {isFocused ? (
        <View style={styles.dot}></View>
      ) : (
        <View style={styles.emptyLine} />
      )}
    </TouchableOpacity>
  );
};

export default TabBarButton;

const styles = StyleSheet.create({
  container: {
    padding: scale(10),
    paddingBottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  dot: {
    height: scale(3),
    width: scale(3),
    backgroundColor: Colors.primary,
    borderRadius: scale(4),
    marginTop: scale(4),
  },
  emptyLine: {
    height: verticalScale(4),
    marginTop: scale(8),
    width: scale(20),
  },
});

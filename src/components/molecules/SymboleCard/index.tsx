import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import {scale} from 'react-native-size-matters';
import {width} from '~/utils/dimension';

const SymboleCard = ({item}: {item: SymboleCard}) => {
  const anim = useSharedValue(0);

  const showStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(anim.value, [0, 1], [0, 180]);
    const style = {
      transform: [{rotateY: `${rotateY}deg`}],
    };
    return style;
  });

  const hideStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(anim.value, [0, 1], [180, 360]);
    const style = {
      transform: [{rotateY: `${rotateY}deg`}],
    };
    return style;
  });

  const handlePress = () => {
    item.isFlipped = !item.isFlipped;
    anim.value = withTiming(item.isFlipped ? 1 : 0, {
      duration: 1000,
    });
  };

  return (
    <TouchableOpacity
      key={item.id}
      style={styles.container}
      onPress={handlePress}
      activeOpacity={0.7}>
      <View style={styles.innerContainer}>
        <Animated.View style={[styles.item, showStyle]}>
          <Text>Details</Text>
        </Animated.View>
        <Animated.View style={[styles.item, styles.hide, hideStyle]}>
          <Text>{item.symbol}</Text>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
};

export default SymboleCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 100,
    margin: 10,
    width: scale(width / 2 - 50),
  },
  innerContainer: {
    flex: 1,
    position: 'relative',
  },
  item: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  hide: {
    backgroundColor: 'lightgray',
  },
});

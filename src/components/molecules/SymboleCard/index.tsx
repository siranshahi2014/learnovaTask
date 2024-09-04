import React, {useEffect, useRef} from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {scale} from 'react-native-size-matters';
import {width} from '~/utils/dimension';

const SymboleCard = ({
  item,
  onPress,
}: {
  item: SymboleCard;
  onPress: () => void;
}) => {
  const flipAnim = useRef(new Animated.Value(0)).current;

  const getStyle = (flipAnim, front = true) => {
    const rotation = front
      ? flipAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['0deg', '180deg'],
        })
      : flipAnim.interpolate({
          inputRange: [0, 1],
          outputRange: ['180deg', '360deg'],
        });

    return {
      transform: [{rotateY: rotation}],
    };
  };

  const frontStyle = getStyle(flipAnim, true);
  const backStyle = getStyle(flipAnim, false);

  useEffect(() => {
    const flipToValue = item.isFlipped ? 0 : 1;

    Animated.timing(flipAnim, {
      toValue: flipToValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [item.isFlipped]);

  return (
    <TouchableOpacity
      key={item.id}
      style={{flex: 1}}
      onPress={onPress}
      disabled={item.isFlipped || item.isMatched}
      activeOpacity={0.7}>
      <View style={styles.container}>
        <Animated.View style={[styles.front, backStyle]}>
          <Text>Details</Text>
        </Animated.View>

        <Animated.View style={[styles.front, styles.back, frontStyle]}>
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
  front: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backfaceVisibility: 'hidden',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
  },
  back: {
    backgroundColor: 'lightgray',
    position: 'absolute',
  },
});

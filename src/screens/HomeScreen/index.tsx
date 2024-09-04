import React, {useEffect, useMemo} from 'react';
import {Button, FlatList, StyleSheet, Text, View} from 'react-native';
import {scale} from 'react-native-size-matters';
import {CustomContainer, SymboleCard} from '~/components';
import {useAppDispatch} from '~/features/hooks';
import {
  symboleApi,
  useGetSymbolsQuery,
} from '~/features/services/symbolRtkService';
import {
  incrementTime,
  resetGame,
  setCards,
  setDifficulty,
  setGameOver,
} from '~/features/symboleSlice';
import {useMemoryGame} from '~/hooks/game';
import {Colors} from '~/styles/colors';

const HomeScreen = () => {
  const {isLoading} = useGetSymbolsQuery();
  const {cards, moves, time, isGameOver, handleCardFlip, difficulty} =
    useMemoryGame();
  const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (data) {
  //     const concatList = data.concat(data);
  //     const randomList = concatList.sort(() => Math.random() - 0.5);

  //     const result = randomList.map((item, index) => ({
  //       id: index,
  //       symbol: item.symbol,
  //       isFlipped: false,
  //       isMatched: false,
  //     }));
  //     dispatch(setCards(result));
  //   }
  // }, [data, dispatch]);

  useEffect(() => {
    if (cards.length && cards.every(card => card.isMatched)) {
      dispatch(setGameOver());
    }
  }, [cards, dispatch]);

  useEffect(() => {
    if (!isGameOver) {
      const timer = setInterval(() => {
        dispatch(incrementTime());
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [dispatch, isGameOver]);

  const onRestartGame = () => {
    dispatch(resetGame());
    dispatch(symboleApi.util.resetApiState());
  };

  const onDifficultyChange = (level: 'easy' | 'medium' | 'hard') => {
    dispatch(setDifficulty(level));
    onRestartGame();
  };

  const renderItem = ({item}: {item: SymboleCard}) => {
    return <SymboleCard item={item} onPress={() => handleCardFlip(item.id)} />;
  };

  return (
    <CustomContainer bgColor={Colors.disabled} isLoading={isLoading}>
      <Text style={styles.title}>Memory Game</Text>
      <Text style={styles.info}>
        Moves: {moves} | Time: {time}s
      </Text>

      <Text style={styles.info}>Game Screen - {difficulty.toUpperCase()}</Text>
      <View style={styles.difficultyButtons}>
        <Button title="Easy" onPress={() => onDifficultyChange('easy')} />
        <Button title="Medium" onPress={() => onDifficultyChange('medium')} />
        <Button title="Hard" onPress={() => onDifficultyChange('hard')} />
      </View>

      <FlatList
        data={cards}
        extraData={cards}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
      {isGameOver && (
        <View style={{marginTop: scale(16)}}>
          <Text style={styles.info}>You won!</Text>
          <Button title="Restart" onPress={onRestartGame} />
        </View>
      )}
    </CustomContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  info: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 16,
  },
  difficultyButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
});

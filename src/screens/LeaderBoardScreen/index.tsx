import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CustomContainer} from '~/components';
import {useAppSelector} from '~/features/hooks';
import {LeaderboardItem, selectLeaderBoard} from '~/features/leaderboardSlice';
import {Colors} from '~/styles/colors';

const LeaderBoardScreen = () => {
  const boardList = useAppSelector(selectLeaderBoard);

  const renderItem = ({item}: {item: LeaderboardItem}) => (
    <View style={styles.item}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.score}>{item.score}</Text>
    </View>
  );

  return (
    <CustomContainer bgColor={Colors.disabled}>
      <Text style={styles.title}>Leader board</Text>
      <FlatList
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        data={boardList.items}
        extraData={boardList}
        renderItem={renderItem}
        keyExtractor={item => item.id?.toString()}
      />
    </CustomContainer>
  );
};

export default LeaderBoardScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  name: {
    fontSize: 18,
  },
  score: {
    fontSize: 18,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
  },
});

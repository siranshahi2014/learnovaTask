import React, {useEffect, useMemo, useState} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {CustomContainer} from '~/components';
import {useGetSymbolsQuery} from '~/features/services/symbolRtkService';
import {Colors} from '~/styles/colors';
import {height} from '~/utils/dimension';

const HomeScreen = () => {
  const {data, isLoading} = useGetSymbolsQuery();

  const renderItem = ({item, index}: {item: any; index: number}) => {
    //const itemHeight = height / (data?.length / 2) - 20;
    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.card, {}]}
        onPress={() => {}}>
        <Text>{item.symbol}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <CustomContainer isLoading={isLoading} bgColor={Colors.disabled}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </CustomContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 100,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.borderColor,
  },
});

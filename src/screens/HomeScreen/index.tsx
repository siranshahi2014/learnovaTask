import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useGetSymbolsQuery} from '~/features/services/symbolRtkService';

const HomeScreen = () => {
  const {data, isLoading} = useGetSymbolsQuery();

  console.log(data);
  return <View></View>;
};

export default HomeScreen;

const styles = StyleSheet.create({});

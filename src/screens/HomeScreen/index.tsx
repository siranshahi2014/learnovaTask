import React, {useEffect, useMemo, useState} from 'react';
import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {CustomContainer, SymboleCard} from '~/components';
import {useGetSymbolsQuery} from '~/features/services/symbolRtkService';
import {Colors} from '~/styles/colors';
import {height} from '~/utils/dimension';

const HomeScreen = () => {
  const {data, isLoading} = useGetSymbolsQuery();
  const [selectedList, setSelectedList] = useState<number[]>([]);

  const symboleList = useMemo<SymboleCard[]>(() => {
    if (!data) return [];
    const concatList = data.concat(data);
    const randomList = concatList.sort(() => Math.random() - 0.5);

    const result = randomList.map((item, index) => ({
      id: index,
      symbol: item.symbol,
      flipped: false,
      matched: false,
    }));
    return result;
  }, [data]);

  const renderItem = ({item, index}: {item: SymboleCard; index: number}) => {
    //const itemHeight = height / (data?.length / 2) - 20;
    return <SymboleCard item={item} />;
  };

  return (
    <CustomContainer isLoading={isLoading} bgColor={Colors.disabled}>
      <FlatList
        data={symboleList}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
      />
    </CustomContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

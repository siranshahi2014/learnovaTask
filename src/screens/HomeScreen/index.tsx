import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {CustomContainer} from '~/components';
import {useGetSymbolsQuery} from '~/features/services/symbolRtkService';
import {Colors} from '~/styles/colors';

const HomeScreen = () => {
  const {data, isLoading} = useGetSymbolsQuery();

  const renderItem = ({item}: {item: any}) => {
    console.log(item);
    return (
      <Text style={{fontSize: 24, color: 'red', borderWidth: 1}}>
        {item.symbol}
      </Text>
    );
  };

  return (
    <CustomContainer isLoading={isLoading} bgColor={Colors.disabled}>
      <View style={{flex: 1, borderWidth: 1}}>
        <FlatList
          style={{flex: 1, borderWidth: 1}}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </CustomContainer>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});

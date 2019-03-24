import React from 'react';
import { FlatList, StatusBar, Text, View } from 'react-native';
import currencies from '../data/currencies';
import { ListItem, Seprator } from '../components/List';

const TEMP_CURRENT_CURRENCY = 'CAD';
const CurrencyList = () => {
  handlePress = () => {
    console.log('currency is pressed');
  };
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="default" translucent={false} />
      <FlatList
        data={currencies}
        renderItem={({ item }) => <ListItem text={item} selected={item === TEMP_CURRENT_CURRENCY} onPress={this.handlePress} checkmark={true} visible={true} />}
        keyExtractor={item => item}
        ItemSeparatorComponent={Seprator}
      />
    </View>
  );
};

export default CurrencyList;

import PropTypes from 'prop-types';
import { FlatList, StatusBar, View } from 'react-native';
import { ListItem, Seprator } from '../components/List';
import currencies from '../data/currencies';
import React { Component} from 'react';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends Component {
  static propsType = {
    navigation: PropTypes.object
  };

  handlePress = () => {
    // console.log('currency is pressed');
    this.props.navigation.goBack(null);
  };
  render() {
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
  }
}

export default CurrencyList;

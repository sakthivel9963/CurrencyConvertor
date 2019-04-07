import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { FlatList, StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { changeBaseCurrency, changeQuoteCurrency } from '../actions/currencies';
import { ListItem, Seprator } from '../components/List';
import currencies from '../data/currencies';

class CurrencyList extends Component {
  static propsType = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    primaryColor: PropTypes.string
  };

  handlePress = currency => {
    const { type } = this.props.navigation.state.params;
    if (type === 'base') {
      this.props.dispatch(changeBaseCurrency(currency));
    } else if (type === 'quote') {
      this.props.dispatch(changeQuoteCurrency(currency));
    }
    this.props.navigation.goBack(null);
  };
  render() {
    const { type } = this.props.navigation.state.params;
    let selectedCurrency = this.props.baseCurrency;
    if (type === 'quote') {
      selectedCurrency = this.props.quoteCurrency;
    }
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="default" translucent={false} />
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem text={item} selected={item === selectedCurrency} onPress={() => this.handlePress(item)} checkmark={true} visible={true} iconBackground={this.props.primaryColor} />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Seprator}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const primaryColor = state.theme.primaryColor;

  return {
    baseCurrency,
    quoteCurrency,
    primaryColor
  };
};

export default connect(mapStateToProps)(CurrencyList);

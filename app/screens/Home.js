import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { changeCurrencyAmount, swapCurrency } from '../actions/currencies';
import { ClearButton } from '../components/Buttons';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { LastConverted } from '../components/Text';
import { InputWithButton } from '../components/TextInput';
class Home extends Component {
  static propsType = {
    navigation: PropTypes.object,
    dispathc: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    lastConversionDate: PropTypes.object
  };

  handleBaseCurrency = () => {
    // console.log('BaseCurrencyPressed');
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency' });
  };

  handleQuoteCurrency = () => {
    // console.log('QuoteCurrencyPressed');
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency' });
  };

  handleKeyPress = amount => {
    this.props.dispatch(changeCurrencyAmount(amount));
  };

  handleReverseCurrency = () => {
    this.props.dispatch(swapCurrency());
  };

  handleOptionPress = () => {
    // console.log('Option is pressed');
    this.props.navigation.navigate('Options');
  };

  render() {
    let quotePrice = (this.props.amount * this.props.conversionRate).toFixed(2);
    if (this.props.isFetching) {
      quotePrice = '...';
    }
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            defaultValue={this.props.amount.toString()}
            onPress={this.handleBaseCurrency}
            keyboardType="numeric"
            onChangeText={this.handleKeyPress}
          />
          <InputWithButton buttonText={this.props.quoteCurrency} value={quotePrice} onPress={this.handleQuoteCurrency} editable={false} />
          <LastConverted base={this.props.baseCurrency} quote={this.props.quoteCurrency} date={this.props.lastConversionDate} conversionRate={this.props.conversionRate} />
          <ClearButton text="Reverse Currency" onPress={this.handleReverseCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  const baseCurrency = state.currencies.baseCurrency;
  const quoteCurrency = state.currencies.quoteCurrency;
  const amount = state.currencies.amount;
  const conversionSelector = state.currencies.conversions[baseCurrency] || {};
  const rates = conversionSelector.rates || {};
  const isFetching = conversionSelector.isFetching;
  const conversionRate = rates[quoteCurrency] || 0;
  const lastConversionDate = conversionSelector.date ? new Date(conversionSelector.date) : new Date();

  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate,
    isFetching,
    lastConversionDate
  };
};

export default connect(mapStateToProps)(Home);

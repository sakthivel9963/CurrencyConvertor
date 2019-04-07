import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { changeCurrencyAmount, swapCurrency, getInitialConversion } from '../actions/currencies';
import { ClearButton } from '../components/Buttons';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { LastConverted } from '../components/Text';
import { InputWithButton } from '../components/TextInput';
import { connectAlert } from '../components/Alert/index';

class Home extends Component {
  static propsType = {
    navigation: PropTypes.object,
    dispathc: PropTypes.func,
    baseCurrency: PropTypes.string,
    quoteCurrency: PropTypes.string,
    amount: PropTypes.number,
    conversionRate: PropTypes.number,
    isFetching: PropTypes.bool,
    lastConversionDate: PropTypes.object,
    primaryColor: PropTypes.string,
    alertWithType: PropTypes.func,
    currencyError: PropTypes.string
  };

  componentWillMount() {
    this.props.dispatch(getInitialConversion());
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.currencyError && nextProps.currencyError !== this.props.currencyError) {
      this.props.alertWithType('error', 'ERROR', nextProps.currencyError);
    }
  }

  handleBaseCurrency = () => {
    // console.log('BaseCurrencyPressed');
    this.props.navigation.navigate('CurrencyList', { title: 'Base Currency', type: 'base' });
  };

  handleQuoteCurrency = () => {
    // console.log('QuoteCurrencyPressed');
    this.props.navigation.navigate('CurrencyList', { title: 'Quote Currency', type: 'quote' });
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
      <Container backgroundColor={this.props.primaryColor}>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo tintColor={this.props.primaryColor} />
          <InputWithButton
            buttonText={this.props.baseCurrency}
            defaultValue={this.props.amount.toString()}
            onPress={this.handleBaseCurrency}
            keyboardType="numeric"
            onChangeText={this.handleKeyPress}
            textColor={this.props.primaryColor}
          />
          <InputWithButton buttonText={this.props.quoteCurrency} value={quotePrice} onPress={this.handleQuoteCurrency} editable={false} textColor={this.props.primaryColor} />
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
  const primaryColor = state.theme.primaryColor;
  const currencyError = state.currencies.error;

  return {
    baseCurrency,
    quoteCurrency,
    amount,
    conversionRate,
    isFetching,
    lastConversionDate,
    primaryColor,
    currencyError
  };
};

export default connect(mapStateToProps)(connectAlert(Home));

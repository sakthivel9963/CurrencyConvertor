import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { KeyboardAvoidingView, StatusBar } from 'react-native';
import { ClearButton } from '../components/Buttons';
import { Container } from '../components/Container';
import { Header } from '../components/Header';
import { Logo } from '../components/Logo';
import { LastConverted } from '../components/Text';
import { InputWithButton } from '../components/TextInput';
import { swapCurrency, changeCurrencyAmount } from '../actions/currencies';
import { connect } from 'react-redux';

const TEMP_BASE_CURRENCY = 'USD';
const TEMP_QUOTE_CURRENCY = 'GBP';
const TEMP_BASE_PRICE = '100';
const TEMP_QUOTE_PRICE = '79.94';
const TEMP_COVERSION_RATE = 0.789;
const TEMP_CONVERSION_DATE = new Date();
class Home extends Component {
  static propsType = {
    navigation: PropTypes.object,
    dispathc: PropTypes.func
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
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Header onPress={this.handleOptionPress} />
        <KeyboardAvoidingView behavior="padding">
          <Logo />
          <InputWithButton buttonText={TEMP_BASE_CURRENCY} defaultValue={TEMP_BASE_PRICE} onPress={this.handleBaseCurrency} keyboardType="numeric" onChangeText={this.handleKeyPress} />
          <InputWithButton buttonText={TEMP_QUOTE_CURRENCY} value={TEMP_QUOTE_PRICE} onPress={this.handleQuoteCurrency} editable={false} />
          <LastConverted base={TEMP_BASE_CURRENCY} quote={TEMP_QUOTE_CURRENCY} date={TEMP_CONVERSION_DATE} conversionRate={TEMP_COVERSION_RATE} />
          <ClearButton text="Reverse Currency" onPress={this.handleReverseCurrency} />
        </KeyboardAvoidingView>
      </Container>
    );
  }
}

export default connect()(Home);

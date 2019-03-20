import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { Container } from '../components/Container';
import { Logo } from '../components/Logo';
import { InputWithButton } from '../components/TextInput';

// Return a funciton using two method
// First Method
// const Home = () => {
//   return (
//     <Container>
//       <Text>Sakthivel</Text>
//     </Container>
//   );
// };

// Second Method
// const Home = () => (
//   <Container>
//     <StatusBar translucent={false} barStyle="light-content" />
//     <Logo />
//   </Container>
// );

const TEMP_BASE_CURRENCY = 'INR';
const TEMP_QUOTE_CURRENCY = 'AMR';
const TEMP_BASE_PRICE = '78';
const TEMP_QUOTE_PRICE = '1';
class Home extends Component {
  handleBaseCurrency = () => {
    console.log('BaseCurrencyPressed');
  };

  handleQuoteCurrency = () => {
    console.log('QuoteCurrencyPressed');
  };

  handleKeyPress = text => {
    console.log('key pressed', text);
  };

  render() {
    return (
      <Container>
        <StatusBar translucent={false} barStyle="light-content" />
        <Logo />
        <InputWithButton buttonText={TEMP_BASE_CURRENCY} defaultValue={TEMP_BASE_PRICE} onPress={this.handleBaseCurrency} keyboardType="numeric" onChange={this.handleKeyPress} />
        <InputWithButton buttonText={TEMP_QUOTE_CURRENCY} value={TEMP_QUOTE_PRICE} onPress={this.handleQuoteCurrency} editable={false} />
      </Container>
    );
  }
}

export default Home;

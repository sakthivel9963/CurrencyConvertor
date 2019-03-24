import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';
import CurrencyList from './screens/CurrencyList';
import Options from './screens/Options';
import Themes from './screens/Themes';

EStyleSheet.build({
  $primaryColor: '#1565C0',
  $primaryOrangeColor: '#d57a66',
  $primaryGreenColor: '#00bd9d',
  $primaryPurpleColor: '#96768f',
  $whiteColor: '#ffffff',
  $borderColor: '#e2e2e2',
  $inputColor: '#2a675f',
  $lightGrayColor: '#d3d3d3',
  $darkTextColor: '#343434'

  // $outline: 1  // To show outline of all the components
});

export default () => <Themes />;

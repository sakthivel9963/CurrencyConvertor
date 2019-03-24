import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryColor: '#1565C0',
  $whiteColor: '#ffffff',
  $borderColor: '#55697a',
  $inputColor: '#2a675f',
  $lightGrayColor: '#d3d3d3'

  // $outline: 1  // To show outline of all the components
});

export default () => <Home />;

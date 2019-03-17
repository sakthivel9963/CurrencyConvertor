import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryColor: '#1565C0',
  $whiteColor: '#ffffff'
});

export default () => <Home />;

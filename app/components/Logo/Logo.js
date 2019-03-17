import React from 'react';
import { Image, ImageBackground, Text, View } from 'react-native';
import styles from './styles';

const Logo = () => (
  <View style={styles.continer}>
    <ImageBackground resizeMode="contain" style={styles.continerImage} source={require('./images/background.png')}>
      <Image resizeMode="contain" style={styles.image} source={require('./images/logo.png')} />
    </ImageBackground>
    <Text style={styles.text}>Currency Converter</Text>
  </View>
);

export default Logo;

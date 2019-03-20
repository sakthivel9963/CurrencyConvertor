import PropTypes from 'prop-types';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const ClearButton = ({ onPress, text }) => (
  <TouchableOpacity style={styles.continer} onPress={onPress}>
    <View style={styles.wrapper}>
      <Image style={styles.icon} source={require('./images/icon.png')} resizeMode="contain" />
      <Text style={styles.text}>{text}</Text>
    </View>
  </TouchableOpacity>
);

ClearButton.propsType = {
  onPress: PropTypes.func,
  text: PropTypes.string
};

export default ClearButton;

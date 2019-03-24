import PropTypes from 'prop-types';
import React from 'react';
import { Image, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Header = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Image source={require('./images/gear.png')} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

Header.propTypes = {
  onPress: PropTypes.func
};

export default Header;

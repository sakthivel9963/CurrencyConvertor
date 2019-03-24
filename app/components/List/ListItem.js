import PropTypes from 'prop-types';
import React from 'react';
import { Text, TouchableHighlight, View } from 'react-native';
import styles from './styles';

import Icon from './Icon';

const ListItem = ({ text, selected = false, onPress, checkmark = true, visible = true }) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor={styles.$underlayColor}>
      <View style={styles.row}>
        <Text style={styles.text}>{text}</Text>
        {selected ? <Icon checkmark={checkmark} visible={visible} /> : <Icon />}
      </View>
    </TouchableHighlight>
  );
};

ListItem.propType = {
  text: PropTypes.string,
  onPress: PropTypes.func,
  selected: PropTypes.bool,
  checkmark: PropTypes.bool,
  visible: PropTypes.bool
};

export default ListItem;

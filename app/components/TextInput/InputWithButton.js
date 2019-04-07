import color from 'color';
import PropTypes from 'prop-types';
import React from 'react';
import { Text, TextInput, TouchableHighlight, View } from 'react-native';
import styles from './styles';

const InputWithButton = props => {
  const { buttonText, editable = true, onPress } = props;

  const underlayColor = color(styles.$buttonBackgroundColorBase).darken(styles.$buttonBackgroundColorModifier);

  const containerStyles = [styles.container];
  if (editable == false) {
    containerStyles.push(styles.containerDisabled);
  }

  const buttonStyle = [styles.buttonText];
  if (props.textColor) {
    buttonStyle.push({ color: props.textColor });
  }

  return (
    <View style={containerStyles}>
      <TouchableHighlight underlayColor={underlayColor} style={styles.buttonContainer} onPress={onPress}>
        <Text style={buttonStyle}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput style={styles.textInput} underlineColorAndroid="transparent" {...props} />
    </View>
  );
};

InputWithButton.propTypes = {
  buttonText: PropTypes.string,
  editable: PropTypes.bool,
  onPress: PropTypes.func
};

export default InputWithButton;

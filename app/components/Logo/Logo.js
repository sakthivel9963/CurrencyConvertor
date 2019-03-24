import React, { Component } from 'react';
import { Animated, ImageBackground, Keyboard, Text, View, Platform } from 'react-native';
import styles from './styles';

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);

    this.containerImageWidth = new Animated.Value(styles.$largeContainerSize);
    this.imageWidth = new Animated.Value(styles.$largeImageSize);
  }

  componentDidMount() {
    let showListener = 'keyboardWillShow';
    let hideListener = 'keyboardWillHide';
    if ((Platform.OS = 'android')) {
      showListener = 'keyboardDidShow';
      hideListener = 'keyboardDidHide';
    }
    this.keyboardShowListener = Keyboard.addListener(showListener, this.keyboardShow);
    this.keyboardHideListener = Keyboard.addListener(hideListener, this.keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    Animated.parallel([
      // Animated.timing(this.containerImageWidth, {
      //   toValue: styles.$smallContainerSize,
      //   duration: ANIMATION_DURATION
      // }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };

  keyboardHide = () => {
    Animated.parallel([
      // Animated.timing(this.containerImageWidth, {
      //   toValue: styles.$largeContainerSize,
      //   duration: ANIMATION_DURATION
      // }),
      Animated.timing(this.imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };

  render() {
    let containerImageWidht = [styles.containerImage, { width: this.containerImageWidth, height: this.containerImageWidth }];

    let imageStyle = [styles.image, { width: this.imageWidth }];

    return (
      <View style={styles.continer}>
        <ImageBackground resizeMode="contain" style={containerImageWidht} source={require('./images/background.png')}>
          <Animated.Image resizeMode="contain" style={imageStyle} source={require('./images/logo.png')} />
        </ImageBackground>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;

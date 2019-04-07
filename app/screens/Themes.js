import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import { connect } from 'react-redux';
import { changePrimaryColor } from '../actions/theme';
import { ListItem, Seprator } from '../components/List/index';

const styles = EStyleSheet.create({
  $blue: '$primaryColor',
  $ornage: '$primaryOrangeColor',
  $green: '$primaryGreenColor',
  $purple: '$primaryPurpleColor'
});

class Themes extends Component {
  static propsType = {
    navigation: PropTypes.object,
    dispatch: PropTypes.func
  };

  handleThemePress = color => {
    console.log('theme pressed' + color);
    this.props.dispatch(changePrimaryColor(color));
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem text="Blue" onPress={() => this.handleThemePress(styles.$blue)} selected checkmark={false} iconBackground={styles.$blue} />
        <Seprator />
        <ListItem text="Orange" onPress={() => this.handleThemePress(styles.$ornage)} selected checkmark={false} iconBackground={styles.$ornage} />
        <Seprator />
        <Seprator />
        <ListItem text="Green" onPress={() => this.handleThemePress(styles.$green)} selected checkmark={false} iconBackground={styles.$green} />
        <Seprator />
        <Seprator />
        <ListItem text="Purple" onPress={() => this.handleThemePress(styles.$purple)} selected checkmark={false} iconBackground={styles.$purple} />
        <Seprator />
      </ScrollView>
    );
  }
}

export default connect()(Themes);

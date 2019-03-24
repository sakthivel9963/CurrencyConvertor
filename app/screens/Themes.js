import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { ListItem, Seprator } from '../components/List/index';
import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  $blue: '$primaryColor',
  $ornage: '$primaryOrangeColor',
  $green: '$primaryGreenColor',
  $purple: '$primaryPurpleColor'
});

export default class Themes extends Component {
  handleThemePress = color => {
    console.log('theme pressed' + color);
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

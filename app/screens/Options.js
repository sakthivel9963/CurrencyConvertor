import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Platform, ScrollView, StatusBar, Linking } from 'react-native';
import { ListItem, Seprator } from '../components/List';
import { connectAlert } from '../components/Alert';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

class Options extends Component {
  static propsType = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func
  };

  handleThemePress = () => {
    this.props.navigation.navigate('Themes');
  };

  handleSitePress = () => {
    console.log('site pressed');
    Linking.openURL('https://fixer.io/').catch(() => {
      this.props.alertWithType('error', 'Sorry!', "fixer.io can't be access now");
    });
  };

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem text="Themes" onPress={this.handleThemePress} customIcon={<Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE} />} />
        <Seprator />
        <ListItem text="Fixer.io" onPress={this.handleSitePress} customIcon={<Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE} />} />
        <Seprator />
      </ScrollView>
    );
  }
}

export default connectAlert(Options);

import { Ionicons } from '@expo/vector-icons';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Platform, ScrollView, StatusBar } from 'react-native';
import { ListItem, Seprator } from '../components/List/index';

const ICON_COLOR = '#868686';
const ICON_SIZE = 23;
const ICON_PREFIX = Platform.OS === 'ios' ? 'ios' : 'md';

export default class Options extends Component {
  static propsType = {
    navigation: PropTypes.object
  };

  handleThemePress = () => {
    this.props.navigation.navigate('Themes');
  };

  handleSitePress = () => {
    console.log('site pressed');
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

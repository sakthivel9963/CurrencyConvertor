import moment from 'moment';
import PropTypes from 'prop-types';
import React from 'react';
import { Text } from 'react-native';
import styles from './styles';

const LastConverted = ({ date, base, quote, conversionRate }) => (
  <Text style={styles.smallText}>
    1 {base} = {conversionRate} {quote} as {moment(date).format('MMMM D, YYYY')}
  </Text>
);

LastConverted.propsType = {
  date: PropTypes.object,
  base: PropTypes.string,
  quote: PropTypes.string,
  conversionRate: PropTypes.number
};

export default LastConverted;

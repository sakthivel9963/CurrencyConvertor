import { createStackNavigator } from 'react-navigation';
import { StatusBar } from 'react-native';
import CurrencyList from '../screens/CurrencyList';
import Home from '../screens/Home';

export default createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        header: () => null
      }
    },
    CurrencyList: {
      screen: CurrencyList,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title
      })
    }
  },
  {
    mode: 'modal',
    cardStyle: { paddingTop: StatusBar.currentHeight }
  }
);

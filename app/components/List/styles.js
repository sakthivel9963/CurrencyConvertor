import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

export default EStyleSheet.create({
  $underLayColor: '$borderColor',
  row: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '$whiteColor'
  },
  text: {
    fontSize: 16,
    color: '$darkTextColor'
  },
  seprator: {
    marginLeft: 20,
    backgroundColor: '$borderColor',
    flex: 1,
    height: StyleSheet.hairlineWidth
  },
  icon: {
    backgroundColor: 'transparent',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  iconVisible: {
    backgroundColor: '$primaryColor'
  },
  checkIcon: {
    width: 18
  }
});

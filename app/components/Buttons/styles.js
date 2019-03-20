import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  continer: {
    alignItems: 'center'
  },
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    width: 19,
    marginRight: 11
  },
  text: {
    color: '$whiteColor',
    fontWeight: '600',
    fontSize: 16,
    paddingVertical: 20
  }
});

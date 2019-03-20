import { StyleSheet } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 44;
const BORDER_RADIUS = 10;

export default EStyleSheet.create({
  $buttonBackgroundColorBase: '$whiteColor',
  $buttonBackgroundColorModifier: 0.1,
  container: {
    backgroundColor: '$whiteColor',
    flexDirection: 'row',
    width: '90%',
    height: INPUT_HEIGHT,
    marginVertical: 11,
    alignItems: 'center',
    borderRadius: BORDER_RADIUS
  },
  containerDisabled: {
    backgroundColor: '$lightGrayColor'
  },
  buttonContainer: {
    height: INPUT_HEIGHT,
    backgroundColor: '$whiteColor',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: BORDER_RADIUS,
    borderBottomLeftRadius: BORDER_RADIUS
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    paddingHorizontal: 16,
    color: '$primaryColor'
  },
  border: {
    height: INPUT_HEIGHT,
    width: StyleSheet.hairlineWidth,
    backgroundColor: '$borderColor'
  },
  textInput: {
    height: INPUT_HEIGHT,
    fontSize: 18,
    color: '$inputColor',
    flex: 1,
    paddingHorizontal: 8
  }
});

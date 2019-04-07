import { CHANGE_PRIMARY_COLOR } from '../actions/theme';

const initialState = {
  primaryColor: '#1565C0'
};

const theme = (state = initialState, actions) => {
  switch (actions.type) {
    case CHANGE_PRIMARY_COLOR:
      return {
        ...state,
        primaryColor: actions.color
      };
    default:
      return {
        state
      };
  }
};

export default theme;

import { CHANGE_CURRENCY_AMOUNT, SWAP_CURRENCY, CHANGE_BASE_CURRENCY, CHANGE_QUOTE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_RESULT, CONVERSION_ERROR } from '../actions/currencies';

const initialState = {
  baseCurrency: 'USD',
  quoteCurrency: 'GBP',
  amount: 100,
  conversions: {},
  error: null
};

// const initialState = {
//   baseCurrency: 'USD',
//   quoteCurrency: 'GBP',
//   amount: 100,
//   conversions: {
//     USD: {
//       isFetching: false,
//       base: 'USD',
//       date: '2019-03-31',
//       rates: {
//         AUD: 1.3416,
//         BGN: 1.743,
//         BRL: 3.2515,
//         CAD: 1.3464,
//         CHF: 0.97104,
//         CNY: 6.813,
//         CZK: 23.547,
//         DKK: 6.6302,
//         GBP: 0.77858,
//         HKD: 7.7908,
//         HRK: 6.6068,
//         HUF: 273.77,
//         IDR: 13308,
//         ILS: 3.5431,
//         INR: 64.463,
//         JPY: 110.86,
//         KRW: 1118.4,
//         MXN: 18.765,
//         MYR: 4.281,
//         NOK: 8.4117,
//         NZD: 1.4071,
//         PHP: 49.77,
//         PLN: 3.7173,
//         RON: 4.0687,
//         RUB: 56.774,
//         SEK: 8.6942,
//         SGD: 1.3829,
//         THB: 34.07,
//         TRY: 3.5366,
//         ZAR: 13.133,
//         EUR: 0.89119
//       }
//     }
//   }
// };

const setConversion = (state, actions) => {
  let conversion = {
    isFetching: true,
    date: '',
    rates: {}
  };

  if (state.conversions[actions.currency]) {
    conversion = state.conversions[actions.currency];
  }

  return {
    ...state.conversions,
    [actions.currency]: conversion
  };
};

const reducer = (state = initialState, actions) => {
  switch (actions.type) {
    case CHANGE_CURRENCY_AMOUNT:
      return {
        ...state,
        amount: actions.amount || 0
      };
    case SWAP_CURRENCY:
      return {
        ...state,
        baseCurrency: state.quoteCurrency,
        quoteCurrency: state.baseCurrency
      };
    case CHANGE_BASE_CURRENCY:
      return {
        ...state,
        baseCurrency: actions.currency,
        conversions: setConversion(state, actions)
      };
    case CHANGE_QUOTE_CURRENCY:
      return {
        ...state,
        quoteCurrency: actions.currency,
        conversions: setConversion(state, actions)
      };
    case GET_INITIAL_CONVERSION:
      return {
        ...state,
        conversions: setConversion(state, { currency: state.baseCurrency })
      };
    case CONVERSION_RESULT:
      return {
        ...state,
        baseCurrency: actions.result.base,
        conversions: {
          ...state.conversions,
          [actions.result.base]: {
            isFetching: false,
            ...actions.result
          }
        }
      };
    case CONVERSION_ERROR:
      return {
        ...state,
        error: actions.error
      };
    default:
      return state;
  }
};

export default reducer;

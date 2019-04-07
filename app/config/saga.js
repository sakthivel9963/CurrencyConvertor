import { takeEvery, select, call, put } from 'redux-saga/effects';
/**
 * 1. swap currency
 * 2. change base currency
 * 3. on initial load of the applicaiton
 */

import { SWAP_CURRENCY, CHANGE_BASE_CURRENCY, GET_INITIAL_CONVERSION, CONVERSION_RESULT, CONVERSION_ERROR } from '../actions/currencies';

const getLatestRate = curreny => {
  return fetch(`https://fixer.handlebarlabs.com/latest?base=${curreny}`);
};

function* fetchLatestConversionRate(action) {
  try {
    let currency = action.currency;
    if (currency == undefined) {
      currency = yield select(state => state.currencies.baseCurrency);
    }
    const response = yield call(getLatestRate, currency);
    const result = yield response.json();

    if (result.error) {
      yield put({ type: CONVERSION_ERROR, error: result.error });
    } else {
      yield put({ type: CONVERSION_RESULT, result });
    }
  } catch (error) {
    yield put({ type: CONVERSION_ERROR, error: error.message });
  }

  // Test purpose
  // getLatestRate('USD')
  //   .then(response => response.json())
  //   .then(response => {
  //     console.log(response);
  //   })
  //   .catch(error => {
  //     console.log('error : ', error);
  //   });
  // yield;
}

export default function* rootSaga() {
  yield takeEvery(GET_INITIAL_CONVERSION, fetchLatestConversionRate);
  yield takeEvery(SWAP_CURRENCY, fetchLatestConversionRate);
  yield takeEvery(CHANGE_BASE_CURRENCY, fetchLatestConversionRate);
}

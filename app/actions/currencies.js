export const SWAP_CURRENCY = 'SWAP_CURRENCY';
export const CHANGE_CURRENCY_AMOUNT = 'CHANGE_CURRENCY_AMOUNT';

export const swapCurrency = () => {
  return {
    type: SWAP_CURRENCY
  };
};

export const changeCurrencyAmount = amount => {
  return {
    type: CHANGE_CURRENCY_AMOUNT,
    amount
  };
};

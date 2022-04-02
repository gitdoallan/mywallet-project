const INITIAL_STATE = {
  id: 0,
  expensesTotal: { total: 0, ask: 0 },
  expenses: [],
  currency: 'BRL',
  currencies: [],
};

export const WALLET_ACTION_EXPENSES = 'WALLET_ACTION_EXPENSES';
export const WALLET_ACTION_CURRENCY = 'WALLET_ACTION_CURRENCY';
export const WALLET_ACTION_CURRENCIES = 'WALLET_ACTION_CURRENCIES';
export const WALLET_ACTION_EXPENSES_TOTAL = 'WALLET_ACTION_EXPENSES_TOTAL';

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case WALLET_ACTION_EXPENSES:
    return {
      ...state, expenses: [...state.expenses, payload.expenses],
    };
  case WALLET_ACTION_EXPENSES_TOTAL:
    return {
      ...state,
      expensesTotal: {
        total: (state.expensesTotal.total + payload.expensesTotal.total),
        ask: payload.expensesTotal.ask },
    };
  case WALLET_ACTION_CURRENCY:
  case WALLET_ACTION_CURRENCIES:
    return { ...state, ...payload };
  default: return state;
  }
};

export default user;

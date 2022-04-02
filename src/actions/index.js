import { USER_LOGIN } from '../reducers/user';
import { WALLET_ACTION_EXPENSES,
  WALLET_ACTION_CURRENCY,
  WALLET_ACTION_CURRENCIES,
  WALLET_ACTION_EXPENSES_TOTAL } from '../reducers/wallet';

export const userAction = (value) => ({ type: USER_LOGIN, payload: { email: value } });

export const walletActionExpenses = (value) => ({
  type: WALLET_ACTION_EXPENSES, payload: { expenses: value } });

export const walletActionExpensesTotal = (value) => ({
  type: WALLET_ACTION_EXPENSES_TOTAL, payload: { expensesTotal: value } });

export const walletActionCurrency = (value) => ({
  type: WALLET_ACTION_CURRENCY, payload: { currency: value } });

export const walletActionCurrencies = (value) => ({
  type: WALLET_ACTION_CURRENCIES, payload: { currencies: value } });

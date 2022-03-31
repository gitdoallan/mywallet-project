import { USER_LOGIN } from '../reducers/user';
import { WALLET_ACTION } from '../reducers/wallet';

export const userAction = (value) => ({ type: USER_LOGIN, payload: value });

export const walletAction = (value) => ({ type: WALLET_ACTION, payload: value });

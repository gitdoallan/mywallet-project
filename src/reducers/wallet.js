const INITIAL_STATE = {
  wallet: '',
  expenses: '',
};

export const WALLET_ACTION = 'WALLET_ACTION';

const user = (state = INITIAL_STATE, {type, payload}) => {
  switch (type) {
    case WALLET_ACTION: return { ...state, user: payload };
    default: return state;
  }
}

export default user;

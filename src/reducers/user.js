const INITIAL_STATE = {
  email: '',
};

export const USER_LOGIN = 'USER_LOGIN';

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case USER_LOGIN:
    return { ...state, ...payload };
  default: return state;
  }
};

export default user;

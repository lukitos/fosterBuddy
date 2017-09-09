const INITIAL_STATE = {
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'EMAIL_CHANGED':
      return { ...state, email: action.payload };
    case 'PASSWORD_CHANGED':
      return { ...state, password: action.payload };
    case 'LOGIN_USER':
      return state;
    case 'LOGIN_USER_FULFILLED':
      // console.log('success, firebase user >>>> ', action.payload);
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case 'LOGIN_USER_REJECTED':
      // console.log('failed, payload >>> ', action.payload.message);
      return { ...state, error: 'Authentication Failed.', password: '', loading: false };
    default:
      return state;
  }
};

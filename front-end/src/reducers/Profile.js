let initialState = [];

export default (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_PROFILE_PENDING':
      return state;
    case 'FETCH_PROFILE_FULFILLED':
      console.log('Profile reducer >>> payload=', action.payload.data);
      return [...action.payload.data];
    case 'FETCH_PROFILE_REJECTED':
      return state;
    default:
      return state;
  }
}

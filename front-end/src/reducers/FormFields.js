let initialState = {
  name: '',
  description: '',
  photo_url: '',
  profile_id: 2
};

export default (state=initialState, action) => {
  switch (action.type) {
    case 'FORM_INCIDENT':
      let currProfile = {
        profile_id: 2
      };
      return {...state, ...action.payload, ...currProfile};
    case 'FORM_INCIDENT_INIT':
      return action.payload;
    default:
      return state;
  }
}

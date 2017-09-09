let initialState = [];

export default (state=initialState, action) => {
  switch (action.type) {
    case 'FETCH_INCIDENTS_PENDING':
      return state;
    case 'FETCH_INCIDENTS_FULFILLED':
      return [...action.payload.data];
    case 'FETCH_INCIDENTS_REJECTED':
      return state;

    case 'CREATE_INCIDENTS_PENDING':
      return state;
    case 'CREATE_INCIDENTS_FULFILLED':
      return [...action.payload.data];
    case 'CREATE_INCIDENTS_REJECTED':
      return state;

    case 'UPDATE_INCIDENT_PENDING':
      return state;
    case 'UPDATE_INCIDENT_FULFILLED':
      return [...action.payload.data];
    case 'UPDATE_INCIDENT_REJECTED':
      return state;

    case 'DELETE_INCIDENTS_PENDING':
      return state;
    case 'DELETE_INCIDENTS_FULFILLED':
      return [...action.payload.data];
    case 'DELETE_INCIDENTS_REJECTED':
      return state;

    default:
      return state;
  }
}

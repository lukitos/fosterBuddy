import axios from 'axios';

const ROOT_URL = 'http://localhost:3000/api';

export const fetchProfile = (id) => {
  console.log('in action fetchProfile');
  console.log('in action fetchProfile, id=', id);
  console.log('url for axios=', `${ROOT_URL}/profile/${id}`);
  return ({
    type: 'FETCH_PROFILE',
    payload: axios.get(`${ROOT_URL}/profile/${id}`)
  });
}

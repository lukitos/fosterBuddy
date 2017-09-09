import { combineReducers } from 'redux';
import auth from './Auth';
import profile from './Profile';
import incidents from './Incident';
import formFields from './FormFields';

const rootReducer = combineReducers({
  auth,
  profile,
  incidents,
  formFields
});

export default rootReducer;

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
  return {
    type: 'EMAIL_CHANGED',
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: 'PASSWORD_CHANGED',
    payload: text
  };
};

export const loginUser = ({ email, password }) => {
  return {
    type: 'LOGIN_USER',
    payload: firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        // console.log('firebase user ', user);
        Actions.incidentList();
        return user;
      })
      .catch(error => {
        Actions.loginErr();
      })
  };
};

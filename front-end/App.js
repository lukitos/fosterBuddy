import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import Store from './src/Store';
import Router from './src/Router';
import IncidentList from './src/components/incident/IncidentList';
import secrets from './secrets';

class App extends Component {

  componentDidMount() {
    var config = {
      apiKey: secrets.apiKey,
      authDomain: secrets.authDomain,
      databaseURL: secrets.databaseURL,
      projectId: secrets.projectId,
      storageBucket: secrets.storageBucket,
      messagingSenderId: secrets.messagingSenderId
    }
    firebase.initializeApp(config);
  }

  render() {
    const StoreInstance = Store();
    return (
      <Provider store={StoreInstance}>
        <Router />
      </Provider>
    );
  }

}

export default App;

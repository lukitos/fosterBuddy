import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './components/auth/LoginForm';
import LoginErr from './components/auth/LoginErr';
import IncidentList from './components/incident/IncidentList';
import IncidentDetail from './components/incident/IncidentDetail';
import IncidentCreate from './components/incident/IncidentCreate';
import IncidentEdit from './components/incident/IncidentEdit';
import ProfileList from './components/profile/ProfileList';

const RouterComponent = () => {
  return (
    <Router>
      <Scene>
        <Scene key="login"
          component={LoginForm}
          title="Login"
          initial
        />
        <Scene key="loginErr"
          component={LoginErr}
          title="Login Error"
        />
        <Scene key="profileList"
          component={LoginErr}
          title="Profile"
        />
        <Scene
          onRight={() => Actions.incidentCreate()}
          rightTitle="+"
          key="incidentList"
          component={IncidentList}
          title="Incident List"
        />
        <Scene
          key="incidentDetail"
          component={IncidentDetail}
          title="Incident"
        />
        <Scene
          key="incidentCreate"
          component={IncidentCreate}
          title="New Incident"
        />
        <Scene
          key="incidentEdit"
          component={IncidentEdit}
          title="Edit Incident"
        />
        <Scene
          key="profileList"
          component={ProfileList}
          title="Child Profiles"
        />
      </Scene>
    </Router>
  );
};

export default RouterComponent;

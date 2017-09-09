import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as incidentAction from '../../actions/Incident';
import * as profileAction from '../../actions/Profile';
import Incident from './Incident';

class IncidentList extends Component {

  constructor() {
    super();
    this.state = {
      incidents: [],
      profile: []
    };
  }

  componentDidMount() {
    this.props.incidentAction.fetchIncidents();
    this.props.profileAction.fetchProfile(2);
  }

  render () {
    let allIncidents = this.props.incidents
      .map(incident => <Incident key={incident.id} incident={incident} />);
    return (
      <View>
        {allIncidents}
      </View>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return {
    incidentAction: bindActionCreators(incidentAction, dispatch),
    profileAction: bindActionCreators(profileAction, dispatch)
  }
}

function mapStateToProps(state, props) {
  return {
    incidents: state.incidents,
    profile: state.profile
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncidentList);

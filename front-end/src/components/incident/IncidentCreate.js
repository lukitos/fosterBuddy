import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as incidentAction from '../../actions/Incident';
import { CardSection, Input, Button } from '../common';
import IncidentForm from './IncidentForm';

class IncidentCreate extends Component {

  onClose() {
    Actions.incidentList();
  }

  onCreate() {
    this.props.incidentAction.createIncident(this.props.formFields);
    setTimeout(() => Actions.incidentList(), 1000);
  }

  render () {
    return (
      <View>
        <IncidentForm />
        <CardSection>
          <Button onPress={this.onCreate.bind(this)}>
            Create
          </Button>
        </CardSection>
        <CardSection>
          <Button onPress={this.onClose.bind(this)}>
            Cancel
          </Button>
        </CardSection>
      </View>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return {
    incidentAction: bindActionCreators(incidentAction, dispatch)
  }
}

function mapStateToProps(state, props) {
  return {
    incidents: state.incidents,
    formFields: state.formFields
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncidentCreate);

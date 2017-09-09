import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
// import Camera from 'react-native-camera';
// import { RNS3 } from 'react-native-aws3';
import * as incidentAction from '../../actions/Incident';
import * as formAction from '../../actions/FormFields';
import { CardSection, Input, Button } from '../common';
import IncidentForm from './IncidentForm';

class IncidentEdit extends Component {

  componentDidMount() {
    this.props.formAction.initializeIncident(this.props.incident);
  }

  onClose() {
    Actions.incidentList();
  }

  onSubmit() {
    this.props.incidentAction.updateIncident(this.props.formFields, this.props.incident.id);
    setTimeout(() => Actions.incidentList(), 1000);
  }

  render () {
    return (
      <View>
        <IncidentForm />
        <CardSection>
          <Button onPress={this.onSubmit.bind(this)}>
            Save
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
    incidentAction: bindActionCreators(incidentAction, dispatch),
    formAction: bindActionCreators(formAction, dispatch)
  }
}

function mapStateToProps(state, props) {
  return {
    incidents: state.incidents,
    formFields: state.formFields
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncidentEdit);

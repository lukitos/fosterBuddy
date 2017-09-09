import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as formAction from '../../actions/FormFields';
import { CardSection, Input } from '../common';

class IncidentForm extends Component {

  constructor() {
    super();
    this.Fields = {};
  }

  getValue(field) {
    this.Fields = {...this.Fields, ...field};
    this.props.formAction.populateIncident(this.Fields);
  }

  render () {
    return (
      <View>

        <CardSection>
          <Input
            label="Title"
            placeholder="enter title"
            value={this.props.formFields.name}
            onChangeText={value => this.getValue({ name: value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Description"
            placeholder="enter description"
            value={this.props.formFields.description}
            onChangeText={value => this.getValue({ description: value })}
          />
        </CardSection>

        <CardSection>
          <Input
            label="Photo"
            placeholder="enter url"
            value={this.props.formFields.photo_url}
            onChangeText={value => this.getValue({ photo_url: value })}
          />
        </CardSection>

      </View>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return {
    formAction: bindActionCreators(formAction, dispatch)
  }
}

function mapStateToProps(state, props) {
  return {
    incidents: state.incidents,
    formFields: state.formFields
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IncidentForm);

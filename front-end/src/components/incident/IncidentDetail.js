import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as incidentAction from '../../actions/Incident';
import * as profileAction from '../../actions/Profile';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';

class IncidentDetail extends Component {

  onEdit() {
    Actions.incidentEdit({ incident: this.props.incident });
  }

  onDelete() {
    this.props.incidentAction.deleteIncident(this.props.incident);
    setTimeout(() => Actions.incidentList(), 1000);
  }

  onProfile() {
    // console.log('In IncidentDetail >>> onProfile, props ', this.props);
    this.props.profileAction.fetchProfile(this.props.incident.profile_id);
    Actions.profileList({ incident: this.props.incident });
  }

  onClose() {
    Actions.incidentList();
  }

  render() {
    return (
      <ScrollView>
        <Card>

          <CardSection>
            <Text style={styles.titleStyle}>
              {this.props.incident.name}
            </Text>
          </CardSection>

          <CardSection>
            <Text style={styles.descriptionStyle}>
              {this.props.incident.description}
            </Text>
          </CardSection>

          <CardSection>
            <Image
              style={styles.imageStyle}
              source={{ uri: this.props.incident.photo_url }}
            />
          </CardSection>

          <CardSection>
            <Button onPress={this.onEdit.bind(this)}>
              Edit
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onDelete.bind(this)}>
              Delete
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onProfile.bind(this)}>
              View Profile
            </Button>
          </CardSection>

          <CardSection>
            <Button onPress={this.onClose.bind(this)}>
              Close
            </Button>
          </CardSection>

        </Card>
      </ScrollView>
    )
  }

}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  descriptionStyle: {
    paddingLeft: 15,
    paddingRight: 5
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

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

export default connect(mapStateToProps, mapDispatchToProps)(IncidentDetail);

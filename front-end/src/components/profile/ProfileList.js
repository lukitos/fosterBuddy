import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import * as profileAction from '../../actions/Profile';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { CardSection } from '../common/CardSection';


class ProfileList extends Component {

  onClose() {
    Actions.incidentList();
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Text style={styles.titleStyle}>
            Name: {this.props.profile.name}
          </Text>
        </CardSection>
        <CardSection>
          <Text style={styles.titleStyle}>
            Description: {this.props.profile.description}
          </Text>
        </CardSection>
        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{ uri: this.props.profile.photo_url }}
          />
        </CardSection>
        <CardSection>
          <Button onPress={this.onClose.bind(this)}>
            Close
          </Button>
        </CardSection>
      </Card>
    )
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

function mapDispatchToProps(dispatch) {
  return {
    profileAction: bindActionCreators(profileAction, dispatch)
  }
}

function mapStateToProps(state, props) {
  return {
    profile: state.profile[0]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileList);

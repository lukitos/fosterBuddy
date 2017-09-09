import React, { Component } from 'react';
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { CardSection } from '../common/CardSection.js';

class Incident extends Component {

  onPress() {
    Actions.incidentDetail({ incident: this.props.incident });
  }

  render() {
    return (
      <TouchableHighlight onPress={this.onPress.bind(this)}>
        <View>
          <CardSection>
            <View style={styles.thumbnailContainerStyle}>
              <Image
                style={styles.thumbnailStyle}
                source={{ uri: this.props.incident.photo_url }}
              />
            </View>
            <View style={styles.headerContentStyle}>
              <Text style={styles.headerTextStyle}>
                {this.props.incident.name}
              </Text>
              <Text>
                {this.props.incident.description}
              </Text>
            </View>
          </CardSection>
        </View>
      </TouchableHighlight>
    )
  }

}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default Incident;

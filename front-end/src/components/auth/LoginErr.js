import React from 'react';
import { View, Text, Image } from 'react-native';
import { Card } from '../common/Card';
import { CardSection } from '../common/CardSection';

const LoginErr = (props) => {
  return (
    <Card>
      <CardSection>
        <Text style={styles.titleStyle}>
          Authentication failure!
        </Text>
      </CardSection>
      <CardSection>
        <Image
          style={styles.imageStyle}
          source={{ uri: 'https://s3.amazonaws.com/fosterbuddy/erroricon.png' }}
        />
      </CardSection>
    </Card>
  )
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

export default LoginErr;

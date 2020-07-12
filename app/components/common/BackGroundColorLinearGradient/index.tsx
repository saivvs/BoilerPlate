import React, {Component} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {View, Text, StyleSheet} from 'react-native';
import InputElement from '../InputElement';
import RadioButton from '../RadioButton';
interface BackGroundColorLinearGradientProps {
  color1: string;
  color2: string;
}

class BackGroundColorLinearGradient extends Component<
  BackGroundColorLinearGradientProps
> {
  render() {
    const {color1, color2} = this.props;
    return (
      <LinearGradient
        style={styles.linearGradient}
        colors={[color1, color2]}
        start={{x: 0.3, y: 0}}
        end={{x: 1, y: 0.1}}>
        <View>
          <Text>SignUpForm</Text>
          <InputElement placeholder="FirstName" isSecure={false} width="50%" />
          <RadioButton />
        </View>
      </LinearGradient>
    );
  }
}
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});

export default BackGroundColorLinearGradient;

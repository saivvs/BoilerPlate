import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import BackGroundColorLinearGradient from '../common/BackGroundColorLinearGradient';

import {SignUpFormContainer} from './styledComponents';
class SignUpForm extends Component {
  render() {
    return (
      <SignUpFormContainer>
        <BackGroundColorLinearGradient color1="#33ccff" color2="#ff99cc" />
      </SignUpFormContainer>
    );
  }
}

export default SignUpForm;

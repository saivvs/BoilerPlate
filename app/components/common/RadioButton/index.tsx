import React, {Component} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

export default class RadioButton extends Component {
  state = {
    value: null,
  };

  render() {
    const PROP = [
      {
        key: 'Male',
        text: 'Male',
      },
      {
        key: 'Female',
        text: 'Female',
      },
      {
        key: 'Other',
        text: 'Other',
      },
    ];
    const {value} = this.state;

    return (
      <View style={styles.mainContainer}>
        {PROP.map(res => {
          return (
            <View key={res.key} style={styles.container}>
              <TouchableOpacity
                style={styles.radioCircle}
                onPress={() => {
                  this.setState({
                    value: res.key,
                  });
                }}>
                {value === res.key && <View style={styles.selectedRb} />}
              </TouchableOpacity>
              <Text style={styles.radioText}>{res.text}</Text>
            </View>
          );
        })}
        <Text> Selected: {this.state.value} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
  },
  container: {
    marginBottom: 35,
    alignItems: 'center',
    flexDirection: 'row',
  },
  radioText: {
    marginRight: 35,
    fontSize: 12,
    color: '#000',
  },
  radioCircle: {
    height: 15,
    width: 15,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#3740ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 7,
    height: 7,
    borderRadius: 50,
    backgroundColor: '#3740ff',
  },
  result: {
    marginTop: 20,
    color: 'white',
    fontWeight: '600',
    backgroundColor: '#F3FBFE',
  },
});

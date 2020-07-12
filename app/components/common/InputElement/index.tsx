import React, {Component} from 'react';

import {TextInputElement} from './styledComponents';

interface InputElementProps {
  placeholder: string;
  isSecure: boolean;
  width: string;
}

class InputElement extends Component<InputElementProps> {
  render() {
    const {placeholder, isSecure, width} = this.props;
    return (
      <TextInputElement
        placeholder={placeholder}
        secureTextEntry={isSecure}
        width={width}
      />
    );
  }
}

export default InputElement;

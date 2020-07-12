import React from 'react';
import {Scene} from 'react-native-router-flux';

import {
  APP_LAUNCH_SCENE,
  APP_SCENE,
  SIGN_UP_SCENE,
} from '../constants/NavigationConstants';

import SignUpForm from '../components/SignUpForm';
import LaunchScene from './LaunchScene';
import AppScene from './AppScene';

const scenes = [
  <Scene key={APP_LAUNCH_SCENE} component={LaunchScene} />,
  <Scene key={SIGN_UP_SCENE} component={SignUpForm} />,
  <Scene initial key={APP_SCENE} component={AppScene} />,
];

const modalScenes: any = [];

export {scenes as default, modalScenes};

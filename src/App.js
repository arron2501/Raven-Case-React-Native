import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';

import NavBar from './components/NavBar';

// Supaya status barnya transparan
StatusBar.setBarStyle('light-content');
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('rgba(0,0,0,0)');
  StatusBar.setTranslucent(true);
}

export default function App() {
  // Splash screen
  useEffect(() => {
    SplashScreen.hide();
  });
  return <NavBar />;
}

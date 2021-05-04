import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';
import {Platform, StatusBar} from 'react-native';

import Router from './src/config/router';

// Supaya icon di status barnya gelap
StatusBar.setBarStyle('dark-content');
// Hanya untuk OS Android
if (Platform.OS === 'android') {
  // Supaya status barnya transparan
  StatusBar.setBackgroundColor('rgba(0,0,0,0)');
  StatusBar.setTranslucent(true);
}

function App() {
  // Splash screen
  useEffect(() => {
    SplashScreen.hide();
  });
  // Semua navigasi diatur dalam file router
  return <Router />;
}

export default App;

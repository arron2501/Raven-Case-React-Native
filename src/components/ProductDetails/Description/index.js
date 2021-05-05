import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Description() {
  return (
    <View style={styles.container}>
      <View style={styles.descriptionAlign}>
        <Text style={styles.descriptionTitle}>Description</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 280,
    marginBottom: 7,
    backgroundColor: '#FFF',
  },
  descriptionAlign: {
    marginTop: 15,
    marginStart: 30,
    marginEnd: 30,
  },
  descriptionTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginBottom: 10,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    textAlign: 'left',
  },
});

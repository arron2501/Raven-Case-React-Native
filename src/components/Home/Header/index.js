import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HeaderBackground from '../../../assets/images/header.svg';
import Logo from '../../../assets/logos/ravencase.svg';

export default function Header() {
  return (
    <View>
      <View style={styles.container}>
        <HeaderBackground style={styles.background} />
      </View>
      <View style={styles.headerItemsAlign}>
        <Logo style={styles.logo} />
        <TouchableOpacity style={styles.containerSearch}>
          <View style={styles.searchItemsAlign}>
            <Icon name="search" size={15} color={'#C4C4C4'} />
            <Text style={styles.placeholder}>Search</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.containerNotification}>
          <View>
            <Icon name="bell" size={24} color={'white'} />
            <Text style={styles.notification}>5</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  background: {
    width: 411,
    height: 170,
  },
  logo: {
    width: 75,
    height: 34,
    marginTop: 30,
  },
  headerItemsAlign: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginStart: 15,
    marginEnd: 15,
    marginTop: 15,
  },
  containerSearch: {
    width: 212,
    height: 34,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginTop: 30,
  },
  searchItemsAlign: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 8,
  },
  placeholder: {
    color: '#C4C4C4',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    paddingLeft: 7,
    paddingVertical: 1,
  },
  containerNotification: {
    marginTop: 30,
  },
  notification: {
    position: 'absolute',
    backgroundColor: '#FF0000',
    borderRadius: 14 / 2,
    width: 14,
    height: 14,
    top: 0,
    right: 0,
    color: '#FFF',
    fontFamily: 'Montserrat-Bold',
    fontSize: 8,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
});

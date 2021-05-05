import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function ActionButtons() {
  return (
    <View style={styles.fixedBottom}>
      <View style={styles.container}>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#E5E5E5'}]}>
          <View style={styles.center}>
            <Text style={styles.btnText}>Buy Now</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#FFB672'}]}>
          <View style={styles.center}>
            <Text style={[styles.btnText, {color: '#FFF'}]}>Add To Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  fixedBottom: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  container: {
    paddingStart: 30,
    paddingEnd: 30,
    flexDirection: 'row',
    width: '100%',
    height: 80,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'space-around',
    elevation: 5,
  },
  btn: {
    width: 165,
    height: 50,
    borderRadius: 10,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
  },
});

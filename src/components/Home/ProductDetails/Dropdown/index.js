import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Dropdown() {
  return (
    <View style={styles.selectDevice}>
      <View style={styles.selectDeviceTextAlign}>
        <Text style={styles.selectDeviceTextStyle}>Select device:</Text>
        <Text style={styles.selectDeviceCountTextStyle}>
          8 devices available
        </Text>
      </View>
      <DropDownPicker
        items={[
          {
            label: 'iPhone 6',
            value: 'iphone6',
          },
          {
            label: 'iPhone 6s',
            value: 'iphone6s',
          },
          {
            label: 'iPhone 7',
            value: 'iphone7',
          },
          {
            label: 'iPhone 8',
            value: 'iphone8',
          },
          {
            label: 'iPhone X',
            value: 'iphoneX',
          },
          {
            label: 'iPhone XS',
            value: 'iphonexs',
          },
          {
            label: 'iPhone XR',
            value: 'iphonexr',
          },
          {
            label: 'iPhone 11',
            value: 'iphone11',
          },
        ]}
        placeholder="Pick a device"
        containerStyle={styles.containerStyle}
        style={styles.style}
        itemStyle={styles.itemStyle}
        labelStyle={styles.labelStyle}
        selectedLabelStyle={styles.selectedLabelStyle}
        dropDownMaxHeight={250}
        dropDownStyle={styles.dropdownStyle}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  selectDevice: {
    width: '100%',
    height: 100,
    backgroundColor: '#FFF',
    marginTop: 7,
  },
  selectDeviceTextAlign: {
    flexDirection: 'row',
    marginTop: 15,
    marginStart: 30,
    alignItems: 'center',
  },
  selectDeviceTextStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginRight: 7,
  },
  selectDeviceCountTextStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
  containerStyle: {
    height: 40,
    width: 351,
    alignSelf: 'center',
    marginTop: 7,
    borderRadius: 10,
  },
  style: {
    backgroundColor: '#F1F3F6',
    borderWidth: 0,
  },
  itemStyle: {
    justifyContent: 'flex-start',
  },
  labelStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  selectedLabelStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
  },
  dropdownStyle: {
    backgroundColor: '#F1F3F6',
    borderWidth: 0,
    marginTop: 5,
    marginBottom: 5,
    borderRadius: 10,
  },
});

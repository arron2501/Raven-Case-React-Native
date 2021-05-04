import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Category from '../../../assets/icons/category.svg';
import FlashSale from '../../../assets/icons/flashsale.svg';
import BestSeller from '../../../assets/icons/bestseller.svg';
import AllPromos from '../../../assets/icons/allpromos.svg';

export default function Menu() {
  const [menu] = useState([
    {
      menu: (
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#FFB672'}]}>
          <View style={styles.center}>
            <Category style={styles.btnIcon} />
          </View>
        </TouchableOpacity>
      ),
      title: 'Category',
    },
    {
      menu: (
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#D586B4'}]}>
          <View style={styles.center}>
            <FlashSale style={styles.btnIcon} />
          </View>
        </TouchableOpacity>
      ),
      title: 'Flash Sale',
    },
    {
      menu: (
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#8A9CCC'}]}>
          <View style={styles.center}>
            <BestSeller style={styles.btnIcon} />
          </View>
        </TouchableOpacity>
      ),
      title: 'Best Seller',
    },
    {
      menu: (
        <TouchableOpacity style={[styles.btn, {backgroundColor: '#5EB5C9'}]}>
          <View style={styles.center}>
            <AllPromos style={styles.btnIcon} />
          </View>
        </TouchableOpacity>
      ),
      title: 'All Promos',
    },
  ]);

  return (
    <View style={styles.container}>
      {menu.map((row, index) => (
        <View key={index}>
          {row.menu}
          <Text style={styles.btnTitle}>{row.title}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    width: wp('18%'),
    height: hp('9%'),
    borderRadius: 20,
  },
  btnIcon: {
    width: 35,
    height: 35,
  },
  btnTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 5,
  },
});

import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import Carousel1 from '../../../../assets/images/carousel1.svg';
import Carousel2 from '../../../../assets/images/carousel2.svg';
import Carousel3 from '../../../../assets/images/carousel3.svg';

export default function Carousel() {
  const [carousel] = useState([
    {
      title: 'Couple Cases',
      desc: 'Get 2 cases for lower\nprice!',
      img: <Carousel1 style={styles.carImg} />,
    },
    {
      title: 'Astronaut Cases',
      desc: 'Get 2 cases for lower\nprice!',
      img: <Carousel2 style={styles.carImg} />,
    },
    {
      title: 'Neon Cases',
      desc: 'Get 2 cases for lower\nprice!',
      img: <Carousel3 style={styles.carImg} />,
    },
  ]);

  return (
    <View style={styles.container}>
      <Swiper
        loop={true}
        index={1}
        autoplay={true}
        autoplayTimeout={4}
        paginationStyle={{bottom: 10}}
        dot={<View style={styles.dot} />}
        activeDot={<View style={[styles.dot, {backgroundColor: '#1C252E'}]} />}>
        {carousel.map((row, index) => (
          <View style={{flexDirection: 'row'}} key={index}>
            {row.img}
            <View style={styles.carTextAlign}>
              <Text style={styles.carInfoText}>New Bundle!</Text>
              <Text style={styles.carTitleText}>{row.title}</Text>
              <Text style={styles.carDescText}>{row.desc}</Text>
              <TouchableOpacity style={styles.btnDetails}>
                <Text style={styles.btnText}>Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: wp('90%'),
    height: hp('20%'),
    backgroundColor: '#FFF',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 25,
    elevation: 2,
  },
  carImg: {
    width: 180,
    height: 110,
    marginTop: 10,
    marginLeft: 10,
  },
  dot: {
    backgroundColor: '#F1F3F6',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
  carTextAlign: {
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: 10,
  },
  carInfoText: {
    fontFamily: 'Montserrat-SemiBoldItalic',
    fontSize: 12,
  },
  carTitleText: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 18,
    marginBottom: 3,
  },
  carDescText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  btnDetails: {
    backgroundColor: '#1C252E',
    width: 75,
    height: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  btnText: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    alignSelf: 'center',
    marginVertical: 7,
  },
});

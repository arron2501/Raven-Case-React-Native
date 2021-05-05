import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';

import Carousel1 from '../../../../assets/images/carnewdesign1.svg';
import Carousel2 from '../../../../assets/images/carnewdesign2.svg';
import Carousel3 from '../../../../assets/images/carnewdesign3.svg';

export default function Carousel() {
  const [carousel] = useState([
    {
      img: <Carousel1 style={styles.imgCarousel} />,
    },
    {
      img: <Carousel2 style={styles.imgCarousel} />,
    },
    {
      img: <Carousel3 style={styles.imgCarousel} />,
    },
  ]);

  return (
    <View style={styles.containerCarousel}>
      <Swiper
        loop={true}
        index={1}
        autoplay={true}
        autoplayTimeout={4}
        paginationStyle={{bottom: 10}}
        dot={<View style={[styles.dot, {backgroundColor: '#F1F3F6'}]} />}
        activeDot={<View style={[styles.dot, {backgroundColor: '#1C252E'}]} />}>
        {carousel.map((row, index) => (
          <View style={{flexDirection: 'row'}} key={index}>
            {row.img}
          </View>
        ))}
      </Swiper>
    </View>
  );
}

const styles = StyleSheet.create({
  imgCarousel: {
    width: wp('100%'),
    height: hp('25%'),
  },
  containerCarousel: {
    width: wp('100%'),
    height: hp('24%'),
    backgroundColor: '#FFF',
    alignSelf: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
});

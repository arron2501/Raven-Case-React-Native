import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

import Header from './assets/images/header.svg';
import Logo from './assets/logos/ravencase.svg';
import Carousel1 from './assets/images/carousel1.svg';
import Carousel2 from './assets/images/carousel2.svg';
import Carousel3 from './assets/images/carousel3.svg';

export default function App() {
  const [carousel] = useState([
    {
      title: 'Couple Cases',
      desc: 'Get 2 cases for lower\nprice!',
      img: (
        <Carousel1
          width={180}
          height={110}
          style={{marginTop: 10, marginLeft: 10}}
        />
      ),
    },
    {
      title: 'Astronaut Cases',
      desc: 'Get 2 cases for lower\nprice!',
      img: (
        <Carousel2
          width={180}
          height={110}
          style={{marginTop: 10, marginLeft: 10}}
        />
      ),
    },
    {
      title: 'Neon Cases',
      desc: 'Get 2 cases for lower\nprice!',
      img: (
        <Carousel3
          width={180}
          height={110}
          style={{marginTop: 10, marginLeft: 10}}
        />
      ),
    },
  ]);
  return (
    <View>
      <View style={styles.header}>
        <Header width={411} height={170} />
      </View>
      <View style={styles.itemsHeader}>
        <Logo width={75} height={34} style={{marginTop: 30}} />
        <TouchableOpacity style={styles.boxSearch}>
          <View style={styles.itemsSearch}>
            <Icon name="search" size={15} color={'#C4C4C4'} />
            <Text style={styles.textSearch}>Search</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{marginTop: 30}}>
          <View>
            <Icon name="bell" size={24} color={'white'} />
            <Text style={styles.notification}>5</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.boxCarousel}>
        <Swiper
          loop={true}
          index={1}
          autoplay={true}
          autoplayTimeout={4}
          paginationStyle={{bottom: 10}}
          dot={
            <View
              style={{
                backgroundColor: '#F1F3F6',
                width: 10,
                height: 10,
                borderRadius: 5,
                marginRight: 4,
              }}
            />
          }
          activeDot={
            <View
              style={{
                backgroundColor: '#1C252E',
                width: 10,
                height: 10,
                borderRadius: 5,
                marginRight: 4,
              }}
            />
          }>
          {carousel.map((row, index) => (
            <View style={{flexDirection: 'row'}} key={index}>
              {row.img}
              <View style={styles.textCarAlign}>
                <Text style={styles.carTitle}>New Bundle!</Text>
                <Text style={styles.carItems}>{row.title}</Text>
                <Text style={styles.carDesc}>{row.desc}</Text>
                <TouchableOpacity style={styles.carButton}>
                  <Text style={styles.carButtonText}>Details</Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </Swiper>
        {/* <View style={styles.indicatorCarAlign}>
          <View style={styles.carIndicatorActive}></View>
          <View style={styles.carIndicatorNonactive}></View>
          <View style={styles.carIndicatorNonactive}></View>
        </View> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  itemsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginStart: 15,
    marginEnd: 15,
  },
  boxSearch: {
    width: 212,
    height: 34,
    backgroundColor: '#FFF',
    borderRadius: 20,
    marginTop: 30,
  },
  itemsSearch: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 8,
  },
  textSearch: {
    color: '#C4C4C4',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    paddingLeft: 7,
    paddingVertical: 1,
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
  boxCarousel: {
    width: 360,
    height: 150,
    backgroundColor: '#FFF',
    borderRadius: 20,
    alignSelf: 'center',
    marginTop: 30,
  },
  textCarAlign: {
    flexDirection: 'column',
    marginTop: 10,
    marginLeft: 10,
  },
  carTitle: {
    fontFamily: 'Montserrat-SemiBoldItalic',
    fontSize: 12,
  },
  carItems: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 18,
    marginBottom: 3,
  },
  carDesc: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  carButton: {
    backgroundColor: '#1C252E',
    width: 75,
    height: 30,
    borderRadius: 10,
    marginTop: 10,
  },
  carButtonText: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    alignSelf: 'center',
    marginVertical: 7,
  },
  indicatorCarAlign: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 8,
  },
  carIndicatorActive: {
    backgroundColor: '#1C252E',
    borderRadius: 12 / 2,
    width: 12,
    height: 12,
    marginRight: 5,
  },
  carIndicatorNonactive: {
    backgroundColor: '#F1F3F6',
    borderRadius: 12 / 2,
    width: 12,
    height: 12,
    marginRight: 5,
  },
});

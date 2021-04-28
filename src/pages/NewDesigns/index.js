import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Swiper from 'react-native-swiper';

import Carousel1 from '../../assets/images/carnewdesign1.svg';
import Carousel2 from '../../assets/images/carnewdesign2.svg';
import Carousel3 from '../../assets/images/carnewdesign3.svg';
import Showcase1 from '../../assets/images/showcase1.svg';
import Showcase2 from '../../assets/images/showcase2.svg';
import Showcase3 from '../../assets/images/showcase3.svg';
import Showcase4 from '../../assets/images/showcase4.svg';

export default function NewDesigns() {
  const [carousel] = useState([
    {
      img: <Carousel1 width={wp('100%')} height={hp('25%')} />,
    },
    {
      img: <Carousel2 width={wp('100%')} height={hp('25%')} />,
    },
    {
      img: <Carousel3 width={wp('100%')} height={hp('25%')} />,
    },
  ]);

  const [showcaseItem] = useState([
    {
      showcase: (
        <TouchableOpacity
          style={[styles.showcaseItem, styles.showcase1Background]}>
          <Showcase1
            width={138}
            height={134}
            style={{marginTop: 6, alignSelf: 'center'}}
          />
          <View style={{marginTop: 10, marginLeft: 15}}>
            <Text style={styles.showcaseItemTitle}>
              RGB Astronaut{'\n'}ASTRO-7
            </Text>
            <View style={styles.favoriteIcon}>
              <Text style={styles.showcaseItemPrice}>Rp99.000</Text>
              <TouchableOpacity>
                <Icon name={'heart-o'} size={22} color={'black'} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ),
    },
    {
      showcase: (
        <TouchableOpacity
          style={[styles.showcaseItem, styles.showcase2Background]}>
          <Showcase2
            width={138}
            height={134}
            style={{marginTop: 6, alignSelf: 'center'}}
          />
          <View style={{marginTop: 10, marginLeft: 15}}>
            <Text style={styles.showcaseItemTitle}>
              Adult Groot{'\n'}MARVEL-9
            </Text>
            <View style={styles.favoriteIcon}>
              <Text style={styles.showcaseItemPrice}>Rp99.000</Text>
              <TouchableOpacity>
                <Icon name={'heart-o'} size={22} color={'black'} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ),
    },
    {
      showcase: (
        <TouchableOpacity
          style={[styles.showcaseItem, styles.showcase3Background]}>
          <Showcase3
            width={138}
            height={134}
            style={{marginTop: 6, alignSelf: 'center'}}
          />
          <View style={{marginTop: 10, marginLeft: 15}}>
            <Text style={styles.showcaseItemTitle}>
              Baba Yaga{'\n'}FORTNITE-16
            </Text>
            <View style={styles.favoriteIcon}>
              <Text style={styles.showcaseItemPrice}>Rp99.000</Text>
              <TouchableOpacity>
                <Icon name={'heart-o'} size={22} color={'black'} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ),
    },
    {
      showcase: (
        <TouchableOpacity
          style={[styles.showcaseItem, styles.showcase4Background]}>
          <Showcase4
            width={138}
            height={134}
            style={{marginTop: 6, alignSelf: 'center'}}
          />
          <View style={{marginTop: 10, marginLeft: 15}}>
            <Text style={styles.showcaseItemTitle}>
              Sniper Girl{'\n'}PUBG-2
            </Text>
            <View style={styles.favoriteIcon}>
              <Text style={styles.showcaseItemPrice}>Rp99.000</Text>
              <TouchableOpacity>
                <Icon name={'heart-o'} size={22} color={'black'} />
              </TouchableOpacity>
            </View>
          </View>
        </TouchableOpacity>
      ),
    },
  ]);

  return (
    <ScrollView>
      <View style={styles.header}></View>
      <View style={styles.itemsHeader}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color={'#1C252E'} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.boxSearch}>
          <View style={styles.itemsSearch}>
            <Icon name="search" size={15} color={'#C4C4C4'} />
            <Text style={styles.textSearch}>Search</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="shopping-cart" size={24} color={'#1C252E'} />
          <Text style={styles.notification}>5</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.boxCarousel}>
        <Swiper
          loop={true}
          index={1}
          autoplay={true}
          autoplayTimeout={4}
          paginationStyle={{bottom: 10}}
          dot={<View style={styles.dot} />}
          activeDot={<View style={styles.activeDot} />}>
          {carousel.map((row, index) => (
            <View style={{flexDirection: 'row'}} key={index}>
              {row.img}
            </View>
          ))}
        </Swiper>
      </View>

      <Text style={styles.newDesignsTitleText}>New Designs</Text>
      <View style={styles.container}>
        {showcaseItem.map((row, index) => (
          <View key={index} style={styles.items}>
            <View style={styles.showcaseItem}>{row.showcase}</View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: wp('100%'),
    height: 65,
    backgroundColor: '#FFF',
    marginTop: 30,
    position: 'absolute',
    top: 0,
    flex: 1,
    alignSelf: 'stretch',
    right: 0,
    left: 0,
  },
  itemsHeader: {
    marginTop: 45,
    marginEnd: 15,
    marginStart: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  boxSearch: {
    width: 212,
    height: 34,
    backgroundColor: '#F1F3F6',
    borderRadius: 10,
  },
  itemsSearch: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 8,
  },
  textSearch: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#C4C4C4',
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
    width: wp('100%'),
    height: hp('24%'),
    backgroundColor: '#FFF',
    marginTop: 15,
    alignSelf: 'center',
  },
  dot: {
    backgroundColor: '#F1F3F6',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
  activeDot: {
    backgroundColor: '#1C252E',
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 4,
  },
  newDesignsTitleText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    marginStart: 45,
    marginTop: 15,
    marginBottom: 10,
  },
  centerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewMoreButton: {
    backgroundColor: '#1C252E',
    width: 75,
    height: 30,
    borderRadius: 10,
  },
  viewMoreText: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
  },
  showcaseHeader: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  showcase1Background: {
    backgroundColor: '#92C7D950',
  },
  showcase2Background: {
    backgroundColor: '#F65F6025',
  },
  showcase3Background: {
    backgroundColor: '#D6D5F575',
  },
  showcase4Background: {
    backgroundColor: '#F6825125',
  },
  showcaseItem: {
    borderRadius: 15,
    width: 150,
    height: 230,
    marginBottom: 15,
  },
  showcaseItemTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  showcaseItemPrice: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    marginTop: 10,
  },
  favoriteIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 30,
    marginTop: 15,
    marginBottom: 15,
  },
  item: {
    width: '50%',
  },
});

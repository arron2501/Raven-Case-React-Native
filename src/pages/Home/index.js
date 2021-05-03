import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Swiper from 'react-native-swiper';

import Header from '../../assets/images/header.svg';
import Logo from '../../assets/logos/ravencase.svg';

import Carousel1 from '../../assets/images/carousel1.svg';
import Carousel2 from '../../assets/images/carousel2.svg';
import Carousel3 from '../../assets/images/carousel3.svg';

import Category from '../../assets/icons/category.svg';
import FlashSale from '../../assets/icons/flashsale.svg';
import BestSeller from '../../assets/icons/bestseller.svg';
import AllPromos from '../../assets/icons/allpromos.svg';

import Showcase1 from '../../assets/images/showcase1.svg';
import Showcase2 from '../../assets/images/showcase2.svg';
import Showcase3 from '../../assets/images/showcase3.svg';
import Showcase4 from '../../assets/images/showcase4.svg';

export default function Home() {
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

  const [menuButton] = useState([
    {
      menu: (
        <TouchableOpacity style={[styles.menuButton, styles.categoryButton]}>
          <View style={styles.centerItem}>
            <Category width={35} height={35} />
          </View>
        </TouchableOpacity>
      ),
      title: 'Category',
    },
    {
      menu: (
        <TouchableOpacity style={[styles.menuButton, styles.flashSaleButton]}>
          <View style={styles.centerItem}>
            <FlashSale width={35} height={35} />
          </View>
        </TouchableOpacity>
      ),
      title: 'Flash Sale',
    },
    {
      menu: (
        <TouchableOpacity style={[styles.menuButton, styles.bestSellerButton]}>
          <View style={styles.centerItem}>
            <BestSeller width={35} height={35} />
          </View>
        </TouchableOpacity>
      ),
      title: 'Best Seller',
    },
    {
      menu: (
        <TouchableOpacity style={[styles.menuButton, styles.allPromosButton]}>
          <View style={styles.centerItem}>
            <AllPromos width={35} height={35} />
          </View>
        </TouchableOpacity>
      ),
      title: 'All Promos',
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
            dot={<View style={styles.dot} />}
            activeDot={<View style={styles.activeDot} />}>
            {carousel.map((row, index) => (
              <View style={{flexDirection: 'row'}} key={index}>
                {row.img}
                <View style={styles.textCarAlign}>
                  <Text style={styles.carTitle}>New Bundle!</Text>
                  <Text style={styles.carItems}>{row.title}</Text>
                  <Text style={styles.carDesc}>{row.desc}</Text>
                  <TouchableOpacity style={styles.viewMoreButton}>
                    <Text style={styles.carButtonText}>Details</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </Swiper>
        </View>

        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          {menuButton.map((row, index) => (
            <View key={index}>
              {row.menu}
              <Text style={styles.menuTitle}>{row.title}</Text>
            </View>
          ))}
        </View>

        <View>
          <View style={styles.showcaseHeader}>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 18,
                marginTop: 7,
              }}>
              New Designs
            </Text>
            <TouchableOpacity style={styles.viewMoreButton}>
              <View style={styles.centerItem}>
                <Text style={styles.viewMoreText}>View More</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 25}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {showcaseItem.map((row, index) => (
                <View key={index} style={styles.showcaseItem}>
                  {row.showcase}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </View>
    </ScrollView>
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
    marginTop: 15,
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
    width: wp('87%'),
    height: hp('19%'),
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
  viewMoreButton: {
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
  menuButton: {
    width: wp('18%'),
    height: hp('9%'),
    borderRadius: 20,
  },
  categoryButton: {
    backgroundColor: '#FFB672',
  },
  flashSaleButton: {
    backgroundColor: '#D586B4',
  },
  bestSellerButton: {
    backgroundColor: '#8A9CCC',
  },
  allPromosButton: {
    backgroundColor: '#5EB5C9',
  },
  centerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 5,
  },
  viewMoreText: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
  },
  showcaseHeader: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
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
    marginRight: 15,
    borderRadius: 15,
    width: 150,
    height: 230,
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
});

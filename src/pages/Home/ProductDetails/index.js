import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import DropDownPicker from 'react-native-dropdown-picker';

import Showcase1 from '../../../assets/images/showcase1.svg';
import Showcase2 from '../../../assets/images/showcase2.svg';
import Showcase3 from '../../../assets/images/showcase3.svg';
import Showcase4 from '../../../assets/images/showcase4.svg';

export default function ProductDetails({navigation}) {
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
        {/* <View style={styles.header}></View>
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
        </View> */}

        <Image
          source={require('../../../assets/images/product1.png')}
          width={wp('100%')}
          height={320}
        />

        <View style={styles.itemPrice}>
          <View style={styles.itemPriceAlign}>
            <View style={styles.itemPriceTextAlign}>
              <View>
                <Text style={styles.itemPriceTextStyle}>Rp99.000</Text>
                <Text style={styles.itemNameTextStyle}>RGB Astronaut</Text>
              </View>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <View style={styles.btnAddToWishlist}>
                      <Icon name="heart" size={20} color={'#1C252E'} />
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.buttonShare}>
                      <Icon name="share-alt" size={20} color={'#1C252E'} />
                    </View>
                  </TouchableOpacity>
                </View>
                <View>
                  <Text style={styles.itemSoldTextStyle}>2507 sold</Text>
                </View>
              </View>
            </View>

            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity>
                <View style={styles.btnReviews}>
                  <Icon name="star" size={12} color={'#FEAC5E'} />
                  <Text style={styles.itemReviewsRatingTextStyle}>4.8</Text>
                  <Text style={styles.itemReviewCountTextStyle}>(2501)</Text>
                </View>
              </TouchableOpacity>
              <View style={styles.bestSellerBadge}>
                <Text style={styles.bestSellerBadgeText}>BEST SELLER</Text>
              </View>
            </View>
          </View>
        </View>

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
            containerStyle={{
              height: 40,
              width: 351,
              alignSelf: 'center',
              marginTop: 7,
              borderRadius: 10,
            }}
            style={{
              backgroundColor: '#F1F3F6',
              borderWidth: 0,
            }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            labelStyle={{
              fontFamily: 'Montserrat-Regular',
              fontSize: 12,
            }}
            selectedLabelStyle={{
              fontFamily: 'Montserrat-Bold',
              fontSize: 12,
            }}
            dropDownMaxHeight={250}
            dropDownStyle={{
              backgroundColor: '#F1F3F6',
              borderWidth: 0,
              marginTop: 5,
              marginBottom: 5,
              borderRadius: 10,
            }}
          />
        </View>

        <View style={styles.boxDescription}>
          <View style={{marginTop: 15, marginStart: 30, marginEnd: 30}}>
            <Text style={styles.descriptionTitleTextStyle}>Description</Text>
            <Text style={styles.descriptionTextStyle}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 310,
            backgroundColor: '#FFF',
            marginTop: 7,
          }}>
          <View style={styles.showcaseHeader}>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 14,
              }}>
              Similar Products
            </Text>
            <TouchableOpacity
              style={styles.viewMoreButton}
              onPress={() => navigation.navigate('SimilarProducts')}>
              <View style={styles.centerItem}>
                <Text style={styles.viewMoreText}>View More</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              marginLeft: 30,
            }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {showcaseItem.map((row, index) => (
                <View key={index} style={styles.showcaseItem}>
                  {row.showcase}
                </View>
              ))}
            </ScrollView>
          </View>
        </View>

        <View
          style={{
            width: '100%',
            height: 350,
            backgroundColor: '#FFF',
            marginTop: 7,
          }}>
          <View style={styles.showcaseHeader}>
            <Text
              style={{
                fontFamily: 'Montserrat-Bold',
                fontSize: 14,
              }}>
              Latest Review
            </Text>
            <TouchableOpacity
              style={styles.viewMoreButton}
              onPress={() => navigation.navigate('Reviews')}>
              <View style={styles.centerItem}>
                <Text style={styles.viewMoreText}>View More</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View>
            <View
              style={{
                marginStart: 30,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Icon name="star" size={30} color={'#FEAC5E'} />
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 16,
                  marginLeft: 10,
                  marginRight: 5,
                }}>
                4.8
              </Text>
              <Text
                style={{
                  fontFamily: 'Montserrat-Regular',
                  fontSize: 12,
                }}>
                from 2501 reviews
              </Text>
            </View>

            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginStart: 30,
                  marginTop: 15,
                }}>
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 12,
                    marginLeft: 10,
                    marginRight: 3,
                  }}>
                  from
                </Text>
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 12,
                  }}>
                  Andre
                </Text>
              </View>
              <View style={{marginStart: 30, marginTop: 10}}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 12,
                  }}>
                  Very good product...{'\n'}I liked it
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginStart: 30,
                  marginTop: 15,
                }}>
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 12,
                    marginLeft: 10,
                    marginRight: 3,
                  }}>
                  from
                </Text>
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 12,
                  }}>
                  Asvian
                </Text>
              </View>
              <View style={{marginStart: 30, marginTop: 10}}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 12,
                  }}>
                  This is a masterpiece{'\n'}Incredible design...{'\n'}
                  Superbbbbbbbbbb
                </Text>
              </View>
            </View>
            <View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginStart: 30,
                  marginTop: 15,
                }}>
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Icon name="star" size={24} color={'#FEAC5E'} />
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 12,
                    marginLeft: 10,
                    marginRight: 3,
                  }}>
                  from
                </Text>
                <Text
                  style={{
                    fontFamily: 'Montserrat-SemiBold',
                    fontSize: 12,
                  }}>
                  Fulo
                </Text>
              </View>
              <View style={{marginStart: 30, marginTop: 10}}>
                <Text
                  style={{
                    fontFamily: 'Montserrat-Regular',
                    fontSize: 12,
                  }}>
                  Amazing!{'\n'}I loved it...
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            marginTop: 7,
            paddingStart: 30,
            paddingEnd: 30,
            flexDirection: 'row',
            width: '100%',
            height: 80,
            backgroundColor: '#FFF',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>
          <TouchableOpacity
            style={{
              width: 165,
              height: 50,
              backgroundColor: '#E5E5E5',
              borderRadius: 10,
            }}>
            <View style={styles.centerItem}>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 14,
                }}>
                Buy Now
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: 165,
              height: 50,
              backgroundColor: '#FFB672',
              borderRadius: 10,
            }}>
            <View style={styles.centerItem}>
              <Text
                style={{
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 14,
                  color: '#FFF',
                }}>
                Add To Cart
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // header: {
  //   width: wp('100%'),
  //   height: 65,
  //   backgroundColor: '#FFF',
  //   marginTop: 30,
  //   position: 'absolute',
  //   top: 0,
  //   flex: 1,
  //   alignSelf: 'stretch',
  //   right: 0,
  //   left: 0,
  // },
  // itemsHeader: {
  //   marginTop: 45,
  //   marginEnd: 15,
  //   marginStart: 15,
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   justifyContent: 'space-around',
  // },
  // boxSearch: {
  //   width: 212,
  //   height: 34,
  //   backgroundColor: '#F1F3F6',
  //   borderRadius: 10,
  // },
  // itemsSearch: {
  //   flexDirection: 'row',
  //   paddingLeft: 10,
  //   paddingVertical: 8,
  // },
  // textSearch: {
  //   fontFamily: 'Montserrat-Regular',
  //   fontSize: 12,
  //   color: '#C4C4C4',
  //   paddingLeft: 7,
  //   paddingVertical: 1,
  // },
  // notification: {
  //   position: 'absolute',
  //   backgroundColor: '#FF0000',
  //   borderRadius: 14 / 2,
  //   width: 14,
  //   height: 14,
  //   top: 0,
  //   right: 0,
  //   color: '#FFF',
  //   fontFamily: 'Montserrat-Bold',
  //   fontSize: 8,
  //   paddingVertical: 2,
  //   paddingHorizontal: 5,
  // },
  itemPrice: {
    width: wp('100%'),
    height: 125,
    backgroundColor: '#FFF',
  },
  itemPriceAlign: {
    marginTop: 15,
    marginStart: 30,
  },
  itemPriceTextAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginEnd: 30,
  },
  itemPriceTextStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
  },
  itemNameTextStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
  },
  btnAddToWishlist: {
    backgroundColor: '#F1F3F6',
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 10,
  },
  buttonShare: {
    backgroundColor: '#F1F3F6',
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemSoldTextStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    textAlign: 'right',
    marginTop: 10,
  },
  btnReviews: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFF',
    width: 90,
    height: 25,
    borderRadius: 5,
    borderColor: '#F1F3F6',
    borderWidth: 2,
    paddingStart: 8,
    paddingEnd: 8,
  },
  itemReviewsRatingTextStyle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
  },
  itemReviewCountTextStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
  },
  bestSellerBadge: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#FFB672',
    width: 90,
    height: 25,
    borderRadius: 5,
    marginStart: 5,
    paddingStart: 8,
    paddingEnd: 8,
  },
  bestSellerBadgeText: {
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 10,
    color: '#FFF',
  },
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
  boxDescription: {
    width: '100%',
    height: 280,
    marginTop: 7,
    backgroundColor: '#FFF',
  },
  descriptionTitleTextStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginBottom: 10,
  },
  descriptionTextStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    textAlign: 'left',
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

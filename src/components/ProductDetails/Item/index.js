import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Item({toReviews}) {
  return (
    <View>
      <Image
        source={require('../../../assets/images/product1.png')}
        style={styles.imgItem}
      />
      <View style={styles.priceItem}>
        <View style={styles.priceItemAlign}>
          <View style={styles.priceItemTextAlign}>
            <View>
              <Text style={styles.priceItemTextStyle}>Rp99.000</Text>
              <Text style={styles.titleItemTextStyle}>RGB Astronaut</Text>
            </View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity>
                  <View style={styles.btnWishlist}>
                    <Icon name="heart" size={20} color={'#1C252E'} />
                  </View>
                </TouchableOpacity>
                <TouchableOpacity>
                  <View style={styles.btnShare}>
                    <Icon name="share-alt" size={20} color={'#1C252E'} />
                  </View>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.soldCountItemTextStyle}>2507 sold</Text>
              </View>
            </View>
          </View>

          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity onPress={toReviews}>
              <View style={styles.btnReviews}>
                <Icon name="star" size={12} color={'#FEAC5E'} />
                <Text style={styles.ratingItemTextStyle}>4.8</Text>
                <Text style={styles.reviewsItemTextStyle}>(2501)</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.bestSellerBadge}>
              <Text style={styles.bestSellerBadgeText}>BEST SELLER</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imgItem: {
    width: '100%',
    height: 320,
  },
  priceItem: {
    width: '100%',
    height: 125,
    backgroundColor: '#FFF',
    marginBottom: 7,
  },
  priceItemAlign: {
    marginTop: 15,
    marginStart: 30,
  },
  priceItemTextAlign: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginEnd: 30,
  },
  priceItemTextStyle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
  },
  titleItemTextStyle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
  },
  btnWishlist: {
    backgroundColor: '#F1F3F6',
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginEnd: 10,
  },
  btnShare: {
    backgroundColor: '#F1F3F6',
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  soldCountItemTextStyle: {
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
  ratingItemTextStyle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
  },
  reviewsItemTextStyle: {
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
});

import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import Showcase1 from '../../../assets/images/showcase1.svg';
import Showcase2 from '../../../assets/images/showcase2.svg';
import Showcase3 from '../../../assets/images/showcase3.svg';
import Showcase4 from '../../../assets/images/showcase4.svg';

export default function Showcase({toProductDetails, toSimilarProducts}) {
  const [showcase] = useState([
    {
      showcase: (
        <TouchableOpacity
          style={[styles.containerShowcase, {backgroundColor: '#92C7D950'}]}
          onPress={toProductDetails}>
          <Showcase1 style={styles.imgShowcase} />
          <View style={styles.imgAlign}>
            <Text style={styles.titleItem}>RGB Astronaut{'\n'}ASTRO-7</Text>
            <View style={styles.favoriteIcon}>
              <Text style={styles.priceItem}>Rp99.000</Text>
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
          style={[styles.containerShowcase, {backgroundColor: '#F65F6025'}]}>
          <Showcase2 style={styles.imgShowcase} />
          <View style={styles.imgAlign}>
            <Text style={styles.titleItem}>Adult Groot{'\n'}MARVEL-9</Text>
            <View style={styles.favoriteIcon}>
              <Text style={styles.priceItem}>Rp99.000</Text>
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
          style={[styles.containerShowcase, {backgroundColor: '#D6D5F575'}]}>
          <Showcase3 style={styles.imgShowcase} />
          <View style={styles.imgAlign}>
            <Text style={styles.titleItem}>Baba Yaga{'\n'}FORTNITE-16</Text>
            <View style={styles.favoriteIcon}>
              <Text style={styles.priceItem}>Rp99.000</Text>
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
          style={[styles.containerShowcase, {backgroundColor: '#F6825125'}]}>
          <Showcase4 style={styles.imgShowcase} />
          <View style={styles.imgAlign}>
            <Text style={styles.titleItem}>Sniper Girl{'\n'}PUBG-2</Text>
            <View style={styles.favoriteIcon}>
              <Text style={styles.priceItem}>Rp99.000</Text>
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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Similar Products</Text>
        <TouchableOpacity
          style={styles.btnViewMore}
          onPress={toSimilarProducts}>
          <View style={styles.center}>
            <Text style={styles.textViewMore}>View More</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.showcaseAlign}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {showcase.map((row, index) => (
            <View key={index} style={styles.containerShowcase}>
              {row.showcase}
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 310,
    backgroundColor: '#FFF',
    marginBottom: 7,
  },
  header: {
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 30,
  },
  textHeader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  btnViewMore: {
    backgroundColor: '#1C252E',
    width: 75,
    height: 30,
    borderRadius: 10,
  },
  textViewMore: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  showcaseAlign: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 30,
  },
  containerShowcase: {
    marginRight: 15,
    borderRadius: 15,
    width: 150,
    height: 230,
  },
  imgShowcase: {
    width: 138,
    height: 134,
    marginTop: 6,
    alignSelf: 'center',
  },
  imgAlign: {
    marginTop: 10,
    marginLeft: 15,
  },
  titleItem: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
  },
  favoriteIcon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 15,
  },
  priceItem: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 12,
    marginTop: 10,
  },
});

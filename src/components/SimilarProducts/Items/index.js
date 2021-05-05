import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import Item1 from '../../../assets/images/showcase1.svg';
import Item2 from '../../../assets/images/showcase2.svg';
import Item3 from '../../../assets/images/showcase3.svg';
import Item4 from '../../../assets/images/showcase4.svg';

export default function Items() {
  const [item] = useState([
    {
      item: (
        <TouchableOpacity
          style={[styles.containerItem, {backgroundColor: '#92C7D950'}]}>
          <Item1 style={styles.imgItem} />
          <View style={styles.alignText}>
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
      item: (
        <TouchableOpacity
          style={[styles.containerItem, {backgroundColor: '#F65F6025'}]}>
          <Item2 style={styles.imgItem} />
          <View style={styles.alignText}>
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
      item: (
        <TouchableOpacity
          style={[styles.containerItem, {backgroundColor: '#D6D5F575'}]}>
          <Item3 style={styles.imgItem} />
          <View style={styles.alignText}>
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
      item: (
        <TouchableOpacity
          style={[styles.containerItem, {backgroundColor: '#F6825125'}]}>
          <Item4 style={styles.imgItem} />
          <View style={styles.alignText}>
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
    {
      item: (
        <TouchableOpacity
          style={[styles.containerItem, {backgroundColor: '#F6825125'}]}>
          <Item4 style={styles.imgItem} />
          <View style={styles.alignText}>
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
      {item.map((row, index) => (
        <View key={index}>
          <View style={styles.containerItem}>{row.item}</View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop: 15,
    marginBottom: 15,
  },
  containerItem: {
    borderRadius: 15,
    width: 150,
    height: 230,
    marginBottom: 15,
  },
  imgItem: {
    width: 138,
    height: 134,
    marginTop: 6,
    alignSelf: 'center',
  },
  alignText: {
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

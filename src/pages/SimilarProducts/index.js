import React, {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import Showcase1 from '../../assets/images/showcase1.svg';
import Showcase2 from '../../assets/images/showcase2.svg';
import Showcase3 from '../../assets/images/showcase3.svg';
import Showcase4 from '../../assets/images/showcase4.svg';

export default function SimilarProducts() {
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
  centerItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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

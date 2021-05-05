import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Stars() {
  return (
    <View style={styles.starsAlign}>
      <Icon name="star" size={24} color={'#FEAC5E'} />
      <Icon name="star" size={24} color={'#FEAC5E'} />
      <Icon name="star" size={24} color={'#FEAC5E'} />
      <Icon name="star" size={24} color={'#FEAC5E'} />
      <Icon name="star" size={24} color={'#FEAC5E'} />
    </View>
  );
}

export default function Items() {
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.header}>
          <Stars />
          <Text style={styles.reviewerText}>from</Text>
          <Text style={styles.reviewerName}>Asvian</Text>
        </View>
        <View style={styles.reviewTextAlign}>
          <Text style={styles.reviewText}>
            This is a masterpiece{'\n'}Incredible design...{'\n'}
            Superbbbbbbbbbb
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.header}>
          <Stars />
          <Text style={styles.reviewerText}>from</Text>
          <Text style={styles.reviewerName}>Asvian</Text>
        </View>
        <View style={styles.reviewTextAlign}>
          <Text style={styles.reviewText}>
            This is a masterpiece{'\n'}Incredible design...{'\n'}
            Superbbbbbbbbbb
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.header}>
          <Stars />
          <Text style={styles.reviewerText}>from</Text>
          <Text style={styles.reviewerName}>Asvian</Text>
        </View>
        <View style={styles.reviewTextAlign}>
          <Text style={styles.reviewText}>
            This is a masterpiece{'\n'}Incredible design...{'\n'}
            Superbbbbbbbbbb
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.header}>
          <Stars />
          <Text style={styles.reviewerText}>from</Text>
          <Text style={styles.reviewerName}>Asvian</Text>
        </View>
        <View style={styles.reviewTextAlign}>
          <Text style={styles.reviewText}>
            This is a masterpiece{'\n'}Incredible design...{'\n'}
            Superbbbbbbbbbb
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.header}>
          <Stars />
          <Text style={styles.reviewerText}>from</Text>
          <Text style={styles.reviewerName}>Asvian</Text>
        </View>
        <View style={styles.reviewTextAlign}>
          <Text style={styles.reviewText}>
            This is a masterpiece{'\n'}Incredible design...{'\n'}
            Superbbbbbbbbbb
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.header}>
          <Stars />
          <Text style={styles.reviewerText}>from</Text>
          <Text style={styles.reviewerName}>Asvian</Text>
        </View>
        <View style={styles.reviewTextAlign}>
          <Text style={styles.reviewText}>
            This is a masterpiece{'\n'}Incredible design...{'\n'}
            Superbbbbbbbbbb
          </Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.header}>
          <Stars />
          <Text style={styles.reviewerText}>from</Text>
          <Text style={styles.reviewerName}>Asvian</Text>
        </View>
        <View style={styles.reviewTextAlign}>
          <Text style={styles.reviewText}>
            This is a masterpiece{'\n'}Incredible design...{'\n'}
            Superbbbbbbbbbb
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 105,
    marginTop: 5,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginStart: 30,
    marginTop: 15,
  },
  reviewerText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    marginLeft: 10,
    marginRight: 3,
  },
  reviewerName: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
  },
  reviewTextAlign: {
    marginStart: 30,
    marginTop: 10,
  },
  reviewText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  starsAlign: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
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

export default function Reviews({toReviews}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titleHeader}>Latest Review</Text>
        <TouchableOpacity style={styles.btnViewMore} onPress={toReviews}>
          <View style={styles.center}>
            <Text style={styles.btnText}>View More</Text>
          </View>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.containerAlign}>
          <Icon name="star" size={30} color={'#FEAC5E'} />
          <Text style={styles.ratingText}>4.8</Text>
          <Text style={styles.ratingCountText}>from 2501 reviews</Text>
        </View>

        <View>
          <View style={[styles.containerAlign, {marginTop: 15}]}>
            <Stars />
            <Text style={styles.reviewerText}>from</Text>
            <Text style={styles.reviewerName}>Andre</Text>
          </View>
          <View style={styles.reviewTextAlign}>
            <Text style={styles.reviewText}>
              Very good product...{'\n'}I liked it
            </Text>
          </View>
        </View>
        <View>
          <View style={[styles.containerAlign, {marginTop: 15}]}>
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
        <View>
          <View style={[styles.containerAlign, {marginTop: 15}]}>
            <Stars />
            <Text style={styles.reviewerText}>from</Text>
            <Text style={styles.reviewerName}>Fulo</Text>
          </View>
          <View style={styles.reviewTextAlign}>
            <Text style={styles.reviewText}>Amazing!{'\n'}I loved it...</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 350,
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
  titleHeader: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
  },
  btnViewMore: {
    backgroundColor: '#1C252E',
    width: 75,
    height: 30,
    borderRadius: 10,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#FFF',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
  },
  containerAlign: {
    marginStart: 30,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 5,
  },
  ratingCountText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
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

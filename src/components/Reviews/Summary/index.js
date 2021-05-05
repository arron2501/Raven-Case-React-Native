import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function Stars() {
  return (
    <View style={{flexDirection: 'row'}}>
      <Icon name="star" size={15} color={'#FEAC5E'} />
      <Icon name="star" size={15} color={'#FEAC5E'} />
      <Icon name="star" size={15} color={'#FEAC5E'} />
      <Icon name="star" size={15} color={'#FEAC5E'} />
      <Icon name="star" size={15} color={'#FEAC5E'} />
    </View>
  );
}

export default function Reviews() {
  return (
    <View>
      <View style={styles.containerSummary}>
        <View style={styles.containerTextSummary}>
          <View style={styles.alignTextSummary}>
            <Text style={styles.scoreSummary}>4.8</Text>
            <Text style={styles.scoreMax}> / 5</Text>
          </View>
          <Stars />
          <Text style={styles.reviewCount}>2501 reviews</Text>
        </View>

        <View style={styles.containerIconSummary}>
          <View style={styles.alignIconSummary}>
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <View style={styles.baseMeterSummary}>
              <View style={[styles.meterSummary, {width: 90}]}></View>
            </View>
          </View>
          <View style={styles.alignIconSummary}>
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <View style={styles.baseMeterSummary}>
              <View style={[styles.meterSummary, {width: 50}]}></View>
            </View>
          </View>
          <View style={styles.alignIconSummary}>
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <View style={styles.baseMeterSummary}></View>
          </View>
          <View style={styles.alignIconSummary}>
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <View style={styles.baseMeterSummary}></View>
          </View>
          <View style={styles.alignIconSummary}>
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <View style={styles.baseMeterSummary}></View>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerSummary: {
    width: '100%',
    height: 105,
    backgroundColor: '#FFF',
    flex: 1,
    flexWrap: 'wrap',
    marginTop: 5,
  },
  containerTextSummary: {
    width: '40%',
    borderEndWidth: 5,
    borderEndColor: '#F1F3F6',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingVertical: 15,
  },
  alignTextSummary: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  scoreSummary: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 24,
  },
  scoreMax: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    paddingBottom: 3,
  },
  reviewCount: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
  },
  containerIconSummary: {
    width: '60%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  alignIconSummary: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  baseMeterSummary: {
    width: 100,
    height: 5,
    backgroundColor: '#F1F3F6',
    borderRadius: 50,
    marginLeft: 15,
  },
  meterSummary: {
    height: 5,
    backgroundColor: '#FEAC5E',
    borderRadius: 50,
  },
});

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function SortButtons() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.alignHorizontal}>
          <View style={styles.alignCenter}>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, {width: 100}]}>
              <Text style={styles.btnText}>With Pictures</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, {flexDirection: 'row'}]}>
              <Text style={styles.btnText}>1 </Text>
              <Icon name="star" size={15} color={'#F1F3F6'} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, {flexDirection: 'row'}]}>
              <Text style={styles.btnText}>2 </Text>
              <Icon name="star" size={15} color={'#F1F3F6'} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, {flexDirection: 'row'}]}>
              <Text style={styles.btnText}>3 </Text>
              <Icon name="star" size={15} color={'#F1F3F6'} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, {flexDirection: 'row'}]}>
              <Text style={styles.btnText}>4 </Text>
              <Icon name="star" size={15} color={'#F1F3F6'} />
            </TouchableOpacity>
            <TouchableOpacity style={[styles.btn, {flexDirection: 'row'}]}>
              <Text style={styles.btnText}>5 </Text>
              <Icon name="star" size={15} color={'#F1F3F6'} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 45,
    backgroundColor: '#FFF',
    marginTop: 5,
  },
  alignHorizontal: {
    flexDirection: 'row',
    marginStart: 35,
    marginEnd: 30,
  },
  alignCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btn: {
    width: 50,
    height: 25,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#F1F3F6',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  btnText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
  },
});

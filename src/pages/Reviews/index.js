import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export default function Reviews() {
  return (
    <ScrollView>
      <View>
        <View style={styles.header}></View>
        <View style={styles.itemsHeader}>
          <TouchableOpacity>
            <Icon name="arrow-left" size={24} color={'#1C252E'} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Buyer's Reviews</Text>
        </View>
      </View>

      <View style={styles.reviewSummary}>
        <View
          style={{
            width: '40%',
            borderEndWidth: 3,
            borderEndColor: '#F1F3F6',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            paddingVertical: 15,
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
            }}>
            <Text style={styles.scoreSummary}>4.8</Text>
            <Text style={styles.scoreMax}> / 5</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
          </View>
          <Text style={styles.reviewCount}>2501 reviews</Text>
        </View>

        <View
          style={{
            width: '60%',
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <View
              style={{
                width: 100,
                height: 5,
                backgroundColor: '#F1F3F6',
                borderRadius: 50,
                marginLeft: 15,
              }}>
              <View
                style={{
                  width: 90,
                  height: 5,
                  backgroundColor: '#FEAC5E',
                  borderRadius: 50,
                }}></View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <View
              style={{
                width: 100,
                height: 5,
                backgroundColor: '#F1F3F6',
                borderRadius: 50,
                marginLeft: 15,
              }}>
              <View
                style={{
                  width: 25,
                  height: 5,
                  backgroundColor: '#FEAC5E',
                  borderRadius: 50,
                }}></View>
            </View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <View
              style={{
                width: 100,
                height: 5,
                backgroundColor: '#F1F3F6',
                borderRadius: 50,
                marginLeft: 15,
              }}></View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <View
              style={{
                width: 100,
                height: 5,
                backgroundColor: '#F1F3F6',
                borderRadius: 50,
                marginLeft: 15,
              }}></View>
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon name="star" size={15} color={'#FEAC5E'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <Icon name="star" size={15} color={'#F1F3F6'} />
            <View
              style={{
                width: 100,
                height: 5,
                backgroundColor: '#F1F3F6',
                borderRadius: 50,
                marginLeft: 15,
              }}></View>
          </View>
        </View>
      </View>

      <View
        style={{
          width: '100%',
          height: 45,
          backgroundColor: '#FFF',
          marginTop: 5,
        }}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View
            style={{
              flexDirection: 'row',
              marginStart: 35,
              marginEnd: 30,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: 50,
                  height: 25,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: '#F1F3F6',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10,
                }}>
                <Text style={styles.reviewMenuText}>All</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: 100,
                  height: 25,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: '#F1F3F6',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10,
                }}>
                <Text style={styles.reviewMenuText}>With Pictures</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: 50,
                  height: 25,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: '#F1F3F6',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10,
                }}>
                <Text style={styles.reviewMenuText}>1 </Text>
                <Icon name="star" size={15} color={'#F1F3F6'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: 50,
                  height: 25,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: '#F1F3F6',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10,
                }}>
                <Text style={styles.reviewMenuText}>2 </Text>
                <Icon name="star" size={15} color={'#F1F3F6'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: 50,
                  height: 25,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: '#F1F3F6',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10,
                }}>
                <Text style={styles.reviewMenuText}>3 </Text>
                <Icon name="star" size={15} color={'#F1F3F6'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: 50,
                  height: 25,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: '#F1F3F6',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 10,
                }}>
                <Text style={styles.reviewMenuText}>4 </Text>
                <Icon name="star" size={15} color={'#F1F3F6'} />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  width: 50,
                  height: 25,
                  borderRadius: 20,
                  borderWidth: 2,
                  borderColor: '#F1F3F6',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={styles.reviewMenuText}>5 </Text>
                <Icon name="star" size={15} color={'#F1F3F6'} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>

      <View
        style={{
          width: '100%',
          height: 105,
          marginTop: 5,
          backgroundColor: '#FFF',
        }}>
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
      <View
        style={{
          width: '100%',
          height: 105,
          marginTop: 5,
          backgroundColor: '#FFF',
        }}>
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
      <View
        style={{
          width: '100%',
          height: 105,
          marginTop: 5,
          backgroundColor: '#FFF',
        }}>
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
      <View
        style={{
          width: '100%',
          height: 105,
          marginTop: 5,
          backgroundColor: '#FFF',
        }}>
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
      <View
        style={{
          width: '100%',
          height: 105,
          marginTop: 5,
          backgroundColor: '#FFF',
        }}>
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
      <View
        style={{
          width: '100%',
          height: 105,
          marginTop: 5,
          backgroundColor: '#FFF',
        }}>
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
      <View
        style={{
          width: '100%',
          height: 105,
          marginTop: 5,
          backgroundColor: '#FFF',
        }}>
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    width: wp('100%'),
    height: 65,
    backgroundColor: '#FFF',
    marginTop: 30,
    position: 'absolute',
    top: 0,
    flex: 1,
    alignSelf: 'stretch',
    right: 0,
    left: 0,
  },
  itemsHeader: {
    marginTop: 50,
    marginEnd: 15,
    marginStart: 36,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 14,
    marginStart: 30,
  },
  reviewSummary: {
    marginTop: 25,
    width: wp('100%'),
    height: 105,
    backgroundColor: '#FFF',
    flex: 1,
    flexWrap: 'wrap',
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
  reviewMenuText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
  },
});

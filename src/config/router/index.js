import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../../pages/Home';
import ProductDetails from '../../pages/ProductDetails';
import NewDesigns from '../../pages/NewDesigns';
import SimilarProducts from '../../pages/SimilarProducts';
import Reviews from '../../pages/Reviews';

const Nav = createBottomTabNavigator();
const Stack = createStackNavigator();

function BottomNav() {
  return (
    <Nav.Navigator
      tabBarOptions={{
        activeTintColor: '#1C252E',
        inactiveTintColor: 'gray',
        paddingVertical: 10,
        style: {
          height: 65,
          paddingTop: 10,
        },
        labelStyle: {
          fontFamily: 'Montserrat-SemiBold',
          fontSize: 12,
          marginBottom: 10,
        },
      }}
      backBehavior="none">
      <Nav.Screen
        name="Shop"
        component={Home}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-bag" size={20} color={color} />
          ),
        }}
      />
      <Nav.Screen
        name="Wishlist"
        component={Wishlist}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="heart" size={20} color={color} />
          ),
          tabBarBadge: 12,
          tabBarBadgeStyle: {
            width: 16,
            height: 16,
            fontFamily: 'Montserrat-Bold',
            fontSize: 8,
          },
        }}
      />
      <Nav.Screen
        name="Cart"
        component={Cart}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="shopping-cart" size={20} color={color} />
          ),
          tabBarBadge: 5,
          tabBarBadgeStyle: {
            width: 16,
            height: 16,
            fontFamily: 'Montserrat-Bold',
            fontSize: 8,
          },
        }}
      />
      <Nav.Screen
        name="Orders"
        component={Orders}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="list-ul" size={20} color={color} />
          ),
          tabBarBadge: 2,
          tabBarBadgeStyle: {
            width: 16,
            height: 16,
            fontFamily: 'Montserrat-Bold',
            fontSize: 8,
          },
        }}
      />
      <Nav.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Icon name="user" size={20} color={color} />
          ),
        }}
      />
    </Nav.Navigator>
  );
}

function Wishlist() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Wishlist</Text>
    </View>
  );
}
function Cart() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Cart</Text>
    </View>
  );
}
function Orders() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Orders</Text>
    </View>
  );
}
function Profile() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Profile</Text>
    </View>
  );
}

function HeaderProduct() {
  return (
    <View style={styles.itemsHeader}>
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
    </View>
  );
}

class Router extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          {/* Dibawah screen ini, BottomNav tidak akan visible */}
          <Stack.Screen
            name="BottomNav"
            component={BottomNav}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="ProductDetails"
            component={ProductDetails}
            options={{
              headerTitle: props => <HeaderProduct />,
              headerTintColor: '#1C252E',
            }}
          />
          <Stack.Screen
            name="NewDesigns"
            component={NewDesigns}
            options={{
              headerTitle: 'New Designs',
              headerTitleStyle: {
                fontFamily: 'Montserrat-Bold',
                fontSize: 18,
              },
            }}
          />
          <Stack.Screen
            name="SimilarProducts"
            component={SimilarProducts}
            options={{
              headerTitle: 'Similar Products',
              headerTitleStyle: {
                fontFamily: 'Montserrat-Bold',
                fontSize: 18,
              },
            }}
          />
          <Stack.Screen name="Reviews" component={Reviews} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  itemsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  boxSearch: {
    width: '85%',
    height: '100%',
    backgroundColor: '#F1F3F6',
    borderRadius: 10,
  },
  itemsSearch: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingVertical: 10,
  },
  textSearch: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    color: '#C4C4C4',
    paddingLeft: 7,
    paddingVertical: 1,
  },
  notification: {
    position: 'absolute',
    backgroundColor: '#FF0000',
    borderRadius: 14 / 2,
    width: 14,
    height: 14,
    top: 0,
    right: 0,
    color: '#FFF',
    fontFamily: 'Montserrat-Bold',
    fontSize: 8,
    paddingVertical: 2,
    paddingHorizontal: 5,
  },
});

export default Router;

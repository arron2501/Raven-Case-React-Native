import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Home from '../../pages/Home';

const Nav = createBottomTabNavigator();

function Shop() {
  return <Home />;
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

export default function BottomNav() {
  return (
    <NavigationContainer>
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
          component={Shop}
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
    </NavigationContainer>
  );
}

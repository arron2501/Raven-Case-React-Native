import 'react-native-gesture-handler';
import SplashScreen from 'react-native-splash-screen';
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, Platform, StatusBar} from 'react-native';

StatusBar.setBarStyle('light-content');
if (Platform.OS === 'android') {
  StatusBar.setBackgroundColor('rgba(0,0,0,0)');
  StatusBar.setTranslucent(true);
}

import Icon from 'react-native-vector-icons/FontAwesome';

import Home from './pages/Home';
import ProductDetails from './pages/ProductDetails';
import NewDesigns from './pages/NewDesigns';
import SimilarProducts from './pages/SimilarProducts';
import Reviews from './pages/Reviews';

function Shop() {
  return <Home />;
}
function Wishlist() {
  return <ProductDetails />;
}
function Cart() {
  return <NewDesigns />;
}
function Orders() {
  return <SimilarProducts />;
}
function Profile() {
  return <Reviews />;
}

const Tab = createBottomTabNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  });
  return (
    <NavigationContainer>
      <Tab.Navigator
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
        }}>
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{
            tabBarIcon: ({color, size}) => (
              // <ShopIcon width={24} height={24} />
              <Icon name="shopping-bag" size={20} color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Wishlist"
          component={Wishlist}
          options={{
            tabBarIcon: ({color, size}) => (
              // <WishlistIcon width={24} height={24} />
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
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({color, size}) => (
              // <CartIcon width={24} height={24} />
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
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarIcon: ({color, size}) => (
              // <OrdersIcon width={24} height={24} />
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
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarIcon: ({color, size}) => (
              // <ProfileIcon width={24} height={24} />
              <Icon name="user" size={20} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

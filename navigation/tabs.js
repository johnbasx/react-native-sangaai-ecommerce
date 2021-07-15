import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Home, Categories, Cart, Profile} from '../screens';
import {HomeScreen} from '../screens/HomeScreen';
import {CategoriesScreen} from '../screens/CategoriesScreen';
import {CartScreen} from '../screens/CartScreen';
import {ProfileScreen} from '../screens/ProfileScreen';
import {COLORS, FONTS, icons, SIZES} from '../constants';
import {TabIcon} from '../components';
import HomeStacks from './stacks';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        style: {
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          elevation: 0,
          backgroundColor: COLORS.white,
          borderTopColor: 'transparent',
          height: Platform.OS === 'android' ? 60 : SIZES.tabHeight,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={icons.home}
              iconFocused={icons.homeFilled}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Categories',
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={icons.category}
              iconFocused={icons.categoryFilled}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarBadge: 3,
          tabBarBadgeStyle: {
            marginTop: 10,
            backgroundColor: COLORS.red400,
            color: COLORS.white,
          },
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={icons.cart}
              iconFocused={icons.cartFilled}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon
              focused={focused}
              icon={icons.profile}
              iconFocused={icons.profileFilled}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;

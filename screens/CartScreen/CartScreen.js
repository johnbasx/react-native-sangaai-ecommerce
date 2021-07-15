import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';

import {Header} from '../../components';
import {COLORS, FONTS, SIZES} from '../../constants';

import {CartItem, cartItems} from './components';

export const CartScreen = ({navigation}) => {
  const [totalCartItems, setTotalCartItems] = useState(3);
  const [loading, setLoading] = useState(false);

  const delay = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <Header
        title="Cart Screen"
        searchButton
        saveButton
        backButton
        navigation={navigation}
      />
      <ScrollView>
        <View
          style={{
            paddingHorizontal: SIZES.padding,
            marginVertical: 20,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.black,
              borderRadius: SIZES.radiusS,
              height: SIZES.headerHeight,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => delay()}>
            {!loading ? (
              <>
                <Text style={{...FONTS.semiH3, color: COLORS.white}}>
                  Proceed to Buy
                </Text>
                <Text style={{...FONTS.semiH5, color: COLORS.gray100}}>
                  ({totalCartItems} items)
                </Text>
              </>
            ) : (
              <Text style={{...FONTS.semiH3, color: COLORS.white}}>
                Loading...
              </Text>
            )}
          </TouchableOpacity>
        </View>
        {cartItems.map(item => (
          <CartItem
            navigation={navigation}
            item={item}
            key={'key' + item.id.toString()}
          />
        ))}

        <View
          style={{
            paddingHorizontal: SIZES.padding,
            marginTop: 20,
            marginBottom: SIZES.height / 8,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: COLORS.black,
              borderRadius: SIZES.radiusS,
              height: SIZES.headerHeight,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => delay()}>
            {!loading ? (
              <>
                <Text style={{...FONTS.semiH3, color: COLORS.white}}>
                  Proceed to Buy
                </Text>
                <Text style={{...FONTS.semiH5, color: COLORS.gray100}}>
                  ({totalCartItems} items)
                </Text>
              </>
            ) : (
              <Text style={{...FONTS.semiH3, color: COLORS.white}}>
                Loading...
              </Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Pressable,
  StyleSheet,
  TextInput,
  Image,
} from 'react-native';

import {Gap, Header} from '../../components';
import {COLORS, FONTS, SIZES} from '../../constants';
import {cartIcons} from './assets';

import {
  CartItem,
  cartItems,
  CouponInput,
  GiftWrap,
  ProceedButton,
} from './components';

export const CartScreen = ({navigation}) => {
  const [totalCartItems, setTotalCartItems] = useState(3);
  const [loading, setLoading] = useState(false);
  const [giftPrice, setGiftPrice] = useState(0);

  const onPress = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  };

  const Border = () => {
    return <View style={{backgroundColor: COLORS.gray100, height: 1}}></View>;
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
            backgroundColor: COLORS.green,
            height: 30,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{...FONTS.body5, color: COLORS.white}}>
            <Text style={{...FONTS.semiH5}}>GRAB 15% off </Text>on Special
            Products
          </Text>
        </View>

        {/* Cart Items start */}
        {cartItems.map(item => (
          <CartItem
            navigation={navigation}
            item={item}
            key={'key' + item.id.toString()}
          />
        ))}
        {/* Cart Items end */}

        {/* Apply Coupon */}

        <CouponInput />

        <Border />

        <GiftWrap price={setGiftPrice} />

        <Border />

        <View style={{marginBottom: SIZES.height / 8}} />
      </ScrollView>
      <View style={styles.customBottomContainer}>
        <ProceedButton
          navigation={navigation}
          loading={loading}
          text="Proceed to buy"
          subText={`(${totalCartItems} items)`}
          onPress={onPress}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  customBottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: SIZES.width,
    paddingBottom: SIZES.padding,
    backgroundColor: COLORS.white,
  },
});

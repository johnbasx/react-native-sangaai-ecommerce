import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';
import {cartIcons} from '../assets';

export const CouponInput = () => {
  const [couponInput, setCouponInput] = useState('');
  const [couponInputVisible, setCouponInputVisible] = useState(true);
  const [couponValid, setCouponValid] = useState(true);

  const onApply = () => {
    if (couponInput === 'HELLO10') {
      setCouponValid(true);
      setCouponInputVisible(false);
    } else {
      setCouponValid(false);
      setCouponInputVisible(true);
    }
  };

  const changeCoupon = () => {
    setCouponInputVisible(true);
    setCouponInput('');
  };

  return (
    <View style={{padding: SIZES.padding}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={cartIcons.tag}
          resizeMode="contain"
          style={{
            height: SIZES.radius,
            width: SIZES.radius,
            marginRight: SIZES.padding,
          }}
        />
        <Text style={{...FONTS.h3}}>APPLY COUPON</Text>
      </View>
      {couponValid && !couponInputVisible ? (
        <View style={styles.couponSuccessContainer}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image source={cartIcons.success} style={styles.succesIcon} />
            <Text style={styles.couponStyle}>{couponInput}</Text>
          </View>
          <TouchableOpacity onPress={changeCoupon}>
            <Text style={{...FONTS.semiH4, color: COLORS.red400}}>
              CHANGE COUPON
            </Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={[
            styles.inputContainer,
            {
              borderWidth: 2,
              borderColor: couponValid ? COLORS.transparent : COLORS.red400,
            },
          ]}>
          <TextInput
            placeholder="COUPON"
            clearButtonMode="while-editing"
            autoCapitalize="characters"
            style={styles.textInput}
            onChangeText={setCouponInput}
            value={couponInput}
          />
          <TouchableOpacity onPress={onApply}>
            <Text style={{...FONTS.semiH4, color: COLORS.red400}}>APPLY</Text>
          </TouchableOpacity>
        </View>
      )}

      {couponValid ? null : (
        <Text style={{...FONTS.body5, color: COLORS.red400}}>
          Sorry, this coupon is not valid!
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  couponSuccessContainer: {
    height: SIZES.inputHeight,
    marginVertical: SIZES.base,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  succesIcon: {
    height: SIZES.radius,
    width: SIZES.radius,
    tintColor: COLORS.green,
    marginRight: SIZES.padding,
  },
  couponStyle: {
    ...FONTS.semiH3,
    textAlign: 'left',
    color: COLORS.green,
    letterSpacing: 2,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: SIZES.radiusS,
    marginVertical: SIZES.base,
    paddingHorizontal: SIZES.padding,
    height: SIZES.inputHeight,
    backgroundColor: COLORS.grayInput,
  },
  textInput: {
    flex: 1,
    ...FONTS.semiH3,
    lineHeight: 20,
    letterSpacing: 2,
    alignItems: 'center',
  },
});

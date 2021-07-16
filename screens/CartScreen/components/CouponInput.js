import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../../constants';

export const CouponInput = () => {
  const [input, setInput] = useState('');

  return (
    <View style={{padding: SIZES.padding}}>
      <Text style={{...FONTS.h3}}>APPLY COUPON</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="COUPON"
          clearButtonMode="while-editing"
          autoCapitalize="characters"
          style={styles.textInput}
        />
        <TouchableOpacity>
          <Text style={{...FONTS.semiH4, color: COLORS.red400}}>CHECK</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    letterSpacing: 2,
    alignItems: 'center',
  },
});

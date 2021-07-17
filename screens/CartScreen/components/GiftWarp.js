import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import CheckBox from 'react-native-check-box';

import {COLORS, FONTS, SIZES} from '../../../constants';
import {cartIcons} from '../assets';

export const GiftWrap = ({price}) => {
  let giftPrice = 50;
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    if (isSelected) {
      price(50);
    } else price(0);
  }, [isSelected]);

  return (
    <View
      style={{
        padding: SIZES.padding,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image
          source={cartIcons.gift}
          style={{
            height: SIZES.radius,
            width: SIZES.radius,
            marginRight: SIZES.padding,
          }}
        />
        <Text style={{...FONTS.h3}}>Gift Wrap</Text>
        <Text style={{...FONTS.body5, marginLeft: SIZES.padding}}>
          (Rs. {giftPrice})
        </Text>
      </View>
      <CheckBox
        onClick={() => setIsSelected(!isSelected)}
        isChecked={isSelected}
        checkBoxColor={COLORS.red400}
        uncheckedCheckBoxColor={COLORS.gray400}
      />
    </View>
  );
};

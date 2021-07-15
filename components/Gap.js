import React from 'react';
import {View, StyleSheet} from 'react-native';

import {SIZES, COLORS, FONTS, icons} from '../constants';

export const Gap = () => {
  return (
    <View
      style={{
        height: SIZES.base,
        backgroundColor: COLORS.gray100,
        marginVertical: SIZES.padding,
      }}
    />
  );
};

import React from 'react';
import {View, Image} from 'react-native';

import {images, COLORS, SIZES, icons, FONTS} from '../../../constants';

export const Logo = ({height, width}) => {
  return (
    <View
      style={{
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={images.logoDark}
        resizeMode="contain"
        style={{
          height: height,
          width: width,
        }}
      />
    </View>
  );
};

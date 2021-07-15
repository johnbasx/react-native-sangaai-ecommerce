import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
} from 'react-native';

import {COLORS, SIZES, icons, FONTS} from '../../../constants';

export const Location = ({navigation, onPress}) => {
  return (
    <View style={styles.container}>
      {/* Location */}
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}
        onPress={onPress}>
        <Image
          source={icons.location}
          resizeMode="contain"
          style={styles.image}
        />
        <Text style={styles.textView}>Location Detect...</Text>
        <Image
          source={icons.arrowDown}
          resizeMode="contain"
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 10,
    paddingHorizontal: SIZES.padding,
  },
  image: {width: 15, height: 15},
  textView: {
    ...FONTS.semiH4,
    marginLeft: 5,
    marginRight: 10,
  },
});

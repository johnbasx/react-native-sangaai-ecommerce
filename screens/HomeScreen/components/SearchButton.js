import React from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

import {images, COLORS, SIZES, icons, FONTS} from '../../../constants';

export const SearchButton = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate('Search')}>
        <View style={styles.iconContainer}>
          <Image
            source={icons.searchGray}
            style={{
              height: 28,
              width: 28,
            }}
          />
        </View>
        <Text style={styles.text}>Search an item or store</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.gray100,
    borderRadius: 10,
    height: SIZES.inputHeight,
    flex: 1,
    width: '100%',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: SIZES.inputHeight,
    width: SIZES.inputHeight,
  },
  text: {...FONTS.semiH4, color: COLORS.gray400},
});

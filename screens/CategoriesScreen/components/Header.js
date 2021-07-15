import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {FONTS, SIZES, icons, COLORS} from '../../../constants';

export const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.goBack()}>
        <Image
          source={icons.back}
          style={styles.backImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
      <Text style={styles.header}>Categories</Text>
      <TouchableOpacity style={styles.backButton}>
        <Image
          source={icons.search}
          style={styles.searchImage}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: SIZES.padding - 10,
  },
  button: {
    backgroundColor: 'transparent',
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
  },
  backImage: {
    height: 20,
    width: 20,
  },
  header: {
    ...FONTS.semiH3,
  },
  searchImage: {
    height: 32,
    width: 32,
  },
});

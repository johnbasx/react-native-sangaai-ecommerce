import React from 'react';
import {Image, Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import {SIZES, COLORS, FONTS, icons} from '../../../constants';

export const ProfileInfo = ({navigation, name, phone, email}) => {
  return (
    <View style={styles.container}>
      <View style={{flex: 1}}>
        <Text style={{...FONTS.h2}}>Hi, {name}</Text>
        {/* <Icon name="call" size={30} /> */}
        <Text style={styles.text}>+91-{phone}</Text>
        <Text style={styles.text}>{email}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.editButton}>
          <Text style={{...FONTS.semiH4, color: COLORS.darkGreen}}>EDIT</Text>
          <Image
            source={icons.back}
            resizeMode="contain"
            style={styles.arrow}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    marginTop: SIZES.padding,
  },
  text: {...FONTS.body5, color: COLORS.gray900},
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: SIZES.padding,
    width: 50,
  },
  arrow: {
    height: 10,
    width: 10,
    tintColor: COLORS.darkGreen,
    transform: [{rotate: '180deg'}],
  },
});

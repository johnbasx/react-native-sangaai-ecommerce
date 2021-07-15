import React from 'react';
import {Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

import {SIZES, COLORS, FONTS, icons} from '../../../constants';

export const ProfileItem = ({navigation, data}) => {
  return (
    <TouchableOpacity key={'key' + data.title} style={styles.boxContainer}>
      <Image
        source={data.image}
        resizeMode="contain"
        style={{height: 40, width: 40}}
      />
      <View
        style={{
          marginLeft: 20,
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
        <Text style={{...FONTS.semiH4}}>{data.title}</Text>
        <Text style={{...FONTS.body5, color: COLORS.gray400}}>
          {data.subHeading}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: SIZES.padding,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray100,
  },
});

import React from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import {FONTS, SIZES, icons, COLORS} from '../../../constants';

export const CategoryItem = ({navigation, category}) => {
  return (
    <TouchableOpacity
      style={{...styles.container, backgroundColor: category.color}}>
      <View style={styles.textView}>
        <Text style={styles.title} numberOfLines={3}>
          {category.name}
        </Text>
        <Text style={styles.subHeading} numberOfLines={1}>
          {category.subHeading}
        </Text>
      </View>
      <Image
        source={{uri: category.image}}
        style={styles.image}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 100,
    marginVertical: 2,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textView: {
    paddingHorizontal: SIZES.padding,
    maxWidth: SIZES.width - 100,
  },
  title: {
    ...FONTS.h3,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  subHeading: {
    ...FONTS.body5,
    color: COLORS.gray900,
  },
  image: {
    height: 100,
    width: 100,
  },
});

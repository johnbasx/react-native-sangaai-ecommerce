import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {SIZES, COLORS, images, FONTS} from '../../../constants';

export const AdBannerItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.cardView}>
      <Image style={styles.image} source={{uri: item.url}} resizeMode="cover" />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}
        colors={[COLORS.transparent, COLORS.transparentBlack7]}
        style={styles.gradient}>
        <View style={styles.textView}>
          {/* Title */}
          <Text style={styles.itemTitle}>{item.title}</Text>
          {/* Description */}
          <Text
            style={{
              ...FONTS.body5,
              color: COLORS.white,
            }}>
            {item.description}
          </Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cardView: {
    flex: 1,
    height: 150,
    width: SIZES.width - 2 * SIZES.padding,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    marginHorizontal: SIZES.padding,
  },
  gradient: {
    height: 150,
    width: '100%',
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: 20,
    paddingHorizontal: SIZES.padding,
  },
  textView: {
    position: 'absolute',
    bottom: 10,
    margin: 10,
    left: 5,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: SIZES.radius,
  },
  itemTitle: {
    color: COLORS.white,
    ...FONTS.h2,
  },
});

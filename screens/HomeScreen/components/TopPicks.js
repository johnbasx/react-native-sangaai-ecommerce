import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {FONTS, SIZES, COLORS} from '../../../constants';
import {dummyTopPicks} from './dummyTopPicks';

export const TopPicks = () => {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Top Picks</Text>
      </View>

      <View style={styles.topPicks}>
        {dummyTopPicks?.map(data => (
          <TouchableOpacity
            key={'key' + data.id}
            style={{margin: 2}}
            onPress={() => console.log(data.title)}>
            <Image
              source={{uri: data.image}}
              style={styles.image}
              resizeMode="cover"
            />
            <LinearGradient
              start={{x: 0, y: 0}}
              end={{x: 0, y: 1}}
              colors={[COLORS.transparent, COLORS.transparentBlack3]}
              style={styles.gradient}>
              <View style={styles.textView}>
                {/* Heading */}
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.price}>₹{data.price}</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    paddingHorizontal: SIZES.padding,
  },
  heading: {
    ...FONTS.h2,
  },
  topPicks: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  image: {height: 250, width: SIZES.width / 2 - 4},
  gradient: {
    height: '100%',
    width: '100%',
    bottom: 0,
    position: 'absolute',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
  },
  textView: {
    paddingBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: COLORS.white,
    ...FONTS.semiH3,
    textAlign: 'center',
  },
  price: {
    marginTop: 10,
    color: COLORS.white,
    ...FONTS.h1,
  },
});

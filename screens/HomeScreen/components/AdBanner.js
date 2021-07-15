import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  FlatList,
  Animated,
} from 'react-native';

import {images, COLORS, SIZES, icons, FONTS} from '../../../constants';

import {AdBannerItem} from './AdBannerItem';
import {dummyCarouselData} from './dummyCarousel';

export const AdBanner = () => {
  const [extraData, setExtraData] = useState(dummyCarouselData);

  const extendData = () => {
    setExtraData(prevData => [...prevData, dummyCarouselData]);
  };
  return (
    <View
      style={{
        // paddingHorizontal: SIZES.padding,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 5,
      }}>
      {/* <TouchableOpacity
        style={{
          height: 150,
          width: '100%',
          backgroundColor: COLORS.darkGreen,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>AD Banner</Text>
      </TouchableOpacity> */}
      <FlatList
        data={dummyCarouselData}
        keyExtractor={(item, index) => 'key' + index}
        horizontal
        pagingEnabled
        scrollEnabled
        snapToAlignment="center"
        scrollEventThrottle={16}
        decelerationRate={'fast'}
        showsHorizontalScrollIndicator={false}
        extraData={extraData}
        onEndReached={() => {
          extendData();
        }}
        renderItem={({item}) => {
          return <AdBannerItem item={item} />;
        }}
      />
    </View>
  );
};

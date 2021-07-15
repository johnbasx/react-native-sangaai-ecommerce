import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  EdgeInsetsPropType,
  ScrollView,
  Image,
  StatusBar,
  FlatList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {dummyData, images, COLORS, SIZES, FONTS, icons} from '../constants';
import {Location} from './HomeScreen/components';

const numCols = 2;

const Home = ({navigation}) => {
  const renderAdvertisement = () => {
    return (
      <View
        style={{
          height: 100,
          marginTop: 10,
          width: SIZES.width - 2 * SIZES.padding,
          backgroundColor: COLORS.darkGreen,
          borderRadius: 20,
        }}></View>
    );
  };

  const renderSearch = () => {
    return (
      <View
        style={{
          marginTop: 10,
          justifyContent: 'center',
          alignItems: 'center',
          paddingHorizontal: SIZES.padding,
        }}>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            backgroundColor: COLORS.gray100,
            borderRadius: 10,
            height: 50,
            width: SIZES.width - 50,
            borderWidth: 1,
            borderColor: COLORS.gray100,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              width: 40,
            }}>
            <Image
              source={icons.searchGray}
              style={{
                height: 28,
                width: 28,
              }}
            />
          </View>
          <Text style={{...FONTS.semiH4, color: COLORS.gray400}}>
            Search an item or store
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  // Flatlist Header
  const renderHeader = () => {
    return (
      <>
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
              height: 30,
              width: 200,
            }}
          />
        </View>
        <Location navigation={navigation} />

        {/* Search */}
        {renderSearch()}

        {/* Advertisement */}
        {renderAdvertisement()}
      </>
    );
  };

  const renderAdItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          borderWidth: 1,
          borderColor: COLORS.gray400,
          borderRadius: SIZES.padding,
          justifyContent: 'center',
          alignItems: 'center',
          height: 250,
          margin: 5,
        }}>
        <Text>{item.category}</Text>
      </View>
    );
  };

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <View
          style={{
            flex: 1,
            paddingBottom: 65,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <FlatList
            data={dummyData}
            renderItem={renderAdItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={numCols}
            ListHeaderComponent={renderHeader}
            showsVerticalScrollIndicator={false}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;

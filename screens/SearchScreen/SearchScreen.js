import React from 'react';
import {
  View,
  Text,
  TextInput,
  SafeAreaView,
  StatusBar,
  Image,
  TouchableOpacity,
  StyleSheet,
  Platform,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../../constants';

export const SearchScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}>
          <Image
            source={icons.back}
            style={{
              height: 20,
              width: 20,
            }}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <View style={styles.textContainer}>
          <View style={styles.searchContainer}>
            <View style={styles.iconContainer}>
              <Image
                source={icons.searchGray}
                style={{
                  height: 28,
                  width: 28,
                }}
              />
            </View>
            <TextInput
              style={styles.textInput}
              placeholder="Search an item or store"
              autoFocus={true}
              clearButtonMode="while-editing"
              numberOfLines={1}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    height: SIZES.headerHeight,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  // textContainer: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   backgroundColor: COLORS.gray100,
  //   borderRadius: SIZES.radiusS,
  //   paddingHorizontal: SIZES.radiusS,
  //   paddingRight: 0,
  // },
  // textInput: {
  //   ...FONTS.body4,
  //   paddingLeft: 5,
  //   height: SIZES.inputHeight,
  //   flex: 1,
  //   textAlignVertical: 'center',
  //   backgroundColor: COLORS.gray100,
  //   borderRadius: SIZES.radiusS,
  //   color: COLORS.black,
  // },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: COLORS.gray100,
    borderRadius: SIZES.radiusS,
    height: SIZES.inputHeight,
    width: '100%',
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: SIZES.inputHeight,
    width: SIZES.inputHeight,
  },
  textInput: {flex: 1, ...FONTS.body4, color: COLORS.gray400},
});

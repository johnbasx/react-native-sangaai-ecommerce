import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import {COLORS, FONTS, icons, SIZES} from '../constants';

export const Header = ({
  children,
  navigation,
  title,
  backButton,
  searchButton,
  saveButton,
  bottomBorder = true,
}) => {
  return (
    <View
      style={{
        ...styles.container,
        borderBottomColor: bottomBorder ? COLORS.gray100 : COLORS.transparent,
      }}>
      {/** header title */}
      {title ? (
        <View style={styles.headerTitleContainer}>
          <Text style={styles.headerText}>{title}</Text>
        </View>
      ) : null}

      {/* header image */}
      {children ? (
        <View style={[styles.headerTitleContainer, {top: 5}]}>{children}</View>
      ) : null}

      {/* back button */}
      {navigation || backButton ? (
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={() => navigation.navigate('Home')}>
          <Image source={icons.back} style={styles.back} resizeMode="contain" />
        </TouchableOpacity>
      ) : (
        // empty view to push other icons to the back
        <View></View>
      )}

      {/* save button */}
      <View style={styles.otherIconsContainer}>
        {saveButton ? (
          <TouchableOpacity style={styles.buttonContainer}>
            <Image
              source={icons.love}
              style={styles.love}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}

        {/* search button  */}
        {searchButton ? (
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Search')}>
            <Image
              source={icons.search}
              style={styles.search}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: SIZES.headerHeight,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  buttonContainer: {
    height: SIZES.iconContainer,
    width: SIZES.iconContainer,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: COLORS.gray100,
    borderRadius: SIZES.radiusS,
  },
  back: {
    height: 20,
    width: 20,
  },
  headerTitleContainer: {
    flex: 1,
    position: 'absolute',
    width: SIZES.width,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // backgroundColor: COLORS.gray,
    paddingHorizontal: SIZES.padding * 4,
  },
  headerImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: SIZES.headerHeight,
  },
  headerText: {
    ...FONTS.semiH3,
  },
  headerImage: {
    height: 40,
  },
  otherIconsContainer: {
    flexDirection: 'row',
  },
  love: {
    height: 22,
    width: 22,
  },
  search: {
    height: 32,
    width: 32,
  },
});

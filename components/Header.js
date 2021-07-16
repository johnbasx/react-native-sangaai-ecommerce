import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  Image,
  TouchableHighlight,
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
        <TouchableHighlight
          underlayColor={COLORS.gray100}
          style={styles.buttonContainer}
          onPress={() => navigation.goBack()}>
          <Image source={icons.back} style={styles.back} resizeMode="contain" />
        </TouchableHighlight>
      ) : (
        // empty view to push other icons to the back
        <View></View>
      )}

      {/* save button */}
      <View style={styles.otherIconsContainer}>
        {saveButton ? (
          <TouchableHighlight
            underlayColor={COLORS.gray100}
            style={styles.buttonContainer}>
            <Image
              source={icons.love}
              style={styles.love}
              resizeMode="contain"
            />
          </TouchableHighlight>
        ) : null}

        {/* search button  */}
        {searchButton ? (
          <TouchableHighlight
            underlayColor={COLORS.gray100}
            style={styles.buttonContainer}
            onPress={() => navigation.navigate('Search')}>
            <Image
              source={icons.search}
              style={styles.search}
              resizeMode="contain"
            />
          </TouchableHighlight>
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
    borderRadius: SIZES.radiusL,
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

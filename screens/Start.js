import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
  Image,
  StyleSheet,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {images, COLORS, SIZES, FONTS} from '../constants';

const Start = ({navigation}) => {
  const renderHeader = () => {
    return (
      <View
        style={{
          height: SIZES.height > 700 ? '65%' : '60%',
        }}>
        <ImageBackground
          source={images.startBackground}
          style={{flex: 1, justifyContent: 'flex-end'}}
          resizeMode="cover">
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 0, y: 1}}
            colors={[COLORS.transparent, COLORS.black]}
            style={{
              height: 400,
              justifyContent: 'flex-end',
              alignItems: 'center',
              paddingHorizontal: SIZES.padding,
            }}>
            <View style={styles.logoContainer}>
              <Image
                source={images.logoLight}
                resizeMode="contain"
                style={{
                  height: 100,
                  width: 250,
                }}
              />
              <Text style={{color: COLORS.gray100, ...FONTS.h4}}>
                all you want in one place
              </Text>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  };

  const gettingStarted = () => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 150,
        }}>
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigation.replace('Tabs')}>
          <Text style={{...FONTS.h2}}>Get Started</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: COLORS.black}}>
      <StatusBar barStyle="light-content" />
      {/* Header */}
      {renderHeader()}

      {/* button */}
      {gettingStarted()}
    </View>
  );
};

export default Start;

// Styles
const styles = StyleSheet.create({
  logoContainer: {
    height: 100,
    width: 250,
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  startButton: {
    backgroundColor: COLORS.white,
    width: SIZES.width - 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    borderRadius: 20,
  },
});

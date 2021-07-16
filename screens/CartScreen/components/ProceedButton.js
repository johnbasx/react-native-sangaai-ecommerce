import React from 'react';
import {
  Text,
  View,
  Pressable,
  TouchableHighlight,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

import {COLORS, SIZES, FONTS} from '../../../constants';

export const ProceedButton = ({
  navigation,
  text,
  subText,
  onPress,
  loading,
}) => {
  return (
    <View style={styles.container}>
      <TouchableHighlight
        underlayColor={COLORS.gray900}
        style={styles.button}
        onPress={onPress}>
        {!loading ? (
          <>
            <Text style={{...FONTS.semiH3, color: COLORS.white}}>{text}</Text>
            <Text style={{...FONTS.semiH5, color: COLORS.gray100}}>
              {subText}
            </Text>
          </>
        ) : (
          <Text style={{...FONTS.semiH3, color: COLORS.white}}>Loading...</Text>
        )}
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    marginVertical: 20,
  },
  button: {
    backgroundColor: COLORS.black,
    borderRadius: SIZES.radiusS,
    height: SIZES.headerHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

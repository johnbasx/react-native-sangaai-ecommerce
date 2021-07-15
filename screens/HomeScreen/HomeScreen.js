import React, {useCallback, useMemo, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  EdgeInsetsPropType,
  ScrollView,
  Image,
  StatusBar,
  SafeAreaView,
  FlatList,
  TextInput,
} from 'react-native';
import {BottomSheetModal, BottomSheetModalProvider} from '@gorhom/bottom-sheet';

import {dummyData, images, COLORS, SIZES, FONTS, icons} from '../../constants';
import {Location, Logo, SearchButton, AdBanner, TopPicks} from './components';
import {Header} from '../../components';

const numCols = 2;

export const HomeScreen = ({navigation}) => {
  // ref
  const bottomSheetModalRef = useRef(null);

  // variables snap points
  const snapPoints = useMemo(() => ['0%', '90%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleSheetChanges = useCallback(index =>
    console.log('handleSheetChanges', index),
  );

  // Header for home screen
  const renderHeader = handlePresentModalPress => {
    return (
      <>
        {/* Logo */}
        {/* <Logo height={30} width={200} /> */}

        {/* Location */}
        <Location navigation={navigation} onPress={handlePresentModalPress} />

        {/* Search */}
        <SearchButton navigation={navigation} />
      </>
    );
  };

  return (
    <BottomSheetModalProvider>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <ScrollView
          style={{
            flex: 1,
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}>
          <Header bottomBorder={false} searchButton>
            <Logo height={30} width={200} />
          </Header>
          {renderHeader(handlePresentModalPress)}
          <AdBanner />
          <TopPicks />
          {/* Bottom Sheet */}
          <BottomSheetModal
            ref={bottomSheetModalRef}
            index={1}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}>
            <View style={{padding: SIZES.padding}}>
              <TextInput
                placeholder="Enter location"
                style={{
                  backgroundColor: COLORS.gray100,
                  padding: SIZES.padding,
                  color: COLORS.black,
                  borderRadius: SIZES.radiusS,
                  ...FONTS.semiH3,
                  alignItems: 'center',
                  alignContent: 'center',
                  justifyContent: 'center',
                }}
              />
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                  paddingVertical: 10,
                }}>
                {dummyData.map(data => (
                  <View
                    key={'key' + data.id}
                    style={{
                      height: SIZES.headerHeight * 2,
                      paddingHorizontal: SIZES.padding,
                      backgroundColor: COLORS.gray100,
                      marginVertical: 4,
                      justifyContent: 'center',
                      borderRadius: SIZES.radiusS,
                    }}>
                    <Text style={{...FONTS.body5}}>{data.title}</Text>
                  </View>
                ))}
              </ScrollView>
            </View>
          </BottomSheetModal>
          {/* End margin */}
          <View style={{margin: 40}}></View>
        </ScrollView>
      </SafeAreaView>
    </BottomSheetModalProvider>
  );
};

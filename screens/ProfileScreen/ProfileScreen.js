import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  Image,
  RefreshControl,
} from 'react-native';

import {Gap, Header} from '../../components';
import {COLORS, FONTS, icons, images, SIZES} from '../../constants';
import {ProfileInfo, profileData} from './components';
import {ProfileItem} from './components/ProfileItem';

const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};

export const ProfileScreen = ({navigation}) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        {/* Header */}
        <Header
          title="Profile"
          navigation={navigation}
          searchButton
          saveButton
        />

        {/* Accounts display */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {/* profile component */}
          <ProfileInfo
            navigation={navigation}
            name="John"
            phone="9953366748"
            email="johnbaswork@gmail.com"
          />

          {/* gap  */}
          <Gap />

          <View
            style={{
              paddingHorizontal: SIZES.padding,
              marginBottom: SIZES.padding * 6,
            }}>
            {profileData.map(data => (
              // profile item mapping data
              <ProfileItem
                navigation={navigation}
                data={data}
                key={'key' + data.title}
              />
            ))}
            <View
              style={{
                flex: 1,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={images.logoDark}
                resizeMode="contain"
                style={{height: 40, width: 200, tintColor: COLORS.gray100}}
              />
              <Text
                style={{
                  marginVertical: 10,
                  ...FONTS.body5,
                  color: COLORS.gray200,
                }}>
                version 1.0.1
              </Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

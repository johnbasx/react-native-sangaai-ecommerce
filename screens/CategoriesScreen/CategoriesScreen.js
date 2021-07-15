import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {Header} from '../../components';
import {FONTS, SIZES} from '../../constants';
import {CategoryItem} from './components';
import {dummyCategories} from './components/dummyCategories';

export const CategoriesScreen = ({navigation}) => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle="dark-content" />
        <Header
          title="Categories"
          navigation={navigation}
          searchButton
          saveButton
        />
        <ScrollView
          style={{
            flex: 1,
            paddingBottom: 100,
          }}
          showsVerticalScrollIndicator={false}>
          {/* Category Item */}
          {dummyCategories.map(data => (
            <CategoryItem category={data} key={'key' + data.id} />
          ))}
          {/* End space */}
          <View style={{margin: 40}}></View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

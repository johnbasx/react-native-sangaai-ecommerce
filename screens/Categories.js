import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const Categories = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Categories Screen</Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#111',
          paddingHorizontal: 10,
          paddingVertical: 4,
          borderRadius: 5,
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{color: '#fff'}}>Go to Home Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Categories;

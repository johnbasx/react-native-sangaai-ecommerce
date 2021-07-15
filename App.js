import React from 'react';
import {Start, Home, Login} from './screens';
import {SearchScreen} from './screens/SearchScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import Tabs from './navigation/tabs';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={'Start'}>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Tabs" component={Tabs} />
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

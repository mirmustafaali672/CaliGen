import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MoreScreen from '../MoreScreen';
import HomeScreen from '../HomeScreen';
import CreateUserScreen from '../UsersScreen/UsersDetailScreen';
import UsersScreen from '../UsersScreen/UsersMainScreen';

function MoreScreenNavigator(){
    const Stack = createNativeStackNavigator();
    return (
      <NavigationContainer independent={true}>
        <Stack.Navigator>
          <Stack.Screen options={{headerShown: false}} name="Login" component={MoreScreen} />
          <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen} />
          <Stack.Screen options={{headerShown: false}} name="CreateUserScreen" component={CreateUserScreen} />
          <Stack.Screen options={{headerShown: false}} name="UsersScreen" component={UsersScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
};

export default MoreScreenNavigator;
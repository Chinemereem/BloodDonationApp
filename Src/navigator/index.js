import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Header from '../screens/onboarding/index';
import Login from '../screens/authentication/Login';
import Register from '../screens/authentication/Register';
import ForgotPassword from '../screens/authentication/ForgotPassword';
import Home from '../screens/home/Home';

const Stack = createNativeStackNavigator();

export const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Header" component={Header} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

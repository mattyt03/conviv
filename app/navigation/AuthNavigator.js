import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import WelcomeScreen from '../screens/WelcomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import AppNavigator from './AppNavigator';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Welcome' component={WelcomeScreen} options={{headerShown: false}}/>
        <Stack.Screen name='Login' component={LoginScreen}/>
        <Stack.Screen name='Register' component={RegisterScreen}/>
        <Stack.Screen name='App' component={AppNavigator}/>
    </Stack.Navigator>
)

export default AuthNavigator;
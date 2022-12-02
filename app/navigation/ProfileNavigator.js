import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import ProfileScreen from '../screens/ProfileScreen';
import LoginScreen from '../screens/LoginScreen'
import AuthNavigator from './AuthNavigator';


const Stack = createStackNavigator();

const ProfileNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='Profile' component={ProfileScreen}/>
        <Stack.Screen name='Welcome' component={AuthNavigator}/>
    </Stack.Navigator>
)

export default ProfileNavigator;
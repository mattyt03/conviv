import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import EventsScreen from '../screens/EventsScreen'
import EventDetailsScreen from '../screens/EventDetailsScreen'
import UpcomingEventScreen from '../screens/UpcomingEventScreen'
import LiveEventScreen from '../screens/LiveEventScreen'
import MusicScreen from '../screens/MusicScreen'
import colors from '../config/colors';

const Stack = createStackNavigator();

export default EventNavigator = () => (
    <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
            name='Events'
            component={EventsScreen}
        />
        <Stack.Screen 
            name='LiveEventDetails'
            component={LiveEventScreen}
        />
        <Stack.Screen 
            name='UpcomingEventDetails'
            component={UpcomingEventScreen}
        />
        <Stack.Screen 
            name='Music'
            component={MusicScreen}
        />
    </Stack.Navigator>
)
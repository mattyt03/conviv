import React from 'react';
import {createStackNavigator} from '@react-navigation/stack'
import EventsScreen from '../screens/EventsScreen'
import EventDetailsScreen from '../screens/EventDetailsScreen'
import UpcomingEventScreen from '../screens/UpcomingEventScreen';
import LiveEventScreen from '../screens/LiveEventScreen';
import colors from '../config/colors';

const Stack = createStackNavigator();

export default FeedNavigator = () => (
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
    </Stack.Navigator>
)
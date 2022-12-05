import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CreateEventScreen from '../screens/CreateEventScreen'
import EventNavigator from './EventNavigator';
import ProfileNavigator from './ProfileNavigator'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import NewEventButton from './NewEventButton'
import routes from './routes';
import colors from '../config/colors';
import EventsScreen from '../screens/EventsScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => (
    <Tab.Navigator 
        screenOptions={
            {headerShown: false,
            tabBarStyle: {backgroundColor: colors.lightBlack,
                        borderTopColor: colors.lightBlack},
            tabBarShowLabel: false,
            // kinda sus
            tabBarIconStyle: {marginTop: 15},
            }
        }
    >
        <Tab.Screen 
            name='Feed' 
            component={EventNavigator}
            options={{
                tabBarIcon: ({color, size}) => 
                    <MaterialCommunityIcons name='home' color={color} size={35}/>
            }}
        />
        <Tab.Screen 
            name='CreateEvent' 
            component={CreateEventScreen} 
            options={({navigation}) => ({
                tabBarButton: () => 
                    <NewEventButton onPress={() => navigation.navigate(routes.CREATE_EVENT)}/>
            })}
        />
        <Tab.Screen 
            name='Profile' 
            component={ProfileNavigator}
            options={{
                tabBarIcon: ({color, size}) => 
                    <MaterialCommunityIcons name='account' color={color} size={35}/>
            }}
        />
    </Tab.Navigator>
)

export default AppNavigator;
import { StyleSheet, View, Image } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import colors from '../config/colors'
import AppText from '../components/AppText'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import EventList from '../components/EventList'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import defaultStyles from '../config/styles'
import { initialUpcomingEvents, finalUpcomingEvents } from '../data/upcomingevents'
import { liveEvents } from '../data/livevents'
import routes from '../navigation/routes'

// implement categories
// add host
// fix the header
// make it a scroll view

export default function EventsScreen() {

    const Tab = createMaterialTopTabNavigator();

    const LiveEventsList = () => (
        <EventList initialEvents={liveEvents} finalEvents={liveEvents} detailsPage={routes.LIVE_EVENT_DETAILS}/>
    )

    const UpcomingEventsList = () => (
        <EventList initialEvents={initialUpcomingEvents} finalEvents={finalUpcomingEvents} detailsPage={routes.UPCOMING_EVENT_DETAILS}/>
    )

    return (
        <Screen style={styles.screen}>
            <View style={styles.header}>
                {/* <MaterialCommunityIcons name={'map-marker'} size={48} color={colors.primary} style={styles.icon}/> */}
                <Image source={require('../assets/Conviv.png')} style={styles.image}/>
                <AppText style={styles.location}>{'UT Austin'}</AppText>
            </View>
            <Tab.Navigator
                screenOptions={{
                    tabBarStyle: {backgroundColor: colors.black},
                    tabBarLabelStyle: [defaultStyles.text, {fontWeight: 'bold'}],
                    tabBarIndicatorStyle: {backgroundColor: colors.primary},
                  }}
            >
                <Tab.Screen name='Now' component={LiveEventsList}/>
                <Tab.Screen name='Upcoming' component={UpcomingEventsList}/>
            </Tab.Navigator>
        </Screen>
  )
}

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 20,
        paddingBottom: 0,
    },
    icon: {
        marginRight: 10,
    },
    location: {
        fontSize: 48,
        color: colors.primary,
        // padding: 20,
        // paddingBottom: 0,
        fontWeight: 'bold',
    },
    screen: {
        // padding: 20,
        // backgroundColor: colors.black,
        flex: 1
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 15,
    }
})
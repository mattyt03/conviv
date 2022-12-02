import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import colors from '../config/colors'
import EventListItem from '../components/EventListItem'
import routes from '../navigation/routes'
import { RefreshControl } from 'react-native'
import { useNavigation } from '@react-navigation/core'

export default function EventList({initialEvents, finalEvents, detailsPage}) {
    const [events, setEvents] = useState(initialEvents);
    const [refreshing, setRefreshing] = useState(false);
    const navigation = useNavigation();

    return (
        <FlatList
            data={events}
            keyExtractor={event => event.id.toString()}
            renderItem={({item}) => 
                <EventListItem
                    title={item.title}
                    date={item.date}
                    price={'$' + item.price}
                    description={item.description}
                    location={item.location}
                    host={item.host}
                    tunrout={item.turnout}
                    image={item.image}
                    onPress={() => navigation.navigate(detailsPage, item)}
                />
            }
            refreshControl=
                {<RefreshControl
                    refreshing={refreshing}
                    onRefresh={() => {setEvents(finalEvents)}}
                    tintColor={colors.light}
                />}
        />
    )
}

const styles = StyleSheet.create({
})
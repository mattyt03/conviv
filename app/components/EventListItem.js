import { StyleSheet, Text, View, Image, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import AppText from './AppText'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
// add host?

export default function EventListItem({title, date, price, description, location, image, onPress}) {
  return (
    <TouchableOpacity
        onPress={onPress}>
            <View style={styles.container}>
                <Image style={styles.image} source={image} />
                <View style={styles.detailsContainer}>
                    <AppText style={styles.date} numberOfLines={1}>{date}</AppText>
                    <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
                    <AppText style={styles.text} numberOfLines={2}>{description}</AppText>
                    <View style={styles.priceAndLocationContainer}>
                        <View style={styles.location}>
                            <MaterialCommunityIcons name={'map-marker'} size={16} color={colors.light} style={styles.icon}/>
                            <AppText style={styles.text}>{location}</AppText>
                        </View>
                        {/* <AppText style={styles.text}>{price}</AppText> */}
                    </View>
                </View>
            </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 15,
        backgroundColor: colors.black
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 10,
        marginRight: 10
    },
    text: {
        color: colors.light,
        fontWeight: 'bold',
        fontSize: 16,
        // flex: 1
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    icon: {
        marginRight: 3,
    },
    // text: {
    //     color: colors.light,
    //     // fontWeight: 'bold',
    //     fontSize: 16,
    // },
    priceAndLocationContainer: {
        marginTop: 2,
        flexDirection: 'row',
        // justifyContent: 'space-between'
    },
    priceAndLocation: {
        color: colors.secondary,
        fontWeight: 'bold',
        fontSize: 16,
    },
    date: {
        color: colors.secondary,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
    },
    title: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 22,
        // fontWeight: '500',
        // textTransform: 'uppercase',
    }
})
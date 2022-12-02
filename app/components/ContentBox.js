import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import AppText from '../components/AppText'

export default function ContentBox({children, icon}) {
  return (
    <>
        <View style={styles.container}>
            <MaterialCommunityIcons name={icon} size={20} color={colors.medium} style={styles.icon}/>
            <AppText>{children}</AppText>
        </View>
        <View style={styles.separator}/>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
        flexDirection: 'row',
        // alignContent:'center',
        padding: 10,
        marginVertical: 10
    },
    icon: {
        marginRight: 10
    },
    separator: {
        width: '100%', 
        height: 1, 
        backgroundColor: colors.light
    },
})
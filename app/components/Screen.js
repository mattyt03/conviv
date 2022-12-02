import { StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import Constants from 'expo-constants'
import colors from '../config/colors'
// console.log(Constants)

export default function Screen({children, style}) {
    return (
        <>
        <SafeAreaView style={styles.topView}/>
        <View style={[styles.innerView, style]}>{children}</View>
        {/* <SafeAreaView style={styles.mainView}>
            <View style={[styles.innerView, style]}>{children}</View>
        </SafeAreaView> */}
        </>
      )
}

const styles = StyleSheet.create({
    mainView: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: colors.black,
    },
    topView: {
        flex: 0,
        backgroundColor: colors.black,
    },
    innerView: {
        flex: 1
    }
})
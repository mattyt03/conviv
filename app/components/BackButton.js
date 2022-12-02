import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from '../config/colors'

export default function BackButton({navigation}) {
  return (
    // refactor this
    <TouchableOpacity style={styles.button} onPress={navigation.goBack()}>
      <MaterialCommunityIcons name={'chevron-left'} size={40} color={colors.light}/>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.primary,
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 30,
        position: 'absolute'
        // padding: 15,
        // marginVertical: 10
    },
})
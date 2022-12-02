import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import { MaterialCommunityIcons } from '@expo/vector-icons';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function NewEventButton({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name='plus' color={colors.primary} size={50}/>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.secondary,
        // borderColor: colors.white,
        borderRadius: 40,
        // borderWidth: 10,
        bottom: 20,
        height: 80,
        width: 80,
    }
})
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import colors from '../config/colors'
import AppText from './AppText'

export default function Card({title, subtitle, image, onPress}) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.card}>
        <Image style={styles.image} source={image} />
        <View style={styles.detailsContainer}>
          <AppText style={styles.title} numberOfLines={1}>{title}</AppText>
          <AppText style={styles.subtitle} numberOfLines={1}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.lightBlack,
        marginBottom: 20,
        marginHorizontal: 20,
        overflow: 'hidden',
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 200,
    },
    subtitle: {
        color: colors.secondary,
        fontWeight: 'bold',
    },
    title: {
        color: colors.primary,
        fontWeight: 'bold',
        marginBottom: 10,
    },
})
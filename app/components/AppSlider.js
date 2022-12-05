import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';
import colors from '../config/colors';
import AppText from './AppText';
import Blink from './Blink';

export default function AppSlider({title, ...otherProps}) {
  return (
    <View style={styles.container}>
      <Blink duration={1000}>
        <AppText style={styles.title}>{title}</AppText>
      </Blink>
      <Slider
          style={{width: '75%', height: 10}}
          // how do you set a predefined value
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor={colors.secondary}
          // make this lighter
          maximumTrackTintColor={colors.darkSecondary}
          {...otherProps}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15
  },
  title: {
    color: colors.secondary,
    fontWeight: 'bold',
    // textTransform: 'uppercase',
    fontSize: 20,
    marginBottom: 10,
  },
})
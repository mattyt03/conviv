import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

const Ratings = () => {
  const [value, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  return (
    <View>
      <Text style={styles.text1}>
        OVERALL RATING
      </Text>
      <Slider style={styles.slider1}
        step={1}
        minimumValue={0}
        maximumValue={100}
        value={value}
        onValueChange={slideValue => setValue(slideValue)}
        minimumTrackTintColor="#7AC2E8"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="white"
      />
      <Text style={styles.text2}>
        MUSIC
      </Text>
      <Slider style={styles.slider2}
        step={1}
        minimumValue={0}
        maximumValue={100}
        value={value2}
        onValueChange={slideValue => setValue2(slideValue)}
        minimumTrackTintColor="#7AC2E8"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="white"
      />
      <Text style={styles.text3}>
        DRINKS
      </Text>
      <Slider style={styles.slider3}
        step={1}
        minimumValue={0}
        maximumValue={100}
        value={value3}
        onValueChange={slideValue => setValue3(slideValue)}
        minimumTrackTintColor="#7AC2E8"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="white"
      />
    </View>
  );
};

const styles = StyleSheet.create({

  slider1: {
    position: "absolute",
    alignContent: "center",
    width: 325,
    top: -27,
    
    left: 7,
  },

  slider2: {
    position: "absolute",
    alignContent: "center",
    width: 325,
    top: 27,
    
    left: 7,
  },

  slider3: {
    position: "absolute",
    alignContent: "center",
    width: 325,
    top: 87,
    left: 7,
  },

  text1: {
    position: "relative",
    color: 'white',
    top: -42,
    left: 12,
  },

text2: {
  position: "relative",
  color: 'white',
  top: -3,
  left: 12,

},

text3: {
  position: "relative",
  color: 'white',
  top: 42,
  left: 12,

},

})
export default Ratings;
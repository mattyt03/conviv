import React, { useState } from 'react';
import { Text, StyleSheet, View, TextInput } from 'react-native';
import Slider from '@react-native-community/slider';

const Ratings = () => {
  const [value1, setValue] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  return (
    <View>
      <Text style={styles.text1}>
        OVERALL RATING
      </Text>
      <Slider style={styles.slider1}
        disabled={true}
        step={1}
        minimumValue={0}
        maximumValue={100}
        value={value1}
        onValueChange={slideValue => setValue(slideValue)}
        minimumTrackTintColor="#7AC2E8"
        maximumTrackTintColor="#d3d3d3"
        thumbTintColor="white"
      />
      <Text style={styles.text2}>
        MUSIC
      </Text>
      <Slider style={styles.slider2}
        disabled={true}
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
        disabled={true}
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
    height: 0,
    top: 35,
  },

  slider2: {
    position: "relative",
    alignContent: "center",
    width: 325,
    height: 45,
    top: 35,
  },

  slider3: {
    position: "relative",
    alignContent: "center",
    width: 325,
    top: 35,
  },
  text1: {
    position: "relative",
    color: 'white',
    top: 0,
    left: 5,

    /* OVERALL RATING */

// position: absolute;
// width: 129px;
// height: 21px;
// left: 30px;
// top: 307px;

// font-family: 'SF Pro Text';
// font-style: normal;
// font-weight: 400;
// font-size: 12px;
// line-height: 14px;
// display: flex;
// align-items: center;

// color: #FBFBFB;


  },

text2: {
  position: "relative",
  color: 'white',
  top: 40,
  left: 5,

},

text3: {
  position: "relative",
  color: 'white',
  top: 40,
  left: 5,

},

})


export default Ratings;
import React from "react";
import { Text, StyleSheet} from "react-native";
// where did we get this name from
import defaultStyles from '../config/styles'

export default function AppText({ children, style, ...otherProps }) {
  return <Text style={[defaultStyles.text, style]} {...otherProps}>{children}</Text>;
}

const styles = StyleSheet.create({});
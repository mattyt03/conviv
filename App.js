import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';
// import EventDetailsScreen from './app/screens/EventDetailsScreen'
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';
import NavigationTheme from './app/navigation/NavigationTheme';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Screen from './app/components/Screen';

export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
      {/* <AuthNavigator/> */}
      <AppNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});

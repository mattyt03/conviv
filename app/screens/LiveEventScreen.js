import { StyleSheet, Text, View, ImageBackground, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import colors from '../config/colors'
import AppButton from '../components/AppButton';
import RatingsDisplay from '../components/RatingsDisplay'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import Screen from '../components/Screen';
import { ScrollView } from 'react-native';
import BackButton from '../components/BackButton';
import AppSlider from '../components/AppSlider';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';

// Live turnout: 62 people (followed by green arrow/red arrow)

export default function LiveEventScreen({route, navigation}) {
  const event = route.params;
  return (
    <ImageHeaderScrollView
      maxHeight={300}
      minHeight={0}
      headerImage={event.image}
      renderTouchableFixedForeground={() => (
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name={'chevron-left'} size={40} color={colors.light}/>
        </TouchableOpacity>
      )}
      scrollViewBackgroundColor={colors.black}
    >
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{event.title}</AppText>
        <View style={styles.priceAndLocationContainer}>
          <View style={styles.dataContainer}>
            <MaterialCommunityIcons name={'clock'} size={32} color={colors.secondary} style={styles.icon}/>
            <AppText style={styles.date}>{event.date}</AppText>
          </View>
          <View style={styles.dataContainer}>
            <MaterialCommunityIcons name={'account-multiple'} size={32} color={colors.secondary} style={styles.icon}/>
            <AppText style={styles.date}>{event.turnout} people</AppText>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <AppText style={styles.text}>{event.description}</AppText>
        </View>
        <View style={styles.priceAndLocationContainer}> 
          <View style={styles.priceContainer}>
            <MaterialCommunityIcons name={'human-male'} size={32} color={colors.primary}/>
            <AppText style={styles.details}>${event.price}</AppText>
            <MaterialCommunityIcons name={'human-female'} size={32} color={colors.secondary}/>
            <AppText style={styles.details}>${event.price}</AppText>
          </View>
          <View style={styles.locationContainer}>
            <MaterialCommunityIcons name={'map-marker'} size={32} color={colors.primary} style={styles.icon}/>
            <AppText style={styles.details}>{event.location}</AppText>
          </View>
        </View>
        <View style={styles.descriptionContainer}>
          <AppText style={styles.text}>Hosted by {event.host}</AppText>
        </View>
        <View>
          <AppSlider title={'Music'} value={0.92}/>
          <AppSlider title={'Females'} value={0.70}/>
          <AppSlider title={'Drinks'} value={0.86}/>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title={"I'm here"} onPress={() => console.log("I'm Here")}/>
        </View>
      </View>
    </ImageHeaderScrollView>
  )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    date: {
      color: colors.secondary,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 20,
    },
    dataContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    details: {
        color: colors.light,
        fontWeight: 'bold',
        fontSize: 20,
        // marginVertical: 10,
    },
    priceContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    locationContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    priceAndLocationContainer: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    text: {
        marginTop: 15,
        width: '100%',
        // fontWeight: 'bold',
        fontSize: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '500',
        color: colors.primary,
        fontWeight: 'bold',
    },
    descriptionContainer: {
      alignItems: 'center',
    },
    icon: {
      marginRight: 5,
    },
    buttonContainer: {
      marginTop: 15,
    },
    backButton: {
      backgroundColor: colors.primary,
      height: 40,
      width: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 20,
      marginTop: 50,
    },
})
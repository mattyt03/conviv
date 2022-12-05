import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import AppText from '../components/AppText'
import colors from '../config/colors'
import AppButton from '../components/AppButton';
import RatingsDisplay from '../components/RatingsDisplay'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import BackButton from '../components/BackButton';
import AppSlider from '../components/AppSlider';
import { ImageHeaderScrollView} from 'react-native-image-header-scroll-view';
import Blink from '../components/Blink';
import routes from '../navigation/routes';

// Live turnout: 62 people (followed by green arrow/red arrow)
// kinda repetitive

export default function LiveEventScreen({route, navigation}) {
  const event = route.params;
  return (
    <ImageHeaderScrollView
      showsVerticalScrollIndicator={false}
      maxHeight={350}
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
            <Blink duration={1000}>
              <AppText style={styles.date}>{event.turnout}</AppText>
            </Blink>
            <Blink duration={1000}>
              <MaterialCommunityIcons name={'arrow-up-bold'} size={32} color={colors.green} style={styles.icon}/>
            </Blink>
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
        <View style={styles.hostContainer}>
          <AppText style={styles.text}>{'Hosted by '}{event.host}</AppText>
          <Image source={event.profileImage} style={styles.profileImage}/>
        </View>
        {/* <View style={styles.descriptionContainer}>
          <AppText style={styles.date}>{'Rating'}</AppText>
        </View> */}
        <Blink duration={1000}>
          <View style={styles.stars}>
            <MaterialCommunityIcons name={'star'} size={52} color={colors.secondary} style={styles.star}/>
            <MaterialCommunityIcons name={'star'} size={52} color={colors.secondary} style={styles.star}/>
            <MaterialCommunityIcons name={'star'} size={52} color={colors.secondary} style={styles.star}/>
            <MaterialCommunityIcons name={'star'} size={52} color={colors.secondary} style={styles.star}/>
            <MaterialCommunityIcons name={'star-half'} size={52} color={colors.secondary} style={styles.star}/>
          </View>
        </Blink>
        <View style={styles.buttonContainer}>
          <AppButton title={"I'm here"} onPress={() => console.log("I'm Here")}/>
        </View>
        <View style={styles.descriptionContainer}>
          <AppText style={styles.currentlyPlaying}>{'Currently Playing'}</AppText>
          <View style={styles.musicContainer}>
            <Image source={require('../assets/Song.png')} style={styles.songImage}></Image>
            <View style={styles.musicDetailsContainer}>
              <Blink duration={1000}>
                <AppText style={styles.musicTitle}>{'Rich Flex'}</AppText>
                <AppText style={styles.musicArtist}>{'Drake & 21 Savage'}</AppText>
              </Blink>
            </View>
            <TouchableOpacity style={styles.musicButton} onPress={() => navigation.navigate(routes.MUSIC)}>
              <MaterialCommunityIcons name={'chevron-right'} size={40} color={colors.light}/>
            </TouchableOpacity>
          </View>
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
        fontSize: 20,
    },
    title: {
        fontSize: 32,
        fontWeight: '500',
        color: colors.primary,
        fontWeight: 'bold',
    },
    descriptionContainer: {
      marginTop: 15,
      // alignItems: 'center',
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
    hostContainer: {
      marginTop: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    profileImage: {
      marginLeft: 10,
      height: 40,
      width: 40,
      borderRadius: 20,
    },
    rating: {
      color: colors.secondary,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 20,
    },
    currentlyPlaying: {
      // color: colors.secondary,
      fontWeight: 'bold',
      // textTransform: 'uppercase',
      fontSize: 24,
    },
    musicContainer: {
      marginTop: 15,
      flexDirection: 'row',
      alignItems: 'center',
    },
    songImage: {
      borderRadius: 15,
      width: 120,
      height: 120,
    },
    musicDetailsContainer: {
      marginLeft: 15,
    },
    musicTitle: {
      color: colors.secondary,
      fontWeight: 'bold',
      // textTransform: 'uppercase',
      fontSize: 24,
      marginBottom: 10,
    },
    musicArtist: {
      color: colors.secondary,
      fontWeight: 'bold',
      // textTransform: 'uppercase',
      fontStyle: 'italic',
      fontSize: 18,
    },
    musicButton: {
      backgroundColor: colors.primary,
      height: 40,
      width: 40,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
      marginLeft: 40,
    },
    stars: {
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    }
})
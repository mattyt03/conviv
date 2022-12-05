import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import AppText from '../components/AppText'
import colors from '../config/colors'
import AppButton from '../components/AppButton';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import BackButton from '../components/BackButton';
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';


export default function UpcomingEventScreen({route, navigation}) {
  const event = route.params;
  const [rsvps, setRsvps] = useState(117);
  const [buttonTitle, setButtonTitle] = useState('RSVP');

  return (
    <ImageHeaderScrollView
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
        <View style={styles.dateAndRSVPContainer}> 
          <View style={styles.dateContainer}>
            <MaterialCommunityIcons name={'calendar'} size={32} color={colors.secondary} style={styles.icon}/>
            <AppText style={styles.date}>{event.date}</AppText>
          </View>
          <AppText style={styles.date}>{rsvps} RSVPs</AppText>
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
          <AppText style={styles.text}>Hosted by {event.host}</AppText>
          <Image source={event.profileImage} style={styles.profileImage}/>
        </View>
        <View style={styles.buttonContainer}>
          <AppButton title={buttonTitle} onPress={() => {setRsvps(118); setButtonTitle('Cancel RSVP')}}/>
        </View>
      </View>
    </ImageHeaderScrollView>
  )
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    date: {
      color: colors.secondary,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 20,
    },
    dateContainer: {
      flexDirection: 'row',
      alignItems: 'center'
    },
    details: {
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
    dateAndRSVPContainer: {
      marginTop: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
})
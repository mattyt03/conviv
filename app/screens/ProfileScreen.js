import { StyleSheet, View, Image, Platform } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import colors from '../config/colors'
import AppText from '../components/AppText'
import ContentBox from '../components/ContentBox'
import AppButton from '../components/AppButton'
import routes from '../navigation/routes';

export default function LoginScreen({navigation}) {
  return (
    <Screen style={styles.container}>
        <Image
        style={styles.profilePicture} 
        source={require('../assets/profile.jpeg')}
        />
        <AppText style={styles.name}>{'Matthew Tolea'}</AppText>
        <View style={styles.content}>
            <ContentBox icon={'email'}>{'matthewtolea@gmail.com'}</ContentBox>
            <ContentBox icon={'phone'}>{'+1 (123)-456-7890'}</ContentBox>
            <ContentBox icon={'account'}>{'mtolea123'}</ContentBox>
            <ContentBox icon={'lock'}>{'**********'}</ContentBox>
        </View>
        <AppButton title={'Log Out'} onPress={() => console.log("Logged out")}/>
    </Screen>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: 'center',
        marginBottom: 20
    },
    content: {
        // flex: 1,
        // justifyContent: 'center',
        marginTop: 40,
        marginBottom: 60,
    },
    name: {
        fontSize: 32,
        alignSelf: 'center',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color: colors.primary,
    },
    profilePicture: {
        width: 150,
        height: 150,
        borderRadius: 75,
        alignSelf: 'center',
        // marginTop: 40,
        marginBottom: 20,
    },
})
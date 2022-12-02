import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import React from 'react'
import Screen from '../components/Screen'
import * as Yup from 'yup'
import {AppForm, AppFormField, SubmitButton} from '../components/forms'
import colors from '../config/colors'
import AppText from '../components/AppText'

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(8).label('Password')
});

export default function LoginScreen({navigation}) {
  return (
    <Screen style={styles.container}>
        <Image
        style={styles.logo} 
        source={require('../assets/Conviv.png')}
        />
        <AppText style={styles.conviv}>{'Conviv'}</AppText>
        <View style={styles.form}>
            <AppForm
                initialValues={{ email: '', password: ''}}
                onSubmit={() => navigation.navigate('App')}
                validationSchema={validationSchema}
            >
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='email'
                    keyBoardType='email-address'
                    name='email'
                    placeholder='Email'
                    textContentType='emailAddress'
                />
                <AppFormField
                    autoCapitalize='none'
                    autoCorrect={false}
                    icon='lock'
                    name='password'
                    placeholder='Password'
                    // no need to explicitly set equal to true
                    secureTextEntry
                    textContentType='password'
                />
                <SubmitButton title='Login'/>
            </AppForm>
        </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: colors.black
    },
    conviv: {
        fontSize: 48,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        alignSelf: 'center',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color: colors.primary,
        marginBottom: 15,
        
    },
    form: {
        flex: 1,
        // justifyContent: 'center',
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginTop: 30,
        marginBottom: 15,
    },
})
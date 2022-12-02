import React from 'react';
import { StyleSheet, Text, View, Image, Platform } from 'react-native'
import * as Yup from 'yup';
import Screen from '../components/Screen';
import {
  AppForm as Form,
  AppFormField as FormField,
  SubmitButton,
} from '../components/forms';
import colors from '../config/colors'
import AppText from '../components/AppText'

const validationSchema = Yup.object().shape({
  name: Yup.string().required().label('Name'),
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password'),
});

export default function RegisterScreen({navigation}) {
  return (
    <Screen style={styles.container}>
      <Image
        style={styles.logo} 
        source={require('../assets/Conviv.png')}
      />
      <AppText style={styles.conviv}>{'Conviv'}</AppText>
      <View style={styles.form}>
        <Form
          initialValues={{ name: '', email: '', password: '' }}
          onSubmit={(values) => navigation.navigate('App')}
          validationSchema={validationSchema}
        >
          <FormField
            autoCorrect={false}
            icon='account'
            name='name'
            placeholder='Name'
          />
          <FormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='email'
            keyboardType='email-address'
            name='email'
            placeholder='Email'
            textContentType='emailAddress'
          />
          <FormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='lock'
            name='password'
            placeholder='Password'
            secureTextEntry
            textContentType='password'
          />
          <SubmitButton title='Register' />
        </Form>
      </View>
    </Screen>
  );
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
});
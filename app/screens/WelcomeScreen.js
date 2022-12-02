import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import colors from '../config/colors';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import routes from '../navigation/routes';

export default function WelcomeScreen({navigation}) {
  return (
    <ImageBackground
        blurRadius={2}
        style={styles.background}
        source={require('../assets/background.jpeg')}
    >
        <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/Conviv.png')}/>
            <AppText style={styles.conviv}>{'Conviv'}</AppText>
        </View>
        <View style={styles.buttonsContainer}>
            <AppButton title='Login' onPress={() => navigation.navigate(routes.LOGIN)}/>
            <AppButton title='Register' color='secondary' onPress={() => navigation.navigate(routes.REGISTER)}/>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    background: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    buttonsContainer: {
        padding: 20,
        width: '100%'
    },
    conviv: {
        fontSize: 72,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        alignSelf: 'center',
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        color: colors.primary,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    logoContainer: {
        position: 'absolute',
        top: 70,
        alignItems: "center"
    },
});
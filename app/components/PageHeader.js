import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View } from 'react-native';

const pageHeader = () => {
    return (
        // <View>
             <Text style={styles.userSearch}>   Hi, Jane! </Text> 
        //     <View style={styles.divider}/>
        // </View>      
    )
}

const styles = StyleSheet.create({
    userSearch:{
        color: '#EB37D9',
        fontSize: 20
      },
    
    //   divider:{
    //     height: StyleSheet.hairlineWidth,
    //     backgroundColor: '#EB37D9',
    //     marginHorizontal: 16,
    //     marginTop: 16,
    //   },
});

export { pageHeader };
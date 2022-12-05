import { FlatList, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React, {useState} from 'react'
import colors from '../config/colors'
import EventListItem from '../components/EventListItem'
import routes from '../navigation/routes'
import { RefreshControl } from 'react-native'
import { useNavigation } from '@react-navigation/core'
import {MaterialCommunityIcons} from '@expo/vector-icons'
import {music} from '../data/music'
import AppText from '../components/AppText'
import AppButton from '../components/AppButton'
import Blink from '../components/Blink'
import Screen from '../components/Screen'

export default function EventList({navigation}) {
    const [refreshing, setRefreshing] = useState(false);

    return (
        // <View style={styles.container}>
        <Screen>
            <View style={styles.currentMusicContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <MaterialCommunityIcons name={'chevron-left'} size={40} color={colors.light}/>
                </TouchableOpacity>
                <Image source={require('../assets/Song.png')} style={styles.currentSongImage}></Image>
                <View style={styles.musicDetailsContainer}>
                    <Blink duration={1000}>
                        <AppText style={styles.currentMusicTitle}>{'Rich Flex'}</AppText>
                        <AppText style={styles.currentMusicArtist}>{'Drake & 21 Savage'}</AppText>
                    </Blink>
                </View>
            </View>
            <View style={styles.musicList}>
                <FlatList
                    ListHeaderComponent= {
                        <AppText style={styles.upNext}>{'Up Next'}</AppText>
                    }
                    data={music}
                    keyExtractor={song => song.id.toString()}
                    renderItem={({item}) => 
                        <View style={styles.itemContainer}>
                            <View style={styles.musicContainer}>
                                <Image source={item.image} style={styles.songImage}></Image>
                                <View style={styles.musicDetailsContainer}>
                                    <AppText style={styles.musicTitle}>{item.name}</AppText>
                                    <AppText style={styles.musicArtist}>{item.artist}</AppText>
                                </View>
                            </View>
                            <View style={styles.musicContainer}>
                                <View style={styles.votesContainer}>
                                    <MaterialCommunityIcons name={'arrow-up-bold'} size={40} color={colors.green}/>
                                    <AppText style={styles.votes}>{item.upVotes}</AppText>
                                </View>
                                <View style={styles.votesContainer}>
                                    <MaterialCommunityIcons name={'arrow-down-bold'} size={40} color={colors.red}/>
                                    <AppText style={styles.votes}>{item.downVotes}</AppText>
                                    </View>
                            </View>
                        </View>
                    }
                    // refreshControl=
                    //     {<RefreshControl
                    //         refreshing={refreshing}
                    //         onRefresh={console.log('refreshed')}
                    //         tintColor={colors.light}
                    //     />}
                />
            </View>
            <View style={styles.buttonContainer}>
                <AppButton title={"Add Song"} onPress={() => console.log("I'm Here")}/>
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    musicContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    songImage: {
        borderRadius: 15,
        width: 80,
        height: 80,
    },
    musicDetailsContainer: {
        marginLeft: 15,
    },
    musicTitle: {
        color: colors.light,
        fontWeight: 'bold',
        // textTransform: 'uppercase',
        fontSize: 20,
        marginBottom: 10,
    },
    musicArtist: {
        color: colors.light,
        fontWeight: 'bold',
        // textTransform: 'uppercase',
        fontStyle: 'italic',
        fontSize: 16,
        marginBottom: 10,
    },
    musicList: {
        flex: 1,
        padding: 20,
        paddingVertical: 10,
    },
    currentMusicContainer: {
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    currentSongImage: {
        borderRadius: 15,
        width: 120,
        height: 120,
    },
    currentMusicDetailsContainer: {
        marginLeft: 15,
    },
    currentMusicTitle: {
        color: colors.secondary,
        fontWeight: 'bold',
        // textTransform: 'uppercase',
        fontSize: 24,
        marginBottom: 10,
    },
    currentMusicArtist: {
        color: colors.secondary,
        fontWeight: 'bold',
        // textTransform: 'uppercase',
        fontStyle: 'italic',
        fontSize: 18,
    },
    backButton: {
        backgroundColor: colors.primary,
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 40,
    },
    buttonContainer: {
        justifyContent:'flex-end',
        marginBottom: 25,
    },
    upNext: {
        fontWeight: 'bold',
        fontSize: 32,
    },
    votesContainer: {
        alignItems: 'center'
    },
    votes: {
        fontWeight: 'bold',
    },
})
import React, { useState} from 'react';
import {Button, View, StyleSheet, TouchableOpacity, Image, Text, ImageBackground} from 'react-native';
import Modal from 'react-native-modal';
import Ratings from '../components/Ratings';
import RatingsDisplay from '../components/RatingsDisplay'

const ModalDemo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    
    <View style={styles.container}>
      <Text style={styles.paragraph}>Short Description</Text>
      <Image alignContent={'center'} style={styles.partyImage} source={"https://theexchangempls.com/wp-content/uploads/2020/01/concert-2527495_1280.jpg"} />
      <Text style={styles.heading}>EVENT NAME</Text>
      <RatingsDisplay/>
      <TouchableOpacity style={styles.checkInButton}>
        <Text style={{color: 'white', alignSelf: "center", width: 60}}>I'M HERE</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.rateButton} title={"Rate"} onPress={toggleModal}><Text style={{color: 'white', fontSize: 20}}>Rate Event</Text></TouchableOpacity>
      <Modal
        isVisible={isModalVisible}>
        <View>
          <Ratings/>
          <View>
            <TouchableOpacity style={styles.rateButtonModal} title="Rate Event" onPress={toggleModal}><Text style={{color: "white", fontSize: 20}}>Rate Event</Text></TouchableOpacity>
          </View>
        </View>
      </Modal>
      <Text style={styles.currentSongText}>CURRENTLY PLAYING</Text>
      <Image source={"https://s3-alpha.figma.com/hub/file/2288777076/e862ee23-8b84-46af-a128-3e88bbbf28d4-cover.png"} style={styles.songPicture} />
      <Text style={styles.songText}>Lavender Haze</Text>
      <Text style={styles.songArtist}>Taylor Swift</Text>
      <TouchableOpacity style={styles.requestButton} title={"Request"}><Text style={{color: 'white', fontSize: 20}}>Request a Song</Text></TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',

  },

  heading: {
    position: "absolute",
    color: 'white',
    width: 355,
    height: 80,
    
    top: 134,
    left: 22,
    fontSize: 24,
    fontFamily: "SF Pro",
    fontStyle: 'normal',

    lineheight: 29,
    display: "flex",
    alignItems: "center",
 },

paragraph: {
  position: "absolute",
  width: 171,
  height: 22,
  left: 29,
  top: 248,

  fontfamily: 'SF Pro Text',
  fontStyle: "normal",
  fontsize: 10,
  lineheight: 12,
  display: "flex",
  alignitems: "center",

  color: 'white',
},

checkInButton: {
  position: "absolute",
  top: 231,
  width: 113,
  height: 45,
  left: 255,
  alignItems: 'center',
  
  paddingVertical: 14,
  paddingHorizontal: 32,
  borderRadius: 25,
  borderColor: "#EB37D9",
  backgroundColor: '#EB37D9',
  elevation: 3,

},

rateButton: {
  position: "relative",
  top: 60,
  width: 314,
  alignItems: 'center',
  paddingVertical: 14,
  paddingHorizontal: 32,
  borderRadius: 150,
  borderColor: "#EB37D9",
  backgroundColor: '#EB37D9',
  color: "white",
  elevation: 3,

},

rateButtonModal: {
  position: "relative",
  top: 103,
  width: 314,
  alignSelf: "center",
  alignItems: 'center',
  paddingVertical: 14,
  paddingHorizontal: 32,
  borderRadius: 150,
  borderColor: "#EB37D9",
  backgroundColor: '#EB37D9',
},

partyImage: {
  position: "absolute",
  

  /* image 3 */

// position: absolute;
// width: 393px;
// height: 331px;
// left: -3px;
// top: -114px;

// background: url(image.png);
// border-radius: 25px;



},

currentSongText: {

position: "absolute",
width: 171,
height: 22,
left: 29,
top: 602,

fontFamily: 'SF Pro',
fontStyle: "normal",
fontSize: 15,
lineheight: 18,
display: "flex",
alignItems: "center",
color: "white",

},

requestButton: {
  position: "absolute",
  width: 314,
  
  alignContent: 'center',
  top: 730,
  alignContent: "center",

  alignItems: 'center',
  paddingVertical: 14,
  paddingHorizontal: 32,
  borderRadius: 150,
  borderColor: "#EB37D9",
  backgroundColor: '#EB37D9',
},

songPicture: {
  /* image 12 */

position: "absolute",
width: 72,
height: 72,
left: 30,
top: 640,
borderRadius: 10,

},

songText: {
  /* Lavender Haze Taylor Swift */

position: "absolute",
width: 171,
height: 50,
left: 117,
top: 651,

fontFamily: 'SF Pro',
fontStyle: "normal",
fontSize: 16,
lineheight: 19,
display: "flex",
alignItems: "center",
letterSpacing: .025,
color: "white"
},

songArtist: {
  position: "absolute",
width: 171,
height: 50,
left: 117,
top: 690,

fontFamily: 'SF Pro',
fontStyle: "italic",
fontSize: 16,
lineheight: 19,
display: "flex",
alignItems: "center",
letterSpacing: .025,
color: "#767676",

},

});
export default ModalDemo;
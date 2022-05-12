import React from 'react';
import { Text, View, ImageBackground, TouchableOpacity, Image, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Room({navigation}) {

  return(
    <View style={styles.container} >
		<ScrollView>
			<ImageBackground source={require("../images/room-screen.jpg")} resizeMode="cover" style={styles.pageImage}>
				<Text style={styles.screenName}>ROOM</Text>
			</ImageBackground>
			<View style={styles.content}>
                <View style={styles.roomTitle}>
                    <Text style={{color: 'white', fontWeight: 'bold', fontSize: 15}}>Single Room - Room no.A312</Text>
                </View>
                <View style={styles.roomInfo}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'white', borderRightWidth: 1, borderRightColor: 'white',
                            paddingRight: 3}}>
                            2 Rooms</Text>
                        <Text style={{color: 'white', paddingLeft: 3}}>5 Nights</Text>
                    </View>
                    <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>GHC 200</Text>
                </View>
                <View style={{borderBottomColor: 'white', borderBottomWidth: 1, marginBottom: 20}}>
                    <Image source={require('../images/room-detail.jpg')} style={styles.roomImage}/>
                </View>
                <Text>Amennities Included with booking</Text>
                <View style={styles.amenities}>
                    <Text style={{color: 'white', paddingBottom: 5}}>
                        <Icon name="wifi" color="#aa3300"/> Wifi</Text>
                    <Text style={{color: 'white', paddingRight: 25}}>
                    <Icon name="tint" color="#aa3300"/> A/C</Text>
                    <Text style={{color: 'white', paddingRight: 25}}>
                    <Icon name="tv" color="#aa3300"/> Smart TV</Text>
                    <Text style={{color: 'white', paddingRight: 25}}>
                    <Icon name="cutlery" color="#aa3300"/> Free Meals</Text>
                    <Text style={{color: 'white', paddingRight: 25}}>
                    <Icon name="bed" color="#aa3300"/> 2 Beds</Text>
                    <Text style={{color: 'white', paddingRight: 25}}>
                    <Icon name="car" color="#aa3300"/> Free Parking</Text>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text>Select Room</Text>
                </TouchableOpacity>
				
			</View>
		</ScrollView>
	</View>
  );
}

const styles = StyleSheet.create({
    container:{
	 flex: 1,
	 backgroundColor: 'black'
	},
	screenName:{
		color: 'white',
        fontSize: 23,
		width: 100,
		textAlign: 'center',
		borderRadius: 25,
	},
	pageImage: {
		textAlign: 'center',
		color: 'white',
		backgroundColor: 'rgba(0,0,0, 0.7)',
		borderRadius: 25,
		justifyContent: 'center',
		height: Dimensions.get('screen').height*0.35,
		alignItems: 'center',
		padding: 20,
		marginBottom: 10,
    },
    content:{
        backgroundColor: 'black',
        padding: 10,
        alignItems: 'center'
    },
    roomTitle:{
        width: Dimensions.get('screen').width,
        alignItems: 'center',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 8,
        marginBottom: 20
    },
    roomInfo:{
        flexDirection:'row', 
        justifyContent: 'space-around',
        width: Dimensions.get('screen').width,
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 20
    },
    roomImage:{
        width: Dimensions.get('screen').width*0.9,
        height: Dimensions.get('screen').width*0.5,
        paddingBottom: 8,
        marginBottom: 20
    },
    amenities:{
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around', 
        paddingLeft:15, 
        paddingRight:15,
        marginBottom: 10
    },
    btn:{
        backgroundColor: 'white',
        padding: 8,
        width: Dimensions.get('screen').width*0.3,
        borderRadius: 15,
        alignItems: 'center'
    }
});

import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Dimensions,ImageBackground} from 'react-native';
import { color } from 'react-native-reanimated';

export default function Front({navigation}){
     return (
       <View style={styles.imagebg}>
         <ImageBackground style={styles.frontImage} source={require("../../images/splash.jpg")} />
        <View style={styles.container}>
        <Text style={styles.title}>
            Let's Explore
             Comfort 
        </Text>
        
        <Text style={styles.header}>
          PREMIUM ROOMS FOR PREMIUM PEOPLE 
        </Text>
        <View style={styles.signuptext}>
        <TouchableOpacity style={styles.signup} onPress={()=>navigation.navigate('Signup')}>
        <Text style={styles.h2}>
            Sign Up</Text>
        </TouchableOpacity>
        <View style={styles.logintext}>
        <TouchableOpacity style={styles.login} onPress={()=>navigation.navigate('Login')}>
        <Text style={styles.h5}>
            Log In</Text>
        </TouchableOpacity>
        </View>
  </View>
  </View>
  </View>


    )
    }

    const styles =StyleSheet.create({
        container:{
            flex:3,
            padding:50,
            backgroundColor:"black",
            
            
            
       },
       title: {
        marginBottom: 30,
        position:"relative",
        bottom:190,
        paddingHorizontal:12,
        textAlign:"center",
        color: "white",
        fontSize: 35,
        fontStyle:"normal",
        fontWeight: "bold" 
        
      },
      signuptext:{
    flexDirection:"row",
    justifyContent:"space-evenly",
      bottom:10,
      paddingLeft:20,
      paddingRight:20,
    
      },
      signup:{
        flexGrow:3,
        backgroundColor: 'white',
		borderRadius: 10,
    bottom:40,
    paddingLeft:20,
    paddingRight:20,



      },
      header:{
          flex: 1,
         marginBottom:12,
         position:"relative",
         bottom:220,
         textAlign:"center",
         color:"white",
         
      },

       h2:{
        height:25,
          fontSize:18,
          marginBottom:15,
          position:"relative",
          bottom:-8,
          color:"black",
  
      },
      logintext:{
      flexWrap:"wrap-reverse",
      width:Dimensions.get('screen').width,
      justifyContent:"space-evenly",
      marginRight:-10,
    marginLeft:-70,
    bottom:20,

      },
      login:{
        backgroundColor: 'white',
        borderRadius: 10,
        paddingRight:25,
        paddingLeft:30,
        paddingTop:10,
        bottom:20,
           
      },
      h5:{
        
        fontSize:20,
        marginBottom:10,
        position:"relative",
        bottom:3,
        color:"black",
      },
      frontImage:{
        flexGrow: 10,
        transform: [{scaleX: 1.0}],
        justifyContent: 'center',
        alignItems: 'center',
        flexBasis:30,
        
		    

      },
       imagebg:{
        resizeMode: 'cover',
        width: Dimensions.get('screen').width,
        flex: 1,
       
       }
    });

 
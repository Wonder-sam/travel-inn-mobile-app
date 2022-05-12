import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import firebase from 'firebase/compat/app';
import apiKeys from './config/keys';
import SignupPage from './screens/signupPage.js';
import LoginPage from './screens/loginPage.js';
import ForgottenPasswordPage from './screens/forg_Pass.js';
import ResetPasswordPage from './screens/resetPassword.js';
import BottomTabs from './bottomNavigation';



const Stack = createNativeStackNavigator();
export default function App() {
	if (!firebase.apps.length) {
		console.log("Connected with Firebase")
		firebase.initializeApp(apiKeys.firebaseConfig);
	}


	return (
		<NavigationContainer >
		  <Stack.Navigator initialRouteName='BottomNav' backBehavior="history" screenOptions={{headerShown: false}}>
			<Stack.Screen name="Signup" component={SignupPage}/>
			<Stack.Screen name="Login" component={LoginPage} />
			<Stack.Screen name="Forgotten Password" component={ForgottenPasswordPage}/>
			<Stack.Screen name="Reset Password" component={ResetPasswordPage}/>
			<Stack.Screen name="BottomNav" component={BottomTabs}/>
		  </Stack.Navigator>
		</NavigationContainer>
	);
}

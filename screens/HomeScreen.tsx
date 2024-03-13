import React from "react";
import { View, Text,Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Keychain from "react-native-keychain";
import { PrimaryBGColor } from '../styles/primaryScreenColors';
import PrimaryButton  from '../components/Buttons/PrimaryButtonComponent';

async function CheckSuser(){
    const credentials = await Keychain.getGenericPassword();
    console.log(credentials, "credentials")
}
async function DeleteUser(){
    const credentials = await Keychain.resetGenericPassword();
    console.log(credentials, "credentials del")
}
function  HomeScreen() {
    return <View style={{flex: 1, backgroundColor: PrimaryBGColor, gap: 2, padding: 2}}>
        <PrimaryButton  buttonClicked={CheckSuser} buttonTitle="Check User details"/>
        <PrimaryButton  buttonClicked={DeleteUser} buttonTitle="Delete User details"/>
        </View>;
}

export default HomeScreen;
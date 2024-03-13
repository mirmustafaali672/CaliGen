import React from "react";
import { View, Text,Button } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Keychain from "react-native-keychain";
import { PrimaryBGColor } from '../styles/primaryScreenColors'

async function CheckSuser(){
    const credentials = await Keychain.getGenericPassword();
    console.log(credentials, "credentials")
}
async function DeleteUser(){
    const credentials = await Keychain.resetGenericPassword();
    console.log(credentials, "credentials del")
}
function  HomeScreen() {
    return <View style={{flex: 1, backgroundColor: PrimaryBGColor}}>
        {/* <Ionicons name="settings-outline" color="red" size={20}/> */}
        <Button title="CheckUSer" onPress={ CheckSuser }/><Button title="del" onPress={ DeleteUser }/></View>;
}

export default HomeScreen;
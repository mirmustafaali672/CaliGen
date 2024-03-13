import React from 'react';
import { Text, View, Button } from 'react-native';
import { PrimaryBGColor } from '../../styles/primaryScreenColors';

function ProfileScreen({ navigation, logout }){
    function Logout(){
        // navigation.navigate();
        logout();
    }
    console.log("props", navigation)
    return <View style={{flex: 1, backgroundColor: PrimaryBGColor }}><Button title="LogOut"  onPress={() => Logout()}/></View>
}

export default ProfileScreen;
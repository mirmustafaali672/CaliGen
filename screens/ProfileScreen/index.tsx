import React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { PrimaryBGColor } from '../../styles/primaryScreenColors';
import PrimaryButton  from '../../components/Buttons/PrimaryButtonComponent';

function ProfileScreen({ navigation, logout }){
    function Logout(){
        // navigation.navigate();
        logout();
    }
    console.log("props", navigation)
    return <View style={{flex: 1, backgroundColor: PrimaryBGColor }}>
        <View style={{margin: 1, width: "20%"}}>
        <PrimaryButton buttonClicked={Logout} buttonTitle="Logout"/>
        </View>
        </View>
}

const styles = StyleSheet.create({
    
})

export default ProfileScreen;
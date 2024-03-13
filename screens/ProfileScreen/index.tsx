import React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { PrimaryBGColor } from '../../styles/primaryScreenColors';
import PrimaryButton  from '../../components/Buttons/PrimaryButtonComponent';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function ProfileScreen({ navigation, logout }){
    function Logout(){
        // navigation.navigate();
        logout();
    }
    console.log("props", navigation)
    return <View style={{flex: 1, backgroundColor: PrimaryBGColor }}>
        <View style={{margin: 1, width: "25%"}}>
        <PrimaryButton buttonClicked={Logout} buttonTitle="Logout" buttonIcon={<MaterialIcons
              name="logout"
              color="white"
              size={20}
            />}/>
        </View>
        </View>
}

const styles = StyleSheet.create({
    
})

export default ProfileScreen;
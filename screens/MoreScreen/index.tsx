import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {MenuList} from '../../data/MenuData';
import { PrimaryColor, PrimaryBGColor } from '../../styles/primaryScreenColors';
import PrimaryButton  from '../../components/Buttons/PrimaryButtonComponent';
function MenuScreen({navigation}) {

    function navigateTo({ route })
    {
        navigation.navigate('Home');
    }
  return (
    <View style={{flex: 1, margin: 5, backgroundColor: PrimaryBGColor}}>
      <SafeAreaView style={{flex: 1}}>
        <FlatList
          keyExtractor={item => item.name}
          data={MenuList}
          renderItem={({item}) => {
            return (
              <View  style={styles.MenuButtonStyle}>
                <PrimaryButton  buttonClicked={ () => navigateTo(item.navigationRouteName)} buttonTitle={item.name}/>
              </View>
            );
          }}
        />
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  MenuButtonStyle: {
    alignItems: "center",
    padding: 10,
    margin: 2,
    marginHorizontal: 10, 
    backgroundColor: PrimaryColor,
    borderRadius: 10
  },
});

export default MenuScreen;

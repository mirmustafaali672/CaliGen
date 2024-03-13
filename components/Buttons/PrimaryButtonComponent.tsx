import React from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {PrimaryColor} from '../../styles/primaryScreenColors';

function PrimaryButton({buttonClicked, buttonTitle, buttonIcon, iconAtEnd}) {
  return (
    <View>
      <TouchableOpacity style={[styles.container]} onPress={() => buttonClicked()}>
        {!iconAtEnd && buttonIcon }
        <View>
          <Text style={{color: 'white'}}>{buttonTitle ? buttonTitle : ''}</Text>
        </View>
        {iconAtEnd && buttonIcon }
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: PrimaryColor,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    flexDirection: "row"
  },
});

export default PrimaryButton;

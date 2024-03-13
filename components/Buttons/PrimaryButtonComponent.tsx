import React from 'react';
import {Text, View, Button, TouchableOpacity, StyleSheet} from 'react-native';
import {PrimaryColor} from '../../styles/primaryScreenColors';

function PrimaryButton({buttonClicked, buttonTitle}) {
  return (
    <View style={[styles.container]}>
      <TouchableOpacity onPress={() => buttonClicked()}>
        <View>
          <Text style={{color: 'white'}}>{buttonTitle ? buttonTitle : ''}</Text>
        </View>
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
  },
});

export default PrimaryButton;

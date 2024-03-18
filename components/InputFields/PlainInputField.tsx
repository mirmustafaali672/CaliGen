import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';

function InputFieldComponent({onChangeText, value, placeholder}) {
  const [inputFieldOnFocusBorderColor, setinputFieldOnFocusBorderColor] =
    useState({borderWidth: 2,
        borderColor: MaterialColors.MaterialWhite,});
  return (
    <View style={{marginVertical: 10}}>
    <View  style={[{
          marginHorizontal: 4,
          borderWidth: 2,
          borderRadius: 15,
          backgroundColor: MaterialColors.MaterialIndigo,
          padding: 8
        }, inputFieldOnFocusBorderColor]}>
      <TextInput
        onBlur={() =>
          setinputFieldOnFocusBorderColor({
            borderWidth: 2,
            borderColor: MaterialColors.MaterialWhite,
          })
        }
        onFocus={() =>
          setinputFieldOnFocusBorderColor({
            borderWidth: 2,
            borderColor: MaterialColors.MaterialDeepPurple,
          })
        }
        placeholder={placeholder}
        onChangeText={value => onChangeText(value)}
        value={value}></TextInput>
        </View>
    </View>
  );
}

export default InputFieldComponent;

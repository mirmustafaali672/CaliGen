import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';

interface InputFieldComponentInterface {
  onChangeText: any,
  value: any,
  placeholder: string,
  label: string
}

function InputFieldComponent(props: InputFieldComponentInterface) {
  const [inputFieldOnFocusBorderColor, setinputFieldOnFocusBorderColor] =
    useState({
      borderWidth: 2,
      borderColor: MaterialColors.MaterialLightDeepPurple,
    });
  return (
    <View style={{ marginVertical: 10 }}>
      <RobotoText
        text={props.label ?? "--"}
        textStyle={{
          margin: 10,
          marginTop: 0,
          color: MaterialColors.MaterialBlack,
        }} isBold={false} numberOfLines={0} />
      <View style={[{
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
              borderColor: MaterialColors.MaterialLightDeepPurple,
            })
          }
          onFocus={() =>
            setinputFieldOnFocusBorderColor({
              borderWidth: 2,
              borderColor: MaterialColors.MaterialDeepPurple,
            })
          }
          placeholder={props.placeholder}
          onChangeText={value => props.onChangeText(value)}
          value={props.value}></TextInput>
      </View>
    </View>
  );
}

export default InputFieldComponent;

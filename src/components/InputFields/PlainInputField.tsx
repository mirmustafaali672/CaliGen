import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';

interface InputFieldComponentInterface {
  onChangeText: any;
  value: any;
  placeholder: string;
  label: string;
  required?: boolean;
}

interface TextInputInterface {
  text: any;
  touched: boolean;
}

function InputFieldComponent(props: InputFieldComponentInterface) {
  const [inputFieldOnFocusBorderColor, setinputFieldOnFocusBorderColor] =
    useState({
      borderWidth: 2,
      borderColor: MaterialColors.MaterialLightDeepPurple,
    });
  const [input, setInput] = useState<TextInputInterface>({
    text: props.value ?? '',
    touched: false,
  });
  return (
    <View style={{marginVertical: 10}}>
      <RobotoText
        text={props.label ?? '--'}
        textStyle={{
          margin: 10,
          marginTop: 0,
          color: MaterialColors.MaterialBlack,
        }}
        isBold={false}
        numberOfLines={0}
      />
      <View
        style={[
          {
            marginHorizontal: 4,
            borderWidth: 2,
            borderRadius: 15,
            backgroundColor: MaterialColors.MaterialIndigo,
            padding: 8,
          },
          inputFieldOnFocusBorderColor,
        ]}>
        <TextInput
          onBlur={() => {
            input.text.length == 0 && props.required
              ? setinputFieldOnFocusBorderColor({
                  borderWidth: 2,
                  borderColor: MaterialColors.MaterialRed,
                })
              : setinputFieldOnFocusBorderColor({
                  borderWidth: 2,
                  borderColor: MaterialColors.MaterialLightDeepPurple,
                });
            setInput({text: input.text, touched: true});
          }}
          onFocus={() =>
            setinputFieldOnFocusBorderColor({
              borderWidth: 2,
              borderColor: MaterialColors.MaterialDeepPurple,
            })
          }
          placeholder={props.placeholder}
          onChangeText={value => {
            setInput({text: value, touched: true});
            props.onChangeText(value);
          }}
          value={props.value}></TextInput>
      </View>
      {input.text.length == 0 && input.touched && props.required && (
        <RobotoText
          text={`${props.label} field is required.`}
          textStyle={{
            margin: 10,
            marginTop: 0,
            color: MaterialColors.MaterialRed,
          }}
          isBold={true}
          numberOfLines={0}
        />
      )}
    </View>
  );
}

export default InputFieldComponent;

import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import RobotoText from '../../components/Text/RobotoText';
import { Schemes } from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';

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
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();

  const [inputFieldOnFocusBorderColor, setinputFieldOnFocusBorderColor] =
    useState({
      borderWidth: 2,
      borderColor: MaterialColorTheme.surface,
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
          color: MaterialColorTheme.onSurface,
        }}
        isBold={false}
        numberOfLines={0}
      />
      <View
        style={[
          {
            marginHorizontal: 4,
            borderWidth: 2,
            borderRadius: 8,
            backgroundColor: MaterialColorTheme.surfaceContainer,
            padding: 8,
          },
          inputFieldOnFocusBorderColor,
        ]}>
        <TextInput
          onBlur={() => {
            input.text.length == 0 && props.required
              ? setinputFieldOnFocusBorderColor({
                  borderWidth: 2,
                  borderColor: MaterialColorTheme.tertiary,
                })
              : setinputFieldOnFocusBorderColor({
                  borderWidth: 2,
                  borderColor: MaterialColorTheme.surface,
                });
            setInput({text: input.text, touched: true});
          }}
          onFocus={() =>
            setinputFieldOnFocusBorderColor({
              borderWidth: 2,
              borderColor: MaterialColorTheme.primary,
            })
          }
          placeholder={props.placeholder}
          onChangeText={value => {
            setInput({text: value, touched: true});
            props.onChangeText(value);
          }}
          value={props.value} style={{color: MaterialColorTheme.onSurface}}></TextInput>
      </View>
      {input.text.length == 0 && input.touched && props.required && (
        <RobotoText
          text={`${props.label} field is required.`}
          textStyle={{
            margin: 10,
            marginTop: 0,
            color: MaterialColorTheme.tertiary,
          }}
          isBold={true}
          numberOfLines={0}
        />
      )}
    </View>
  );
}

export default InputFieldComponent;

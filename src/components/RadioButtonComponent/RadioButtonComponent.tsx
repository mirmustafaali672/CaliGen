import {StyleProp, TextStyle, TouchableOpacity, View, ViewStyle} from 'react-native';
import RobotoText from '../Text/RobotoText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useEffect, useState} from 'react';
import { Schemes } from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';

export interface RadioButtonInterface {
  label: string;
  buttons: {name: any; value: any}[];
  selected: any;
  onSelection: any;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  buttonColor?: string;
  buttonSize?: number;
}

function RadioButtonComponent(props: RadioButtonInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();

  const [selected, setSelected] = useState<number>(
    props.buttons.findIndex(item => item.value == props.selected),
  );
  useEffect(() => {
    props.onSelection(props.buttons[selected].value);
  }, [selected]);
  return (
    <View style={{marginVertical: 10}}>
      <RobotoText
        text={props.label ?? '--'}
        textStyle={[{
          margin: 10,
          marginTop: 0,
          color: MaterialColorTheme.onSurface,
        }, props.titleStyle]}
        isBold={false}
        numberOfLines={0}
      />
      <View
        style={[{
          flexDirection: 'row',
          gap: 8,
          marginHorizontal: 20,
          alignItems: 'center',
        }, props.containerStyle]}>
        {props.buttons.map((item, index) => (
          <TouchableOpacity key={item.name} onPress={() => setSelected(index)}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name={selected == index ? 'circle-slice-8' : 'circle-outline'}
                size={props.buttonSize ?? 20}
                color={props.buttonColor ?? MaterialColorTheme.primary}
              />
              <RobotoText
                text={item.name}
                textStyle={{
                  margin: 10,
                  marginTop: 0,
                  color: MaterialColorTheme.onSurface,
                }}
                isBold={false}
                numberOfLines={0}
              />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
export default RadioButtonComponent;

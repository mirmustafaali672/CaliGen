import {TouchableOpacity, View} from 'react-native';
import RobotoText from '../Text/RobotoText';
import * as MaterialColors from '../../styles/materialColors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useEffect, useState} from 'react';

export interface RadioButtonInterface {
  label: string;
  buttons: {name: any; value: any}[];
  selected: any;
  onSelection: any;
}

function RadioButtonComponent(props: RadioButtonInterface) {
  const [selected, setSelected] = useState<number>(props.buttons.findIndex( item => item.value == props.selected));
  useEffect(()=>{
    props.onSelection(props.buttons[selected].value);
  }, [selected])
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
        style={{
          flexDirection: 'row',
          gap: 8,
          marginHorizontal: 20,
          alignItems: 'center',
        }}>
        {props.buttons.map((item, index) => (
          <TouchableOpacity onPress={() => setSelected(index)}>
            <View style={{flexDirection: 'row'}}>
              <MaterialCommunityIcons
                name={selected == index ? 'circle-slice-8' : 'circle-outline'}
                size={20}
                color={MaterialColors.MaterialDeepPurple}
              />
              <RobotoText
                text={item.name}
                textStyle={{
                  margin: 10,
                  marginTop: 0,
                  color: MaterialColors.MaterialBlack,
                }}
                isBold={false}
                numberOfLines={0}
              />
            </View>
          </TouchableOpacity>
        ))}
        {/* <MaterialCommunityIcons
          name="circle-slice-8"
          size={20}
          color={MaterialColors.MaterialDeepPurple}
        />
        <MaterialCommunityIcons
          name="circle-outline"
          size={20}
          color={MaterialColors.MaterialDeepPurple}
        /> */}
      </View>
    </View>
  );
}
export default RadioButtonComponent;

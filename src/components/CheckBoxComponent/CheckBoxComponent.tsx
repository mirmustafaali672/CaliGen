import {TouchableOpacity, View} from 'react-native';
import RobotoText from '../Text/RobotoText';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import * as MaterialColors from '../../styles/materialColors';

interface CheckBoxComponentInterface {
  title: string;
  isChecked: boolean;
  onClicked: any;
}
function CheckBoxComponent(props: CheckBoxComponentInterface) {
    console.log(props.isChecked)
  return (
    <TouchableOpacity onPress={()=> props.onClicked()}>
    <View style={{flexDirection: 'row', gap: 15}}>
      {!props.isChecked && <MaterialCommunityIcons
        name={'checkbox-blank-outline'}
        color={MaterialColors.MaterialDeepPurple}
        size={30}
      />}
      { props.isChecked && <MaterialCommunityIcons
        name={'checkbox-marked-outline'}
        color={MaterialColors.MaterialDeepPurple}
        size={30}
      />}
      <RobotoText
        text={props.title}
        textStyle={{fontSize: 20}}
        isBold={false}
        numberOfLines={0}
      />
    </View>
    </TouchableOpacity>
  );
}
export default CheckBoxComponent;

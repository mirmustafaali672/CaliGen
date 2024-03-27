import AntDesign from 'react-native-vector-icons/AntDesign';
import {View, TouchableOpacity} from 'react-native';
import RobotoText from '../Text/RobotoText';
import * as MaterialColors from '../../styles/materialColors';

interface EntityDetailCardInterface {
  navigation: any;
  item: any;
  navigationScreenName: string;
  cardTitle: string;
  value1: string;
  value2: string;
  value3: string;
  value4: string;
  showUserProfile: boolean;
}

function EntityDetailCardComponent(props: EntityDetailCardInterface) {
  const item = props.item;
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: MaterialColors.MaterialIndigo,
        padding: 10,
        marginHorizontal: 6,
        marginVertical: 5,
        borderRadius: 10,
      }}>
      {props.showUserProfile && (
        <View
          style={{
            flex: 1.5,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginHorizontal: 10,
          }}>
          <AntDesign
            name="user"
            size={60}
            color={MaterialColors.MaterialBlack}
          />
        </View>
      )}
      <View style={{flex: 6, alignItems: 'flex-start'}}>
        <RobotoText
          text={
            props.cardTitle.length < 8
              ? `${props.cardTitle}`
              : `${props.cardTitle.substring(0, 8)}...`
          }
          textStyle={{fontSize: 25, color: MaterialColors.MaterialBlack}}
          isBold={true}
          numberOfLines={0}
        />
        <RobotoText
          text={props.value1}
          textStyle={undefined}
          isBold={false}
          numberOfLines={0}
        />
        <RobotoText
          text={props.value2}
          textStyle={undefined}
          isBold={false}
          numberOfLines={0}
        />
        <RobotoText
          text={props.value3}
          textStyle={undefined}
          isBold={false}
          numberOfLines={0}
        />
        <RobotoText
          text={props.value4}
          textStyle={undefined}
          isBold={false}
          numberOfLines={0}
        />
      </View>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate(props.navigationScreenName, {item})
        }>
        <View
          style={{flex: 1, alignItems: 'flex-end', justifyContent: 'center'}}>
          <AntDesign name="edit" size={30} />
        </View>
      </TouchableOpacity>
    </View>
  );
}

export default EntityDetailCardComponent;

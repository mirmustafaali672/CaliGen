import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {View, TouchableOpacity} from 'react-native';
import RobotoText from '../Text/RobotoText';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import ButtonComponent from '../Buttons';

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
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const item = props.item;
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: MaterialColorTheme.surfaceContainer,
        padding: '5%',
        marginHorizontal: 6,
        marginVertical: 5,
        borderRadius: 10,
      }}>
      {/* {props.showUserProfile && (
        <View
          style={{
            flex: 1.5,
            alignItems: 'flex-start',
            justifyContent: 'center',
            marginHorizontal: 10,
          }}>
          <MaterialIcons
            name="edit"
            size={60}
            color={MaterialColorTheme.onSurface}
          />
        </View>
      )} */}
      <View style={{flex: 6, alignItems: 'flex-start'}}>
        <RobotoText
          text={
            props.cardTitle.length < 8
              ? `${props.cardTitle}`
              : `${props.cardTitle.substring(0, 8)}...`
          }
          textStyle={{fontSize: 25, color: MaterialColorTheme.onSurface}}
          isBold={true}
          numberOfLines={0}
        />
        <RobotoText
          text={props.value1}
          textStyle={{color: MaterialColorTheme.onSurface}}
          isBold={false}
          numberOfLines={0}
        />
        <RobotoText
          text={props.value2}
          textStyle={{color: MaterialColorTheme.onSurface}}
          isBold={false}
          numberOfLines={0}
        />
        <RobotoText
          text={props.value3}
          textStyle={{color: MaterialColorTheme.onSurface}}
          isBold={false}
          numberOfLines={0}
        />
        <RobotoText
          text={props.value4}
          textStyle={{color: MaterialColorTheme.onSurface}}
          isBold={false}
          numberOfLines={0}
        />
      </View>
      <View style={{alignItems: 'center', justifyContent: 'center'}}>
        <ButtonComponent
          buttonClicked={() =>
            props.navigation.navigate(props.navigationScreenName, {item})
          }
          buttonTitle={''}
          buttonIcon={
            <MaterialIcons
              name="edit"
              size={25}
              color={MaterialColorTheme.onPrimary}
            />
          }
          iconAtEnd={true}
          type={'Primary'}
        />
      </View>
    </View>
  );
}

export default EntityDetailCardComponent;

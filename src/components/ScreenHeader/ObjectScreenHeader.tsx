import {View} from 'react-native';
import RobotoText from '../../components/Text/RobotoText';
import ButtonComponent from '../Buttons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import { Schemes } from '../../styles/MaterialColorThemeInterface';

interface HeaderObjectInterface {
  headerTitle: string;
  showCreateEntityButton: boolean;
  showDeleteEntityButton: boolean;
  createBuutonClickNavigationRoute: any;
  navigation: any;
}

function ObjectScreenHeader(props: HeaderObjectInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <RobotoText
          text={props.headerTitle ?? '--'}
          textStyle={{
            fontSize: 40,
            margin: 10,
            marginVertical: 20,
            color: MaterialColorTheme.onSurface,
          }}
          isBold={true}
          numberOfLines={0}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          gap: 20,
          marginRight: 10,
        }}>
        <ButtonComponent
          buttonClicked={() => props.navigation.goBack()}
          buttonTitle={''}
          buttonIcon={
            <AntDesign
              name="arrowleft"
              color={MaterialColorTheme.onSecondaryContainer}
              size={20}
            />
          }
          iconAtEnd={true}
          type="Secondary"
        />
        {props.showCreateEntityButton && (
          <ButtonComponent
            buttonClicked={() =>
              props.navigation.navigate(props.createBuutonClickNavigationRoute)
            }
            buttonTitle={''}
            buttonIcon={
              <AntDesign
                name="plus"
                color={MaterialColorTheme.onPrimary}
                size={20}
              />
            }
            iconAtEnd={true}
            type="Primary"
          />
        )}
      </View>
    </View>
  );
}

export default ObjectScreenHeader;

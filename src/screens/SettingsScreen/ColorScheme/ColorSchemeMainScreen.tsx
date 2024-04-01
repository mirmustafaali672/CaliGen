import {View, ScrollView} from 'react-native';
import {Schemes} from '../../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../../styles/MaterialColorSchemeSelector';
import ObjectScreenHeader from '../../../components/ScreenHeader/ObjectScreenHeader';
import TabNavItemListComponent from '../../../components/TabNavigationComponent/TabNavItemListComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Appearance} from 'react-native';
import {
  CurrentMaterialColor,
  SetCurrentMaterialColor,
} from '../../../styles/CurrentMaterialColor';
import RobotoText from '../../../components/Text/RobotoText';

interface ColorSchemeMainScreenInterface {
  navigation: any;
}
function ColorSchemeMainScreen(props: ColorSchemeMainScreenInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  async function SetTheme(
    theme: 'Pink' | 'Blue' | 'Baseline' | 'Teal' | 'Orange' | 'Cyan',
  ) {
    // Appearance.setColorScheme(theme);
    AsyncStorage.setItem('UserColorScheme', theme != null ? theme : 'Baseline');
    SetCurrentMaterialColor(theme);
    // await Appearance.setColorScheme(null);
    // await Appearance.setColorScheme('light');
    // await Appearance.setColorScheme('dark');
    Appearance.setColorScheme(Appearance.getColorScheme());
    props.navigation.navigate('ColorSchemeMainScreen');
  }
  return (
    <View style={{flex: 1, backgroundColor: MaterialColorTheme.surface}}>
      <ObjectScreenHeader
        headerTitle={'Color Scheme'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
      <View style={{flexDirection: "row", justifyContent:"center"}}>
        <RobotoText
          text={'Note: '}
          textStyle={{color: MaterialColorTheme.onSurfaceVariant}}
          isBold={true}
          numberOfLines={0}
        />
        <RobotoText
          text={'Close and open app again for changes to take place.'}
          textStyle={{color: MaterialColorTheme.onSurfaceVariant}}
          isBold={false}
          numberOfLines={0}
        />
      </View>
      <ScrollView>
        <TabNavItemListComponent
          title={'Baseline'}
          onItemClicked={() => SetTheme('Baseline')}
        />
        <TabNavItemListComponent
          title={'Teal'}
          onItemClicked={() => SetTheme('Teal')}
        />
        <TabNavItemListComponent
          title={'Blue'}
          onItemClicked={() => SetTheme('Blue')}
        />
        <TabNavItemListComponent
          title={'Orange'}
          onItemClicked={() => SetTheme('Orange')}
        />
        <TabNavItemListComponent
          title={'Cyan'}
          onItemClicked={() => SetTheme('Cyan')}
        />
        <TabNavItemListComponent
          title={'Pink'}
          onItemClicked={() => SetTheme('Pink')}
        />
      </ScrollView>
    </View>
  );
}

export default ColorSchemeMainScreen;

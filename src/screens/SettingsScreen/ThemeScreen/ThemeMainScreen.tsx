import {View, ScrollView} from 'react-native';
import {Schemes} from '../../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../../styles/MaterialColorSchemeSelector';
import ObjectScreenHeader from '../../../components/ScreenHeader/ObjectScreenHeader';
import TabNavItemListComponent from '../../../components/TabNavigationComponent/TabNavItemListComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Appearance} from 'react-native';

interface ThemeMainScreenInterface {
  navigation: any;
}
function ThemeMainScreen(props: ThemeMainScreenInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  async function SetTheme(theme: 'light' | 'dark' | null)
  {
    Appearance.setColorScheme(theme);
    AsyncStorage.setItem('UserPreferedTheme',theme != null ? theme : 'System');
    props.navigation.navigate("ThemeMainScreen")
  }
  return (
    <View style={{flex: 1, backgroundColor: MaterialColorTheme.surface}}>
      <ObjectScreenHeader
        headerTitle={'Theme'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
      <ScrollView>
        <TabNavItemListComponent
          title={'Dark'}
          onItemClicked={() => SetTheme("dark")}
        />
        <TabNavItemListComponent
          title={'Light'}
          onItemClicked={() => SetTheme("light")}
        />
        <TabNavItemListComponent
          title={'System'}
          onItemClicked={() => SetTheme(null)}
        />
      </ScrollView>
    </View>
  );
}

export default ThemeMainScreen;

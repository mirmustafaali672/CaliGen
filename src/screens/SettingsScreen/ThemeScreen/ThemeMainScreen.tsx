import {
  View,
  ScrollView,
  FlatList,
  useColorScheme,
  ColorSchemeName,
} from 'react-native';
import {Schemes} from '../../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../../styles/MaterialColorSchemeSelector';
import ObjectScreenHeader from '../../../components/ScreenHeader/ObjectScreenHeader';
import TabNavItemListComponent from '../../../components/TabNavigationComponent/TabNavItemListComponent';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Appearance} from 'react-native';
import {useEffect, useState} from 'react';
import {
  GetDataFromStorage,
  GetStringFromStorage,
} from '../../../AsyncStorageActions/AsyncDataAction';

interface ThemeMainScreenInterface {
  navigation: any;
}
interface ThemesListInterface {
  name: string;
  value: ColorSchemeName;
}
const themesList: ThemesListInterface[] = [
  {
    name: 'System',
    value: null,
  },
  {
    name: 'Light',
    value: 'light',
  },
  {
    name: 'Dark',
    value: 'dark',
  },
];
function ThemeMainScreen(props: ThemeMainScreenInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const theme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ColorSchemeName>();
  async function SetTheme(theme: ColorSchemeName) {
    await Appearance.setColorScheme(theme);
    AsyncStorage.setItem('UserPreferedTheme', theme != null ? theme : 'System');
    props.navigation.navigate('ThemeMainScreen');
    setCurrentTheme(theme);
  }

  async function GetCurrentTheme() {
    let a = await GetStringFromStorage('UserPreferedTheme');
    setCurrentTheme(a == 'System' ? null : a);
  }
  useEffect(() => {
    GetCurrentTheme();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: MaterialColorTheme.surface}}>
      <ObjectScreenHeader
        headerTitle={'Theme'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
      <FlatList
        data={themesList}
        renderItem={({item}) => {
          return (
            <TabNavItemListComponent
              title={item.name}
              onItemClicked={() => SetTheme(item.value)}
              showAsSelected = { currentTheme ==  item.value}
            />
          );
        }}
      />
    </View>
  );
}

export default ThemeMainScreen;

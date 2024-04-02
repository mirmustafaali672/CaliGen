import {Appearance, ColorSchemeName, useColorScheme} from 'react-native';
import {Schemes} from './MaterialColorThemeInterface';
import {Baseline, MaterialColorScheme} from './MaterialColorThemeData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import {
  CurrentMaterialColor,
  SetCurrentMaterialColor,
} from './CurrentMaterialColor';

export function MaterialColorThemeSelector(): Schemes {
  let theme: ColorSchemeName = useColorScheme();
  var UserColorScheme:
    | 'Pink'
    | 'Blue'
    | 'Baseline'
    | 'Teal'
    | 'Orange'
    | 'Cyan';
  async function GetData() {
    UserColorScheme =
      (await AsyncStorage.getItem('UserColorScheme')) ?? CurrentMaterialColor;
    SetCurrentMaterialColor(UserColorScheme);
    const userTheme: any =
      (await AsyncStorage.getItem('UserPreferedTheme')) ?? theme;
    if (userTheme != 'System' && userTheme != null && userTheme != undefined) {
      Appearance.setColorScheme(userTheme);
    }
  }

  useEffect(() => {
    GetData();
  }, [theme]);

  let scheme =
    MaterialColorScheme[CurrentMaterialColor].schemes[
      theme == 'light' ? 'light' : 'dark'
    ];

  return scheme;
}

export default MaterialColorThemeSelector;

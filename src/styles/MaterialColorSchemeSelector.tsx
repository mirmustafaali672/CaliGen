import {Appearance, ColorSchemeName, useColorScheme} from 'react-native';
import {Schemes} from './MaterialColorThemeInterface';
import {Baseline, MaterialColorScheme} from './MaterialColorThemeData';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect} from 'react';
import { CurrentMaterialColor } from './CurrentMaterialColor';

export function MaterialColorThemeSelector(): Schemes {
  let theme: ColorSchemeName = useColorScheme();
  // let colorScheme: 'Pink' | 'Blue' | 'Baseline' | 'Teal' | 'Orange' | 'Cyan' =
  //   'Orange';
  async function GetData() {
    const userTheme: any =
      (await AsyncStorage.getItem('UserPreferedTheme')) ?? theme;
      const UserColorScheme: any =
      (await AsyncStorage.getItem('UserColorScheme')) ?? theme;
    if (userTheme != 'System' && userTheme != null && userTheme != undefined) {
      Appearance.setColorScheme(userTheme);
    }
  }

  useEffect(() => {
    GetData();
  }, []);

  let scheme =
     MaterialColorScheme[CurrentMaterialColor].schemes[
      theme == 'light' ? 'light' : 'dark'
    ];

  return scheme;
}

export default MaterialColorThemeSelector;

import { Appearance, useColorScheme } from "react-native";
import { Schemes } from "./MaterialColorThemeInterface";
import { MaterialColorThemeData } from "./MaterialColorThemeData";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";

export function MaterialColorThemeSelector(): Schemes {
    let theme = useColorScheme();
    async function GetData()
    {
      const data: string | null = await AsyncStorage.getItem('UserPreferedTheme');
      if(data != 'System' && data != null && data != undefined)
      {
        Appearance.setColorScheme(data);
        console.log("theme", data)
      }
    }
    useEffect(()=>{GetData()},[]);
    const scheme = MaterialColorThemeData.schemes[theme == "light" ? "light" : "dark"]
    return scheme;
  }

export default MaterialColorThemeSelector;
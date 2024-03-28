import { useColorScheme } from "react-native";
import { MaterialColorThemeInterface, Schemes } from "./MaterialColorThemeInterface";
import { MaterialColorThemeData } from "./MaterialColorThemeData";

export function MaterialColorThemeSelector(): Schemes {
    const theme = useColorScheme();
    const scheme = MaterialColorThemeData.schemes[theme == "light" ? "light" : "dark"]
    return scheme;
  }

export default MaterialColorThemeSelector;
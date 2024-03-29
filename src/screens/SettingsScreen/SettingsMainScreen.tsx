import {StyleSheet, View} from 'react-native';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';

interface SettingsMainScreensInterface {
  navigation: any;
}

function SettingsMainScreen(props: SettingsMainScreensInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: MaterialColorTheme.surface,
    },
  });
  return <View style={styles.container}></View>;
}

export default SettingsMainScreen;

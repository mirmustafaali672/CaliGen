import {StyleSheet, View} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';

interface SettingsMainScreensInterface {
  navigation: any;
}

function SettingsMainScreen(props: SettingsMainScreensInterface) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: MaterialColors.MaterialWhite,
  },
});
export default SettingsMainScreen;

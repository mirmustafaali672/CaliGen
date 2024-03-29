import {StyleSheet, View} from 'react-native';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import { Schemes } from '../../styles/MaterialColorThemeInterface';

interface HistoryMainScreenInterface {
  navigation: any;
}

function HistoryMainScreen(props: HistoryMainScreenInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: MaterialColorTheme.surface,
        flex: 1
    }
})
  return (
    <View style={styles.mainContainer}>
      <ObjectScreenHeader
        headerTitle={'History'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
    </View>
  );
}



export default HistoryMainScreen;

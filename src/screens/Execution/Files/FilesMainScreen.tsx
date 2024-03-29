import {StyleSheet, View} from 'react-native';
import ObjectScreenHeader from '../../../components/ScreenHeader/ObjectScreenHeader';
import { Schemes } from '../../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../../styles/MaterialColorSchemeSelector';

interface FilesMainScreenInterface {
  navigation: any;
}

function FilesMainScreen(props: FilesMainScreenInterface) {
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
        headerTitle={'Files'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
    </View>
  );
}



export default FilesMainScreen;

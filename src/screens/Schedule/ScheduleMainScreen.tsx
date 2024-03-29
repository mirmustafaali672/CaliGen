import {StyleSheet, View} from 'react-native';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import { Schemes } from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
interface ScheduleMainScreenInterface {
  navigation: any;
}

function ScheduleMainScreen(props: ScheduleMainScreenInterface) {
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
        headerTitle={'Schedule'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
    </View>
  );
}

export default ScheduleMainScreen;

import {StyleSheet, View} from 'react-native';
import ObjectScreenHeader from '../../../components/ScreenHeader/ObjectScreenHeader';
import * as MaterialColors from '../../../styles/materialColors';

interface DataVisualizationMainScreenInterface {
  navigation: any;
}

function DataVisualizationMainScreen(props: DataVisualizationMainScreenInterface) {
  return (
    <View style={styles.mainContainer}>
      <ObjectScreenHeader
        headerTitle={'Data Visualization'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: MaterialColors.MaterialWhite,
        flex: 1
    }
})

export default DataVisualizationMainScreen;

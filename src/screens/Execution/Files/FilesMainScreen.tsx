import {StyleSheet, View} from 'react-native';
import ObjectScreenHeader from '../../../components/ScreenHeader/ObjectScreenHeader';
import * as MaterialColors from '../../../styles/materialColors';

interface FilesMainScreenInterface {
  navigation: any;
}

function FilesMainScreen(props: FilesMainScreenInterface) {
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

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: MaterialColors.MaterialWhite,
        flex: 1
    }
})

export default FilesMainScreen;

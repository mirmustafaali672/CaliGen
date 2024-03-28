import {StyleSheet, View} from 'react-native';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import * as MaterialColors from '../../styles/materialColors';

interface SkillsMainScreenInterface {
  navigation: any;
}

function SkillsMainScreen(props: SkillsMainScreenInterface) {
  return (
    <View style={styles.mainContainer}>
      <ObjectScreenHeader
        headerTitle={'Skills'}
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

export default SkillsMainScreen;

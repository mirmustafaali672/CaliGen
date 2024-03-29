import {StyleSheet, View} from 'react-native';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';

interface AboutMainScreenInterface {
  navigation: any;
}

function AboutMainScreen(props: AboutMainScreenInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();

  const styles = StyleSheet.create({
    mainContainer: {
      backgroundColor: MaterialColorTheme.surface,
      flex: 1,
    },
  });
  return (
    <View style={styles.mainContainer}>
      <ObjectScreenHeader
        headerTitle={'About'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
    </View>
  );
}

export default AboutMainScreen;

import {StyleSheet, View, ScrollView} from 'react-native';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import TabNavItemListComponent from '../../components/TabNavigationComponent/TabNavItemListComponent';

interface SettingsMainScreensInterface {
  navigation: any;
}

function SettingsMainScreen(props: SettingsMainScreensInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: MaterialColorTheme.surface,
      flex: 1,
    },
  });
  return (
    <View style={styles.container}>
      <ObjectScreenHeader
        headerTitle={'Settings'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
      <ScrollView>
        <TabNavItemListComponent
          title={'Theme'}
          onItemClicked={() => console.log('theme')}
        />
      </ScrollView>
    </View>
  );
}

export default SettingsMainScreen;

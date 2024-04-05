import {View} from 'react-native';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
interface DevelopmentMainScreenInterface {
  navigation: any;
}
function DevelopmentMainScreen(props: DevelopmentMainScreenInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  return (
    <View style={{backgroundColor: MaterialColorTheme.surface, flex: 1}}>
      <ObjectScreenHeader
        headerTitle={'Development'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={undefined}
      />
    </View>
  );
}
export default DevelopmentMainScreen;

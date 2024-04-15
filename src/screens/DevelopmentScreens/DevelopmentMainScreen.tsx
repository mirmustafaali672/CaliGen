import {ScrollView, View} from 'react-native';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import ButtonExampleMainScreen from './ButtonExampleMainScreen';

interface DevelopmentMainScreenInterface {
  navigation: any;
}
function DevelopmentMainScreen(props: DevelopmentMainScreenInterface): React.JSX.Element {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  return (
    <View style={{backgroundColor: MaterialColorTheme.surface, flex: 1}}>
      <ObjectScreenHeader
        headerTitle={'Development'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
      <ScrollView overScrollMode="never">
        <ButtonExampleMainScreen />
      </ScrollView>
    </View>
  );
}
export default DevelopmentMainScreen;

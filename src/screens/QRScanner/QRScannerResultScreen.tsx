import {View} from 'react-native';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import RobotoText from '../../components/Text/RobotoText';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import {Schemes} from '../../styles/MaterialColorThemeInterface';

interface QRScannerResultScreenInterface {
  navigation: any;
  route: any;
}
function QRScannerResultScreen(props: QRScannerResultScreenInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  return (
    <View style={{flex: 1, backgroundColor: MaterialColorTheme.surface}}>
      <ObjectScreenHeader
        headerTitle={''}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
      <RobotoText
        text={props.route.params?.result}
        textStyle={undefined}
        isBold={false}
        numberOfLines={0}
      />
    </View>
  );
}
export default QRScannerResultScreen;

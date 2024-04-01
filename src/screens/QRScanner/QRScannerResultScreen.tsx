import {View} from 'react-native';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import RobotoText from '../../components/Text/RobotoText';

interface QRScannerResultScreenInterface {
  navigation: any;
  route: any
}
function QRScannerResultScreen(props: QRScannerResultScreenInterface) {
  return (
    <View>
      <ObjectScreenHeader
        headerTitle={''}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
      <RobotoText text={props.route.params?.result} textStyle={undefined} isBold={false} numberOfLines={0} />
    </View>
  );
}
export default QRScannerResultScreen;

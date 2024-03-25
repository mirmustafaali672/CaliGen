import {View} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import RobotoText from '../../components/Text/RobotoText';

interface PermissionDetailScreenInterface {
  navigation: any;
  route: any;
}

function PermissionDetailScreen(props: PermissionDetailScreenInterface) {
  return (
    <View style={{backgroundColor: MaterialColors.MaterialWhite, flex: 1}}>
      <View>
        <ObjectScreenHeader
          headerTitle={props.route.params?.objectName}
          showCreateEntityButton={false}
          showDeleteEntityButton={false}
          createBuutonClickNavigationRoute={undefined}
          navigation={props.navigation}
        />
      </View>
      <View style={{flex: 1, alignItems: "center"}}>
        <RobotoText
          text={props.route.params?.itemType}
          textStyle={{fontSize: 15}}
          isBold={true}
          numberOfLines={0}
        />
      </View>
    </View>
  );
}

export default PermissionDetailScreen;

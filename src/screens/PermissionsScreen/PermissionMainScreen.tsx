import {View, ScrollView} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import SearchInputField from '../../components/InputFields/SearchField';

interface PermissionMainScreenInterface {
  navigation: any;
}
function PermissionMainScreen(props: PermissionMainScreenInterface) {
  return (
    <View style={{flex: 1, backgroundColor: MaterialColors.MaterialWhite}}>
      <ObjectScreenHeader
        headerTitle={'Permissions'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
      <View style={{marginHorizontal: 10}}>
        <View style={{}}>
          <SearchInputField value={''} onChangeText={undefined} />
        </View>
        <ScrollView></ScrollView>
      </View>
    </View>
  );
}
export default PermissionMainScreen;

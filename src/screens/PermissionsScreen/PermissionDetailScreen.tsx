import {ActivityIndicator, View} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import RobotoText from '../../components/Text/RobotoText';
import {useEffect, useState} from 'react';
import {
  GetAllClaimTypes,
  GetRolesPermissionById,
} from '../../api/PermissionsAPI';
import TabNavigationComponent from '../../components/TabNavigationComponent/TabNavigationComponent';

interface PermissionDetailScreenInterface {
  navigation: any;
  route: any;
}

function PermissionDetailScreen(props: PermissionDetailScreenInterface) {
  const [permissions, setPemissions] = useState<PermissionInterface>();
  const [permissionsActivity, setPermissionsActivity] = useState(false);
  const [selectedGroupIndex, setSelectedGroupIndex] = useState(0);
  async function GetRolesPermission(id: string) {
    setPermissionsActivity(true);
    await GetRolesPermissionById(
      id,
      props.route.params?.objectName == 'Role' ? 'R' : 'U',
    )
      .then(res => {
        setPemissions(res?.data);
      })
      .catch(error => {})
      .then(res => {
        setPermissionsActivity(false);
      });
  }

  useEffect(() => {
    console.log('permissions', permissions);
  }, [permissions]);

  useEffect(() => {
    GetRolesPermission(props.route.params?.itemId);
  }, []);

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
      <View style={{alignItems: 'center'}}>
        <RobotoText
          text={props.route.params?.itemType}
          textStyle={{fontSize: 15}}
          isBold={true}
          numberOfLines={0}
        />
      </View>
      {permissionsActivity && (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator
            size="large"
            color={MaterialColors.MaterialDeepPurple}
          />
        </View>
      )}
      {!permissionsActivity && (
        <View>
          <View style={{}}>
            <TabNavigationComponent
              defaultSelectedTabIndex={0}
              items={permissions?.groups ?? []}
              keyName={'name'}
              valueName={'displayName'}
              onTabClicked={(index: any) => setSelectedGroupIndex(index)}
            />
          </View>
          <View style={{margin: 20}}>
            {permissions?.groups[selectedGroupIndex].permissions.map(
              (permission, index) => {
                return (
                  <View key={permission.name}>
                    <RobotoText
                      text={permission.displayName}
                      textStyle={undefined}
                      isBold={true}
                      numberOfLines={0}
                    />
                  </View>
                );
              },
            )}
          </View>
        </View>
      )}
    </View>
  );
}

export default PermissionDetailScreen;

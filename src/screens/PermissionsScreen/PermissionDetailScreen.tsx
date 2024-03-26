import {
  ActivityIndicator,
  FlatList,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import RobotoText from '../../components/Text/RobotoText';
import {useEffect, useState} from 'react';
import {GetPermissionFromAPI} from '../../api/PermissionsAPI';
import TabNavigationComponent from '../../components/TabNavigationComponent/TabNavigationComponent';
import CheckBoxComponent from '../../components/CheckBoxComponent/CheckBoxComponent';
import TabNavItemListComponent from '../../components/TabNavigationComponent/TabNavItemListComponent';
import PermissionDetailScreenModel, {
  PermissionDetailScreenModelInterface,
} from '../../components/PermissionModels/PermissionDetailScreenModel';

interface PermissionDetailScreenInterface {
  navigation: any;
  route: any;
}

function PermissionDetailScreen(props: PermissionDetailScreenInterface) {
  const [permissions, setPemissions] = useState<PermissionInterface>(); //All Application Permissions
  const [selectedGroup, setSelectedGroup] = useState<Permission[]>(); //Activity permissions
  const [selectedParentGroup, setSelectedParentGroup] =
    useState<Permission[]>();
  const [selectedChildGroup, setSelectedChildGroup] = useState<Permission[]>();
  const [permissionsActivity, setPermissionsActivity] = useState(false);
  const [parentGroupActivity, setParentGroupActivity] =
    useState<boolean>(false);
  const [childGroupActivity, setChildGroupActivity] = useState(false);
  const [dataForPermissionModel, setDataForPermissionModel] =
    useState<PermissionDetailScreenModelInterface>();

  async function GetPermission(id: string) {
    setPermissionsActivity(true);
    await GetPermissionFromAPI(
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
    GetPermission(props.route.params?.itemId);
  }, []);

  useEffect(() => {
    setParentGroupActivity(true);
    setSelectedParentGroup(
      oldValue => selectedGroup?.filter(item => item.parentName == null) ?? [],
    );
  }, [selectedGroup]);

  useEffect(() => {
    setParentGroupActivity(false);
  }, [selectedParentGroup]);

  useEffect(() => {
    setChildGroupActivity(false);
  }, [selectedChildGroup]);

  function submitPermission()
  {
    setDataForPermissionModel({visible: false});
    GetPermission(props.route.params?.itemId);
  }

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
        <View style={{flex: 1}}>
          <View style={{}}>
            <TabNavigationComponent
              defaultSelectedTabIndex={0}
              items={permissions?.groups ?? []}
              keyName={'name'}
              valueName={'displayName'}
              onTabClicked={(index: any) => {
                setParentGroupActivity(true);
                setSelectedGroup(permissions?.groups[index].permissions ?? []);
              }}
            />
          </View>
          {parentGroupActivity && (
            <View style={{flex: 1, justifyContent: 'center'}}>
              <ActivityIndicator
                size="large"
                color={MaterialColors.MaterialDeepPurple}
              />
            </View>
          )}
          {!parentGroupActivity && (
            <View style={{flex: 1}}>
              <TabNavigationComponent
                items={selectedParentGroup ?? []}
                keyName={'name'}
                valueName={'displayName'}
                onTabClicked={(index: any) => {
                  setChildGroupActivity(true);
                  setSelectedChildGroup(
                    oldValue =>
                      selectedGroup?.filter(
                        item =>
                          item.parentName != null &&
                          item.parentName == selectedParentGroup[index].name,
                      ) ?? [],
                  );
                }}
                defaultSelectedTabIndex={0}
              />
              {childGroupActivity && (
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <ActivityIndicator
                    size="large"
                    color={MaterialColors.MaterialDeepPurple}
                  />
                </View>
              )}
              {!childGroupActivity && (
                <View style={{marginHorizontal: 20}}>
                  <FlatList
                    data={selectedChildGroup}
                    keyExtractor={item => item.name}
                    renderItem={({item, index}) => {
                      return (
                        <View>
                          <TabNavItemListComponent
                            title={item.displayName}
                            onItemClicked={() =>
                              setDataForPermissionModel({
                                visible: true,
                                name: item.name,
                                displayName: item.displayName,
                                isGranted: item.isGranted,
                                providerKey: props.route.params?.objectName,
                                providerName: props.route.params?.itemType == 'Role' ? 'R' : 'U',
                              })
                            }
                          />
                        </View>
                        // </TouchableOpacity>
                      );
                    }}
                  />
                </View>
              )}
            </View>
          )}
        </View>
      )}
      <View>
        <PermissionDetailScreenModel
          displayName={dataForPermissionModel?.displayName ?? ''}
          name={dataForPermissionModel?.name ?? ''}
          isGranted={dataForPermissionModel?.isGranted ?? false}
          providerName={dataForPermissionModel?.providerName ?? ''}
          providerKey={dataForPermissionModel?.providerKey ?? ''}
          visible={dataForPermissionModel?.visible ?? false}
          onCancel={ () => setDataForPermissionModel({visible: false})}
          onSubmit={() => submitPermission()}
        />
      </View>
    </View>
  );
}

export default PermissionDetailScreen;

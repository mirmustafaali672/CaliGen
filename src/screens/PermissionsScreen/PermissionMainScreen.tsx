import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import SearchInputField from '../../components/InputFields/SearchField';
import TabNavigationComponent, {
  TabComponentsInterface,
  TabNavigationComponentInterface,
} from '../../components/TabNavigationComponent/TabNavigationComponent';
import {useEffect, useState} from 'react';
import {UserDetailsInterface, UsersInterface} from '../../interfaces/UsersInterface';
import {GetRoles} from '../../api/RolesAPI';
import {GetUsers} from '../../api/UsersAPI';
import RobotoText from '../../components/Text/RobotoText';
import EntityDetailCardComponent from '../../components/EntityDetailCardComponent/EntityDetailCardComponent';

interface PermissionMainScreenInterface {
  navigation: any;
}
function PermissionMainScreen(props: PermissionMainScreenInterface) {
  const [search, setSearch] = useState('');
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  var TabNavigationComponentData: TabComponentsInterface[] = [
    {componentName: 'RolesScreen', componentTitile: 'Role'},
    {componentName: 'UsersScreen', componentTitile: 'User'},
  ];
  const [usersData, setusersData] = useState<UsersInterface>();
  const [rolesData, setRolesData] = useState<RolesInterface>();
  const [rolesActivity, setRolesActivity] = useState(false);
  const [usersActivity, setUsersActivity] = useState(false);

  async function GetRolesList() {
    setRolesActivity(true);
    await GetRoles(search)
      .then((data: any) => {
        setRolesData(data.data);
      })
      .catch(error => {})
      .then(data => {
        setRolesActivity(false);
      });
  }

  async function GetUsersList() {
    setUsersActivity(true);
    await GetUsers(search)
      .then((data: any) => {
        setusersData(data.data);
      })
      .catch(error => {})
      .then(data => {
        setUsersActivity(false);
      });
  }

  useEffect(() => {
    if (selectedTabIndex == 0) {
      GetRolesList();
    } else if (selectedTabIndex == 1) {
      GetUsersList();
    }
  }, [selectedTabIndex, search]);
  return (
    <View style={{flex: 1, backgroundColor: MaterialColors.MaterialWhite}}>
      <ObjectScreenHeader
        headerTitle={'Permissions'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
      <View style={{marginHorizontal: 10, flex: 1}}>
        <View style={{}}>
          <SearchInputField
            value={search}
            onChangeText={(value: any) => setSearch(value)}
          />
        </View>
        <View>
          <TabNavigationComponent
            defaultSelectedTabIndex={0}
            tabComponents={TabNavigationComponentData}
            onTabClicked={(index: any) => setSelectedTabIndex(index)}
          />
        </View>
        <View style={{flex: 1}}>
          {selectedTabIndex == 0 && (
            <View style={{flex: 1}}>
              {rolesActivity && (
                <View style={{flex: 1, justifyContent: 'center'}}>
                  <ActivityIndicator
                    size="large"
                    color={MaterialColors.MaterialDeepPurple}
                  />
                </View>
              )}
              {!rolesActivity && (
                <View style={{flex: 1, padding: 10}}>
                  <View style={{flexDirection: 'row'}}>
                    <RobotoText
                      text={'Total: '}
                      textStyle={{}}
                      isBold={true}
                      numberOfLines={0}
                    />
                    <RobotoText
                      text={rolesData?.totalCount.toString() ?? ''}
                      textStyle={{}}
                      isBold={true}
                      numberOfLines={0}
                    />
                  </View>
                  <View>
                    <FlatList
                      overScrollMode="never"
                      keyExtractor={item => item.id}
                      data={rolesData?.items}
                      renderItem={({item}) => {
                        return (
                          <EntityDetailCardComponent
                            navigation={props.navigation}
                            item={item}
                            cardTitle={item.name}
                            value1={`Name: ${item.name}`}
                            value2={`Is default: ${item.isDefault}`}
                            value3={`Is public: ${item.isPublic}`}
                            value4={`User Count: ${item.userCount}`}
                            showUserProfile={false}
                            navigationScreenName={'CreateRoleScreen'}
                          />
                        );
                      }}
                    />
                  </View>
                </View>
              )}
            </View>
          )}
          {
            selectedTabIndex == 1 &&
            <View style={{ flex: 1 }}>
            {usersActivity &&
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size="large" color={MaterialColors.MaterialDeepPurple} />
                </View>}
            {!usersActivity &&
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                        <RobotoText text={"Total: "} textStyle={{}} isBold={true} numberOfLines={0} />
                        <RobotoText text={usersData?.totalCount.toString() ?? ""} textStyle={{}} isBold={true} numberOfLines={0} />
                    </View>
                    <View>
                        <FlatList overScrollMode="never"
                            keyExtractor={item => item.id}
                            data={usersData?.items}
                            renderItem={({ item }) => {
                                return (<EntityDetailCardComponent navigation={props.navigation} item={item} 
                                    cardTitle={item.userName} value1={`Name: ${item.name}`} 
                                    value2={`Surname: ${item.surname}`} value3={`Email: ${item.email}`} 
                                    value4={`Phone Number: ${item.phoneNumber}`} showUserProfile={true} navigationScreenName="CreateUserScreen"/>)
                            }} />
                    </View>
                </View>
            }
        </View>
          }
        </View>
      </View>
    </View>
  );
}
export default PermissionMainScreen;

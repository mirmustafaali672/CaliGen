import { View, Text, ActivityIndicator, FlatList, TouchableOpacity } from "react-native";
import * as MaterialColors from "../../styles/materialColors";
import RobotoText from "../../components/Text/RobotoText";
import ObjectScreenHeader from "../../components/ScreenHeader/ObjectScreenHeader";
import { useEffect, useState } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchInputField from "../../components/InputFields/SearchField";
import { useIsFocused } from "@react-navigation/native";
import { GetRoles } from "../../api/RolesAPI";
import EntityDetailCardComponent from "../../components/EntityDetailCardComponent/EntityDetailCardComponent";

interface RolesScreenInterface {
    navigation: any
}


function RolesScreen(props: RolesScreenInterface) {
    const [roles, setRoles] = useState<RolesInterface>();
    const [rolesActivity, setRolesActivity] = useState(false);
    const [search, setSearch] = useState('');

    const isFocused = useIsFocused();

    useEffect(() => {
        GetRolesList();
    }, [isFocused]);


    async function GetRolesList() {
        setRolesActivity(true);
        await GetRoles(search)
            .then((data: any) => {
                setRoles(data.data);
            })
            .catch(error => {
            }).then(
                data => {
                    setRolesActivity(false);
                }
            );
    }
    useEffect(() => {
        GetRolesList();
    }, []);

    useEffect(() => {
        GetRolesList();
    }, [search]);

    return <View style={{ backgroundColor: MaterialColors.MaterialWhite, flex: 1 }}>
        <ObjectScreenHeader showCreateEntityButton={true} headerTitle="Roles" navigation={props.navigation} createBuutonClickNavigationRoute={"CreateRoleScreen"} showDeleteEntityButton={false} />
        <View style={{ marginHorizontal: 6 }}>
            <SearchInputField value={search} onChangeText={(value: any) => {
                setSearch(value)
            }} />
        </View>
        <View style={{ flex: 1 }}>
            {rolesActivity &&
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size="large" color={MaterialColors.MaterialDeepPurple} />
                </View>}
            {!rolesActivity &&
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                        <RobotoText text={"Total: "} textStyle={{}} isBold={true} numberOfLines={0} />
                        <RobotoText text={roles?.totalCount.toString() ?? ""} textStyle={{}} isBold={true} numberOfLines={0} />
                    </View>
                    <View>
                        <FlatList overScrollMode="never"
                            keyExtractor={item => item.id}
                            data={roles?.items}
                            renderItem={({ item }) => {
                                return (<EntityDetailCardComponent navigation={props.navigation} item={item} 
                                    cardTitle={item.name} value1={`Name: ${item.name}`} 
                                    value2={`Is default: ${item.isDefault}`} value3={`Is public: ${item.isPublic}`} 
                                    value4={`User Count: ${item.userCount}`} showUserProfile={false} navigationScreenName={"CreateRoleScreen"}/>
                                )
                            }} />
                    </View>
                </View>
            }
        </View>
    </View>;
}
export default RolesScreen;
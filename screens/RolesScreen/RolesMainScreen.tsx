import { View, Text, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from "react-native";
import * as MaterialColors from "../../styles/materialColors";
import RobotoText from "../../components/Text/RobotoText";
import ObjectScreenHeader from "../../components/ScreenHeader/ObjectScreenHeader";
import { useEffect, useState } from "react";
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchInputField from "../../components/InputFields/SearchField";
import { useIsFocused } from "@react-navigation/native";
import { GetRoles } from "../../api/RolesAPI";

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
        <ObjectScreenHeader showCreateEntityButton={true} headerTitle="Roles" navigation={props.navigation} createBuutonClickNavigationRoute={"CreateUserScreen"} showDeleteEntityButton={false} />
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
                                return (<View style={{ flexDirection: "row", backgroundColor: MaterialColors.MaterialIndigo, padding: 10, marginHorizontal: 6, marginVertical: 5, borderRadius: 10 }}>
                                    <View style={{ flex: 6, alignItems: "flex-start" }}>
                                        <RobotoText text={item.name.length < 10
                                            ? `${item.name}`
                                            : `${item.name.substring(0, 10)}...`} textStyle={{ fontSize: 25, color: MaterialColors.MaterialBlack }} isBold={true} numberOfLines={0} />
                                        <RobotoText text={`Name: ${item.name}`} textStyle={undefined} isBold={false} numberOfLines={0} />
                                        <RobotoText text={`Is default: ${item.isDefault}`} textStyle={undefined} isBold={false} numberOfLines={0} />
                                        <RobotoText text={`Is public: ${item.isPublic}`} textStyle={undefined} isBold={false} numberOfLines={0} />
                                        <RobotoText text={`User Count: ${item.userCount}`} textStyle={undefined} isBold={false} numberOfLines={0} />
                                    </View>
                                    <TouchableOpacity onPress={() => props.navigation.navigate("CreateUserScreen", { item })}>
                                        <View style={{ flex: 1, alignItems: "flex-end", justifyContent: "center" }}>
                                            <AntDesign name="edit" size={30} />
                                        </View>
                                    </TouchableOpacity>
                                </View>)
                            }} />
                    </View>
                </View>
            }
        </View>
    </View>;
}
export default RolesScreen;
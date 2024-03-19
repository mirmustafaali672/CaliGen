import { View, Text, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from "react-native";
import * as MaterialColors from "../../styles/materialColors";
import RobotoText from "../../components/Text/RobotoText";
import ObjectScreenHeader from "../../components/ScreenHeader/ObjectScreenHeader";
import React, { useEffect, useState } from "react";
import { GetUsers } from "../../api/UsersAPI";
import { UsersInterface } from "../../interfaces/UsersInterface";

import SearchInputField from "../../components/InputFields/SearchField";
import { useIsFocused } from "@react-navigation/native";
import EntityDetailCardComponent from "../../components/EntityDetailCardComponent/EntityDetailCardComponent";

interface UsersScreenInterface {
    navigation: any
}


function UsersScreen(props: UsersScreenInterface) {
    const [users, setUsers] = useState<UsersInterface>();
    const [usersActivity, setUsersActivity] = useState(false);
    const [search, setSearch] = useState('');

    const isFocused = useIsFocused();

    useEffect(() => {
        GetUsersList();
    }, [isFocused]);


    async function GetUsersList() {
        setUsersActivity(true);
        await GetUsers(search)
            .then((data: any) => {
                setUsers(data.data);
            })
            .catch(error => {
            }).then(
                data => {
                    setUsersActivity(false);
                }
            );
    }
    useEffect(() => {
        GetUsersList();
    }, []);

    useEffect(() => {
        GetUsersList();
    }, [search]);

    return <View style={{ backgroundColor: MaterialColors.MaterialWhite, flex: 1 }}>
        <ObjectScreenHeader showCreateEntityButton={true} headerTitle="Users" navigation={props.navigation} createBuutonClickNavigationRoute={"CreateUserScreen"} showDeleteEntityButton={false} />
        <View style={{ marginHorizontal: 6 }}>
            <SearchInputField value={search} onChangeText={(value: any) => {
                setSearch(value)
            }} />
        </View>
        <View style={{ flex: 1 }}>
            {usersActivity &&
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size="large" color={MaterialColors.MaterialDeepPurple} />
                </View>}
            {!usersActivity &&
                <View style={{ flex: 1, padding: 10 }}>
                    <View style={{ flexDirection: "row" }}>
                        <RobotoText text={"Total: "} textStyle={{}} isBold={true} numberOfLines={0} />
                        <RobotoText text={users?.totalCount.toString() ?? ""} textStyle={{}} isBold={true} numberOfLines={0} />
                    </View>
                    <View>
                        <FlatList overScrollMode="never"
                            keyExtractor={item => item.id}
                            data={users?.items}
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
    </View>;
}
export default UsersScreen;
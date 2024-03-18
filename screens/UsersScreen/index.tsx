import { View, Text, ActivityIndicator, ScrollView, FlatList, TouchableOpacity } from "react-native";
import * as MaterialColors from "../../styles/materialColors";
import PrimaryButton from "../../components/Buttons/PrimaryButtonComponent";
import RobotoText from "../../components/Text/RobotoText";
import ObjectScreenHeader from "../../components/ScreenHeader/ObjectScreenHeader";
import { useEffect, useState } from "react";
import { GetUsers } from "../../api/UserAPI";
import { UsersInterface } from "../../api/interfaces/UsersInterface";
import AntDesign from 'react-native-vector-icons/AntDesign';
import SearchInputField from "../../components/InputFields/SearchField";


function UsersScreen({ navigation }) {
    const [users, setUsers] = useState<UsersInterface>();
    const [usersActivity, setUsersActivity] = useState(false);
    const [search, setSearch] = useState('');

    async function GetUsersList() {
        setUsersActivity(true);
        await GetUsers(search)
            .then((data: any) => {
                setUsers(data.data);
                console.log("data", data.data)
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
        console.log("serca", search)
    }, [search]);

    return <View style={{ backgroundColor: MaterialColors.MaterialWhite, flex: 1 }}>
        <ObjectScreenHeader showCreateEntityButton={true} headerTitle="Users" navigation={navigation} createBuutonClickNavigationRoute={"CreateUserScreen"} />
        <View style={{marginHorizontal: 6}}>
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
                                return (<View style={{ flexDirection: "row", backgroundColor: MaterialColors.MaterialIndigo, padding: 10, marginHorizontal: 6, marginVertical: 5, borderRadius: 10 }}>
                                    <View style={{ flex: 1.5, alignItems: "flex-start", justifyContent: "center", marginHorizontal: 10 }}>
                                            <AntDesign name="user" size={60} color={MaterialColors.MaterialBlack} />
                                     
                                    </View>
                                    <View style={{ flex: 6, alignItems: "flex-start" }}>
                                        <RobotoText text={item.userName.length < 8
                                            ? `${item.userName}`
                                            : `${item.userName.substring(0, 8)}...`} textStyle={{ fontSize: 25, color: MaterialColors.MaterialBlack }} isBold={true} numberOfLines={0} />
                                        <RobotoText text={`Name: ${item.name}`} textStyle={undefined} isBold={false} numberOfLines={0} />
                                        <RobotoText text={`Surname: ${item.surname}`} textStyle={undefined} isBold={false} numberOfLines={0} />
                                        <RobotoText text={`Email: ${item.email}`} textStyle={undefined} isBold={false} numberOfLines={0} />
                                        <RobotoText text={`Phone Number: ${item.phoneNumber}`} textStyle={undefined} isBold={false} numberOfLines={0} />
                                    </View>
                                    <TouchableOpacity onPress={() => navigation.navigate("CreateUserScreen")}>
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
export default UsersScreen;
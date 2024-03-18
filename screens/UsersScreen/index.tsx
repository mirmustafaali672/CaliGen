import { View, Text, ActivityIndicator } from "react-native";
import * as MaterialColors from "../../styles/materialColors";
import PrimaryButton from "../../components/Buttons/PrimaryButtonComponent";
import RobotoText from "../../components/Text/RobotoText";
import ObjectScreenHeader from "../../components/ScreenHeader/ObjectScreenHeader";
import { useEffect, useState } from "react";
import { GetUsers } from "../../api/UserAPI";
import { UsersInterface } from "../../api/interfaces/UsersInterface";



function UsersScreen({ navigation }) {
    const [users, setUsers] = useState<UsersInterface>();
    const [usersActivity, setUsersActivity] = useState(false);

    async function GetUsersList() {
        setUsersActivity(true);
        await GetUsers()
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

    return <View style={{ backgroundColor: MaterialColors.MaterialWhite, flex: 1 }}>
        <ObjectScreenHeader showCreateEntityButton={true} headerTitle="Users" navigation={navigation} createBuutonClickNavigationRoute={"CreateUserScreen"} />
        <View style={{ flex: 1 }}>
            {usersActivity &&
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size="large" color={MaterialColors.MaterialDeepPurple} />
                </View>}
            {!usersActivity &&
                <View>
                    <View style={{ flexDirection: "row" }}>
                        <RobotoText text={"Total: "} textStyle={{}} isBold={true} numberOfLines={0} />
                        <RobotoText text={users?.totalCount.toString() ?? ""} textStyle={{}} isBold={true} numberOfLines={0} />
                    </View>
                </View>
            }
        </View>
    </View>;
}
export default UsersScreen;
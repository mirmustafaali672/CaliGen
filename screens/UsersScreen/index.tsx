import { View, Text } from "react-native";
import * as MaterialColors from "../../styles/materialColors";
import PrimaryButton from "../../components/Buttons/PrimaryButtonComponent";
import RobotoText from "../../components/Text/RobotoText";
import ObjectScreenHeader from "../../components/ScreenHeader/ObjectScreenHeader";
import { useEffect } from "react";



function UsersScreen({ navigation }) {
    async function GetUsers() {
        await GetUsers()
            .then(data => {
            })
            .catch(error => {
            });
    }

    useEffect(() => {
        GetUsers();
    }, []);

    return <View style={{ backgroundColor: MaterialColors.MaterialWhite, flex: 1 }}>
        <ObjectScreenHeader showCreateEntityButton={true} headerTitle="Users" navigation={navigation} createBuutonClickNavigationRoute={"CreateUserScreen"} />
    </View>;
}
export default UsersScreen;
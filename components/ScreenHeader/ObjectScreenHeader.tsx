import { View, Text } from "react-native";
import * as MaterialColors from "../../styles/materialColors";
import PrimaryButton from "../../components/Buttons/PrimaryButtonComponent";
import RobotoText from "../../components/Text/RobotoText";
import SecondaryButton from "../Buttons/SecondaryButtonComponent";
import AntDesign from 'react-native-vector-icons/AntDesign';

interface HeaderObjectInterface {
    headerTitle: string,
    showCreateEntityButton: boolean,
    createBuutonClickNavigationRoute: any,
    navigation: any
}

function ObjectScreenHeader(props: HeaderObjectInterface) {
    return <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
        <View>
            <RobotoText
                text={props.headerTitle ?? "--"}
                textStyle={{
                    fontSize: 40,
                    margin: 10,
                    marginVertical: 50,
                    color: MaterialColors.MaterialBlack,
                }} isBold={true} numberOfLines={0} /></View>
        <View style={{ flexDirection: "row", justifyContent: "space-between", gap: 20, marginRight: 10 }}>
            <SecondaryButton buttonClicked={() => props.navigation.goBack()} buttonTitle={""} buttonIcon={
                <AntDesign name="back" color={MaterialColors.MaterialDeepPurple} size={20} />
            } iconAtEnd={true} />
            { props.showCreateEntityButton && 
            <SecondaryButton buttonClicked={() => props.navigation.navigate(props.createBuutonClickNavigationRoute)} buttonTitle={""} buttonIcon={
                <AntDesign name="plus" color={MaterialColors.MaterialDeepPurple} size={20} />
            } iconAtEnd={true} />
        }
        </View>
    </View>
}

export default ObjectScreenHeader;
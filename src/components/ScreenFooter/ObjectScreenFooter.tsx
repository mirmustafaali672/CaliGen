import { Text, View } from "react-native";
import SecondaryButton from "../Buttons/SecondaryButtonComponent";
import PrimaryButton from "../Buttons/PrimaryButtonComponent";
import TernaryButton from "../Buttons/TerneryButtomComponent";

interface ObjectScreenFooterInterface {
    navigation: any,
    operationType: 1 | 2,
    createButtonClicked: any,
    deleteButtonClicked: any,
    isActivityOnButton: boolean,
    isActivityOnTernaryButton: boolean,
    disableSumbitButton: boolean
}
// Here operationType 1 means Create and 2 means Update
//Here buttonTypeClicked 1 means Primary Button Clicked 2 Means Secondary button clicked and 3 means ternary button clicked

function ObjectScreenFooter(props: ObjectScreenFooterInterface) {
    return <View style={{ flexDirection: 'row', flex: 1, gap: 40 }}>
        <View style={{ flex: 1 }}>
            {props.operationType == 1 && <SecondaryButton
                buttonClicked={() => props.navigation.goBack()}
                buttonTitle="Back"
                buttonIcon={<View></View>} iconAtEnd={false} />}
            {props.operationType == 2 && <TernaryButton
                buttonClicked={() => props.deleteButtonClicked()}
                buttonTitle="Delete"
                buttonIcon={<View></View>} iconAtEnd={false}  isActivityOnButton={props.isActivityOnTernaryButton}/>}
        </View>
        <View style={{ flex: 1 }}>
            <PrimaryButton
                buttonClicked={() => props.createButtonClicked()}
                buttonTitle={props.operationType == 1 ? "Create" : "Update"}
                buttonIcon={<View></View>} iconAtEnd={false} isActivityOnButton={props.isActivityOnButton} 
                disableButton={props.disableSumbitButton}/>
        </View>
    </View>
}

export default ObjectScreenFooter;
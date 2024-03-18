import { Alert, Modal, View, Text, Pressable, StyleSheet } from "react-native";
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from "../Text/RobotoText";
import PrimaryButton from "../Buttons/PrimaryButtonComponent";
import AntDesign from 'react-native-vector-icons/AntDesign';

interface TransactionModalInterface {
    visible: boolean,
    onRequestClose: any,
    transactionModalStatus: number,
    transactionStatusMessage: string
}

//here transactionModalStatus = 1 means success 
//transactionModalStatus = 0 means error
//transactionModalStatus = -1 means warning

function TransactionModal(props: TransactionModalInterface) {
    return (<View>
        <Modal animationType="slide"
            transparent={true}
            visible={props.visible}
            onRequestClose={() => {
                props.onRequestClose()
            }}>

            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <AntDesign name={props.transactionModalStatus == 1 ? "checkcircleo" : props.transactionModalStatus == -1 ? "warning" : "closecircleo"} color={props.transactionModalStatus == 1 ? MaterialColors.MaterialGreen : props.transactionModalStatus == -1? MaterialColors.MaterialAmberLight : MaterialColors.MaterialRed} size={50} />
                    <RobotoText text={props.transactionStatusMessage} textStyle={styles.modalText} isBold={false} numberOfLines={0} />
                    <PrimaryButton buttonClicked={() => props.onRequestClose()} buttonTitle={"Close"} buttonIcon={null} iconAtEnd={false} />
                </View>
            </View>

        </Modal>
    </View>)
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        width: "70%",
        margin: 20,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: MaterialColors.MaterialDeepPurple,
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        margin: 20,
        textAlign: 'center',
    },
});

export default TransactionModal;
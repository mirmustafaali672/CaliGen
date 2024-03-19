import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import InputFieldComponent from '../../components/InputFields/PlainInputField';
import TransactionModal from '../../components/Modals/TransactionModal';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import ObjectScreenFooter from '../../components/ScreenFooter/ObjectScreenFooter';
import { useIsFocused } from '@react-navigation/native';
import ConfirmationModal from '../../components/Modals/ConfirmationModal';
import { CreateRole, DeleteRole, UpdateRole } from '../../api/RolesAPI';
import { ConfirmDeletionOfRecord } from '../../data/TemplateStrings';

interface CreateRoleScreenInterface {
    navigation: any,
    route: any
}

function CreateRoleScreen(props: CreateRoleScreenInterface) {
    let itemInfo: RolesDetailsInterface = props.route.params?.item ?? {};
    const [data, setData] = useState<RolesDetailsInterface>(itemInfo);


    const [name, setName] = useState(data.name ?? '');
    const [isDefault, setIsDefault] = useState<boolean>(data.isDefault ?? false);
    const [isPublic, setIsPublic] = useState<boolean>(data.isPublic ?? false);


    const [isTransactionModelVisible, setIsTransactionModelVisible] = useState(false);
    const [transactionModalStatus, setTransactionModalStatus] = useState(0);
    const [transactionStatusMessage, setTransactionStatusMessage] = useState("--");
    const [createRoleActivity, setCreateRoleActivity] = useState(false);
    const [deleteRoleActivity, setDeleteRoleActivity] = useState(false);
    const [isConfirmationModalVisible, setIsConfirmationModalVisible] = useState(false);
    const [confirmationModalMessage, setConfirmationModalMessage] = useState('');
    const isFocused = useIsFocused();

    // useEffect(() => {
    //    GetUserDetials();
    // }, [isFocused]);


    // async function GetUserDetials()
    // {
    //   await GetUserById(data.id).then(data =>
    //     {

    //     }).catch(error => {

    //     })
    // }


    async function SubmitForm() {
        const formData: CreateRoleInterface = {
            name: name,
            isDefault: isDefault,
            isPublic: isPublic
        }

        const updateData: UpdateRoleInterface = {
            name: name,
            isDefault: isDefault,
            isPublic: isPublic,
            concurrencyStamp: data.concurrencyStamp ?? null
        }

        setCreateRoleActivity(true);
        const createRoleCall = data.id ? UpdateRole(updateData, data.id) : CreateRole(formData);
        await createRoleCall.then(
            response => {
                setTransactionModalState(1);
                setData(response?.data)
                console.log("response", response)
            }
        ).catch(error => {
            setTransactionModalState(-1);
        }).then(data => {
            setCreateRoleActivity(false);
        })
    }

    async function deleteItem(id: string) {
        setDeleteRoleActivity(true)
        await DeleteRole(id).then(data => {
        }).catch(error => {
            setTransactionModalState(-1);
        }).then(data => {
            setDeleteRoleActivity(false);
            props.navigation.goBack();
        })
    }

    function setTransactionModalState(errorState: number) {
        if (errorState == 1) {
            setIsTransactionModelVisible(true)
            setTransactionModalStatus(1);
            setTransactionStatusMessage("Success.");
            setIsTransactionModelVisible(true)
        }
        else if (errorState == -1) {
            setIsTransactionModelVisible(true)
            setTransactionModalStatus(0);
            setTransactionStatusMessage("Something went wrong.");
            setIsTransactionModelVisible(true)
        }
        else {
            setIsTransactionModelVisible(true)
            setTransactionModalStatus(-1);
            setTransactionStatusMessage("Warning");
            setIsTransactionModelVisible(true)
        }
    }

    function OpenConfiramtionDialog() {
        // deleteItem(data.id)
        setConfirmationModalMessage(ConfirmDeletionOfRecord)
        setIsConfirmationModalVisible(true);
    }


    return (
        <View style={{ backgroundColor: MaterialColors.MaterialWhite, flex: 1 }}>
            <ObjectScreenHeader headerTitle={'Create Role'}
                showCreateEntityButton={false}
                createBuutonClickNavigationRoute={undefined}
                navigation={props.navigation}
                showDeleteEntityButton={data.id ? true : false} />
            <ScrollView overScrollMode="never">
                <View style={{ margin: 20 }}>
                    <ScrollView
                        keyboardShouldPersistTaps="handled"
                        automaticallyAdjustKeyboardInsets={true}>
                        <View>
                            <InputFieldComponent
                                label='Name'
                                onChangeText={(value: any) => { setName(value) }}
                                value={name}
                                placeholder="Enter Name"
                            />
                        </View>
                        <View>
                            <InputFieldComponent
                                label='Is public'
                                onChangeText={(value: any) => { setIsPublic(value) }}
                                value={isPublic}
                                placeholder=""
                            />
                        </View>
                        <View>
                            <InputFieldComponent
                                label='Is default'
                                onChangeText={(value: any) => { setIsDefault(value) }}
                                value={isDefault}
                                placeholder=""
                            />
                        </View>
                        <ObjectScreenFooter navigation={props.navigation} operationType={data.id ? 2 : 1}
                            createButtonClicked={() => SubmitForm()} deleteButtonClicked={() => OpenConfiramtionDialog()}
                            isActivityOnButton={createRoleActivity} isActivityOnTernaryButton={deleteRoleActivity} />
                        <View>
                            <ConfirmationModal visible={isConfirmationModalVisible}
                                onRequestClose={undefined} confirmationMessage={confirmationModalMessage}
                                confirmButtonClicked={() => {
                                    deleteItem(data.id);
                                    setIsConfirmationModalVisible(false)
                                }}
                                cancelButtonClicked={() => setIsConfirmationModalVisible(false)} />
                            <TransactionModal visible={isTransactionModelVisible}
                                onRequestClose={() => setIsTransactionModelVisible(false)}
                                transactionModalStatus={transactionModalStatus}
                                transactionStatusMessage={transactionStatusMessage} />
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
        </View>
    );
}

export default CreateRoleScreen;

import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';
import InputFieldComponent from '../../components/InputFields/PlainInputField';
import PrimaryButton from '../../components/Buttons/PrimaryButtonComponent';
import SecondaryButton from '../../components/Buttons/SecondaryButtonComponent';
import { CreateUser, DeleteUser, GetUserById, UpdateUser } from '../../api/UsersAPI';
import TransactionModal from '../../components/Modals/TransactionModal';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import { CreateUserInterface, UpdateUserInterface, UserDetailsInterface } from '../../interfaces/UsersInterface';
import ObjectScreenFooter from '../../components/ScreenFooter/ObjectScreenFooter';
import { useIsFocused } from '@react-navigation/native';
import ConfirmationModal from '../../components/Modals/ConfirmationModal';
import { ConfirmDeletionOfRecord } from '../../data/TemplateStrings';

interface CreateUserScreenInterface {
  navigation: any,
  route: any
}

function CreateUserScreen(props: CreateUserScreenInterface) {
  let itemInfo: UserDetailsInterface = props.route.params?.item ?? {};
  const [data, setData] = useState<UserDetailsInterface>(itemInfo);
  const [name, setName] = useState(data.name ?? '');
  const [userName, setUserName] = useState(data.userName ?? '');
  const [surname, setSurname] = useState(data.surname ?? '');
  const [email, setEmail] = useState(data.email ?? '');
  const [phoneNumber, setPhoneNumber] = useState(data.phoneNumber ?? '');
  const [password, setPassword] = useState(data.id ? '*******' : '');
  const [isTransactionModelVisible, setIsTransactionModelVisible] = useState(false);
  const [transactionModalStatus, setTransactionModalStatus] = useState(0);
  const [transactionStatusMessage, setTransactionStatusMessage] = useState("--");
  const [createUserActivity, setCreateUserActivity] = useState(false);
  const [deleteUserActivity, setDeleteUserActivity] = useState(false);
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
    const formData: CreateUserInterface = {
      userName: userName,
      name: name,
      surname: surname,
      email: email,
      phoneNumber: phoneNumber,
      isActive: true,
      shouldChangePasswordOnNextLogin: false,
      lockoutEnabled: false,
      roleNames: [],
      organizationUnitIds: [],
      password: password,
      sendConfirmationEmail: false,
    }

    const updateData: UpdateUserInterface = {
      userName: userName,
      name: name,
      surname: surname,
      email: email,
      phoneNumber: phoneNumber,
      isActive: true,
      shouldChangePasswordOnNextLogin: false,
      lockoutEnabled: false,
      roleNames: [],
      organizationUnitIds: [],
      concurrencyStamp: data.concurrencyStamp ?? null
    }

    setCreateUserActivity(true);
    const createUserCall = data.id ? UpdateUser(updateData, data.id) : CreateUser(formData);
    await createUserCall.then(
      response => {
        setTransactionModalState(1);
        setData(response?.data)
        console.log("response", response)
      }
    ).catch(error => {
      setTransactionModalState(-1);
    }).then(data => {
      setCreateUserActivity(false);
    })
  }

  async function deleteItem(id: string) {
    setDeleteUserActivity(true)
    await DeleteUser(id).then(data => {
    }).catch(error => {
      setTransactionModalState(-1);
    }).then(data => {
      setDeleteUserActivity(false);
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

  function OpenConfiramtionDialog()
  {
    // deleteItem(data.id)
    setConfirmationModalMessage(ConfirmDeletionOfRecord)
    setIsConfirmationModalVisible(true);
  }


  return (
    <View style={{ backgroundColor: MaterialColors.MaterialWhite, flex: 1 }}>
      <ObjectScreenHeader headerTitle={'Create User'} 
      showCreateEntityButton={false} 
      createBuutonClickNavigationRoute={undefined} 
      navigation={props.navigation} 
      showDeleteEntityButton={data.id ? true : false} />
      <ScrollView overScrollMode="never">
        {/* <View>
          <RobotoText
            text="Create User"
            textStyle={{
              fontSize: 40,
              margin: 10,
              marginVertical: 50,
              color: MaterialColors.MaterialBlack,
            }} isBold={false} numberOfLines={0} />
        </View> */}
        <View style={{ margin: 20 }}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            automaticallyAdjustKeyboardInsets={true}>
            <View>
              <InputFieldComponent
                label='Username'
                onChangeText={(value: any) => { setUserName(value) }}
                value={userName}
                placeholder="Enter Username"
              />
            </View>
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
                label='Surname'
                onChangeText={(value: any) => { setSurname(value) }}
                value={surname}
                placeholder="Enter Surname"
              />
            </View>
            <View>
              <InputFieldComponent
                label='Email'
                onChangeText={(value: any) => { setEmail(value) }}
                value={email}
                placeholder="Enter Email"
              />
            </View>
            <View>
              <InputFieldComponent
                label='Phone Number'
                onChangeText={(value: any) => { setPhoneNumber(value) }}
                value={phoneNumber}
                placeholder="Enter Phone Number"
              />
            </View>
            {!data.id && <View>
              <InputFieldComponent
                label='Password'
                onChangeText={(value: any) => { setPassword(value) }}
                value={password}
                placeholder="Enter Password"
              />
            </View>}
            <ObjectScreenFooter navigation={props.navigation} operationType={data.id ? 2 : 1}
              createButtonClicked={() => SubmitForm()} deleteButtonClicked={() => OpenConfiramtionDialog()}
              isActivityOnButton={createUserActivity} isActivityOnTernaryButton={deleteUserActivity} />
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

export default CreateUserScreen;

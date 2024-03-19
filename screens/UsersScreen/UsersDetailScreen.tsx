import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';
import InputFieldComponent from '../../components/InputFields/PlainInputField';
import PrimaryButton from '../../components/Buttons/PrimaryButtonComponent';
import SecondaryButton from '../../components/Buttons/SecondaryButtonComponent';
import { CreateUser, DeleteUser } from '../../api/UserAPI';
import { CreateUserInterface } from '../../interfaces/CreateUserInterface';
import TransactionModal from '../../components/Modals/TransactionModal';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import { UpdateUserInterface } from '../../interfaces/UsersInterface';
import ObjectScreenFooter from '../../components/ScreenFooter/ObjectScreenFooter';

interface CreateUserScreenInterface {
  navigation: any,
  route: any
}

function CreateUserScreen(props: CreateUserScreenInterface) {
  const data: UpdateUserInterface = props.route.params?.item ?? {};
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
      sendConfirmationEmail: false
    }
    setCreateUserActivity(true);
    await CreateUser(formData).then(
      data => {
        setTransactionModalState(1);
      }
    ).catch(error => {
      setTransactionModalState(-1);
    }).then(data => {
      setCreateUserActivity(false);
    })
  }
  
  async function deleteItem(id: string) {
    setDeleteUserActivity(true)
    await DeleteUser(id).then( data => 
      {
      }).catch(error =>{
        setTransactionModalState(-1);
      }).then( data =>
        {
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


  return (
    <View style={{ backgroundColor: MaterialColors.MaterialWhite, flex: 1 }}>
      <ObjectScreenHeader headerTitle={'Create User'} showCreateEntityButton={false} createBuutonClickNavigationRoute={undefined} navigation={props.navigation} showDeleteEntityButton={data.id ? true : false} />
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
            <View>
              <InputFieldComponent
                label='Password'
                onChangeText={(value: any) => { setPassword(value) }}
                value={password}
                placeholder="Enter Password"
              />
            </View>
            <ObjectScreenFooter navigation={props.navigation} operationType={data.id ? 2 : 1} 
            createButtonClicked={() => SubmitForm()} deleteButtonClicked={()=> deleteItem(data.id)} 
            isActivityOnButton={createUserActivity} isActivityOnTernaryButton={deleteUserActivity}/>
            <View>
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

import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';
import InputFieldComponent from '../../components/InputFields/PlainInputField';
import PrimaryButton from '../../components/Buttons/PrimaryButtonComponent';
import SecondaryButton from '../../components/Buttons/SecondaryButtonComponent';
import { CreateUser } from '../../api/UserAPI';
import { CreateUserInterface } from '../../api/interfaces/CreateUserInterface';
import TransactionModal from '../../components/Modals/TransactionModal';

function CreateUserScreen({ navigation }) {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [isTransactionModelVisible, setIsTransactionModelVisible] = useState(false);
  const [transactionModalStatus, setTransactionModalStatus] = useState(0);
  const [transactionStatusMessage, setTransactionStatusMessage] = useState("--");
  const [createUserActivity, setCreateUserActivity] = useState(false);

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
      <ScrollView overScrollMode="never">
        <View>
          <RobotoText
            text="Create User"
            textStyle={{
              fontSize: 40,
              margin: 10,
              marginVertical: 50,
              color: MaterialColors.MaterialBlack,
            }} isBold={false} numberOfLines={0} />
        </View>
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
            <View style={{ flexDirection: 'row', flex: 1, gap: 40 }}>
              <View style={{ flex: 1 }}>
                <SecondaryButton
                  buttonClicked={() => navigation.goBack()}
                  buttonTitle="Back"
                  buttonIcon={<View></View>} iconAtEnd={false} />
              </View>
              <View style={{ flex: 1 }}>
                <PrimaryButton
                  buttonClicked={() => SubmitForm()}
                  buttonTitle="Create"
                  buttonIcon={<View></View>} iconAtEnd={false} isActivityOnButton={createUserActivity} />
              </View>
            </View>
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

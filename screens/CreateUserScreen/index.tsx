import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';
import InputFieldComponent from '../../components/InputFields/PlainInputField';
import PrimaryButton from '../../components/Buttons/PrimaryButtonComponent';
import SecondaryButton from '../../components/Buttons/SecondaryButtonComponent';

//   userName: string;
//   name: string;
//   surname: string;
//   email: string;
//   phoneNumber: string;
//   isActive: boolean;
//   shouldChangePasswordOnNextLogin: boolean;
//   lockoutEnabled: boolean;
//   roleNames: string[];
//   organizationUnitIds: string[];
//   password: string;
//   sendConfirmationEmail: boolean;

function CreateUserScreen({ navigation }) {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');

  function SubmitForm() {
    console.log('formSubmited');
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
            }}
          />
        </View>
        <View style={{ margin: 20 }}>
          <ScrollView
            keyboardShouldPersistTaps="handled"
            automaticallyAdjustKeyboardInsets={true}>
            <View>
              <InputFieldComponent
                onChangeText={value => setUserName(value)}
                value={userName}
                placeholder="Enter Username"
              />
            </View>
            <View>
              <InputFieldComponent
                onChangeText={value => setName(value)}
                value={name}
                placeholder="Enter Name"
              />
            </View>
            <View>
              <InputFieldComponent
                onChangeText={value => setEmail(value)}
                value={email}
                placeholder="Enter Email"
              />
            </View>
            <View>
              <InputFieldComponent
                onChangeText={value => setPhoneNumber(value)}
                value={phoneNumber}
                placeholder="Enter Phone Number"
              />
            </View>
            <View>
              <InputFieldComponent
                onChangeText={value => setPassword(value)}
                value={password}
                placeholder="Enter Password"
              />
            </View>
            <View style={{ flexDirection: 'row', flex: 1, gap: 40 }}>
              <View style={{ flex: 1 }}>
                <SecondaryButton
                  buttonClicked={() => navigation.goBack()}
                  buttonTitle="Back"
                  buttonIcon={<View></View>}
                />
              </View>
              <View style={{ flex: 1 }}>
                <PrimaryButton
                  buttonClicked={() => SubmitForm()}
                  buttonTitle="Create"
                  buttonIcon={<View></View>}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
    </View>
  );
}

export default CreateUserScreen;

import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import InputFieldComponent from '../../components/InputFields/PlainInputField';
import {
  CreateUser,
  DeleteUser,
  GetUserById,
  UpdateUser,
} from '../../api/UsersAPI';
import TransactionModal from '../../components/Modals/TransactionModal';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import {
  CreateUserInterface,
  UpdateUserInterface,
  UserDetailsInterface,
} from '../../interfaces/UsersInterface';
import ObjectScreenFooter from '../../components/ScreenFooter/ObjectScreenFooter';
import {useIsFocused} from '@react-navigation/native';
import ConfirmationModal from '../../components/Modals/ConfirmationModal';
import {
  ConfirmDeletionOfRecord,
  TransactionError,
  TransactionSuccess,
  TransactionWarning,
} from '../../data/TemplateStrings';
import {TransactionModalStateInterface} from '../../interfaces/TransactionModalStateInterface';
import {ConfirmationModalInterface} from '../../interfaces/ConfirmationModalInterface';
import SelectComponent, {
  selectedItemInterface,
} from '../../components/DropDownComponents/SelectComponent';
import {GetRoles} from '../../api/RolesAPI';
import RadioButtonComponent from '../../components/RadioButtonComponent/RadioButtonComponent';

interface CreateUserScreenInterface {
  navigation: any;
  route: any;
}

function CreateUserScreen(props: CreateUserScreenInterface) {

  //common entity variables 
  const [data, setData] = useState<UserDetailsInterface>(
    props.route.params?.item ?? {},
  );
  const [password, setPassword] = useState(data.id ? '*******' : '');
  const [transactionModal, setTransactionModal] =
    useState<TransactionModalStateInterface>({
      visible: false,
      message: '',
      status: 0,
      onClose: null,
    });
  const [createEntityActivity, setCreateEntityActivity] = useState(false);
  const [deleteEntityActivity, setDeleteEntityActivity] = useState(false);
  const [entityDetailActivity, setEntityDetailActivity] = useState(true);
  const [confirmationModal, setConfirmationModal] =
    useState<ConfirmationModalInterface>({
      visible: false,
      message: '',
      onCancel: null,
      onConfirm: null,
    });
  const isFocused = useIsFocused();
  const [roles, setRoles] = useState<RolesInterface>();
  //


  // common entity operations and functions 
  useEffect(() => {
    setEntityDetailActivity(true);
  }, []);

  useEffect(() => {
    GetUserDetials();
  }, []);

  async function GetUserDetials() {
    setEntityDetailActivity(true);
    await GetUserById(data.id)
      .then(res => {
        setData(res?.data);
      })
      .catch(error => {})
      .then(res => {
        setEntityDetailActivity(false);
      });
  }

  async function SubmitForm() {
    const formData: CreateUserInterface = {
      userName: data.userName,
      name: data.name,
      surname: data.surname,
      email: data.email,
      phoneNumber: data.phoneNumber,
      isActive: data.isActive,
      shouldChangePasswordOnNextLogin: data.shouldChangePasswordOnNextLogin,
      lockoutEnabled: data.lockoutEnabled,
      roleNames: data.roleNames,
      organizationUnitIds: [],
      password: password,
      sendConfirmationEmail: false,
    };

    const updateData: UpdateUserInterface = {
      userName: data.userName,
      name: data.name,
      surname: data.surname,
      email: data.email,
      phoneNumber: data.phoneNumber,
      isActive: true,
      shouldChangePasswordOnNextLogin: data.shouldChangePasswordOnNextLogin,
      lockoutEnabled: data.lockoutEnabled,
      roleNames: data.roleNames,
      organizationUnitIds: [],
      concurrencyStamp: data.concurrencyStamp ?? null,
    };

    setCreateEntityActivity(true);
    const createUserCall = data.id
      ? UpdateUser(updateData, data.id)
      : CreateUser(formData);
    await createUserCall
      .then(response => {
        setTransactionModalState(1);
        setData(response?.data);
      })
      .catch(error => {
        setTransactionModalState(-1);
      })
      .then(data => {
        setCreateEntityActivity(false);
        GetUserDetials();
      });
  }

  async function deleteItem(id: string) {
    setDeleteEntityActivity(true);
    await DeleteUser(id)
      .then(data => {})
      .catch(error => {
        setTransactionModalState(-1);
      })
      .then(data => {
        setDeleteEntityActivity(false);
        props.navigation.goBack();
      });
  }

  function setTransactionModalState(errorState: number) {
    if (errorState == 1) {
      setTransactionModal({
        ...transactionModal,
        visible: true,
        status: 1,
        message: TransactionSuccess,
      });
    } else if (errorState == -1) {
      setTransactionModal({
        ...transactionModal,
        visible: true,
        status: 0,
        message: TransactionError,
      });
    } else {
      setTransactionModal({
        ...transactionModal,
        visible: true,
        status: -1,
        message: TransactionWarning,
      });
    }
  }

  function OpenConfiramtionDialog() {
    // deleteItem(data.id)
    setConfirmationModal({
      ...confirmationModal,
      message: ConfirmDeletionOfRecord,
      visible: true,
    });
  }

  //

  async function GetRolesList() {
    await GetRoles('')
      .then((data: any) => {
        setRoles(data.data);
      })
      .catch(error => {})
      .then(data => {});
  }
  useEffect(() => {
    GetRolesList();
  }, []);

  return (
    <View style={{backgroundColor: MaterialColors.MaterialWhite, flex: 1}}>
      <ObjectScreenHeader
        headerTitle={'Create User'}
        showCreateEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
        showDeleteEntityButton={data.id ? true : false}
      />
      {entityDetailActivity && (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator
            size="large"
            color={MaterialColors.MaterialDeepPurple}
          />
        </View>
      )}
      {!entityDetailActivity && (
        <ScrollView overScrollMode="never">
          <View style={{margin: 20}}>
            <ScrollView
              keyboardShouldPersistTaps="handled"
              automaticallyAdjustKeyboardInsets={true}>
              <View>
                <InputFieldComponent
                  label="Username"
                  onChangeText={(value: any) => {
                    setData({...data, userName: value});
                  }}
                  value={data.userName}
                  placeholder="Enter Username"
                  required
                />
              </View>
              <View>
                <InputFieldComponent
                  label="Name"
                  onChangeText={(value: any) => {
                    setData({...data, name: value});
                  }}
                  value={data.name}
                  placeholder="Enter Name"
                  required
                />
              </View>
              <View>
                <InputFieldComponent
                  label="Surname"
                  onChangeText={(value: any) => {
                    setData({...data, surname: value});
                  }}
                  value={data.surname}
                  placeholder="Enter Surname"
                  required
                />
              </View>
              <View>
                <InputFieldComponent
                  label="Email"
                  onChangeText={(value: any) => {
                    setData({...data, email: value});
                  }}
                  value={data.email}
                  placeholder="Enter Email"
                  required
                />
              </View>
              <View>
                <InputFieldComponent
                  label="Phone Number"
                  onChangeText={(value: any) => {
                    setData({...data, phoneNumber: value});
                  }}
                  value={data.phoneNumber}
                  placeholder="Enter Phone Number"
                  required
                />
              </View>
              {!data.id && (
                <View>
                  <InputFieldComponent
                    label="Password"
                    onChangeText={(value: any) => {
                      setPassword(value);
                    }}
                    value={password}
                    placeholder="Enter Password"
                    required
                  />
                </View>
              )}
              <View>
                <SelectComponent
                  data={roles?.items}
                  keyName="name"
                  valueName="name"
                  onClose={(selectedItem: string[]) => {
                    setData({...data, roleNames: selectedItem});
                  }}
                  label={'Roles'}
                  previouslySelectedItems={data.roleNames}
                  multiple={true}
                />
              </View>
              <View>
                <RadioButtonComponent
                  label={'Is Active?'}
                  buttons={[
                    {name: 'Yes', value: true},
                    {name: 'No', value: false},
                  ]}
                  selected={data.id ? data.isActive : false}
                  onSelection={(value: any) => {
                    setData({...data, isActive: value});
                  }}
                />
              </View>
              <View>
                <RadioButtonComponent
                  label={'Enable account lockout?'}
                  buttons={[
                    {name: 'Yes', value: true},
                    {name: 'No', value: false},
                  ]}
                  selected={data.id ? data.lockoutEnabled : false}
                  onSelection={(value: any) => {
                    setData({...data, lockoutEnabled: value});
                  }}
                />
              </View>
              <View>
                <RadioButtonComponent
                  label={'Should change password in next login?'}
                  buttons={[
                    {name: 'Yes', value: true},
                    {name: 'No', value: false},
                  ]}
                  selected={data.id ? data.shouldChangePasswordOnNextLogin : false}
                  onSelection={(value: any) => {
                    setData({...data, shouldChangePasswordOnNextLogin: value});
                  }}
                />
              </View>
              <ObjectScreenFooter
                navigation={props.navigation}
                operationType={data.id ? 2 : 1}
                createButtonClicked={() => SubmitForm()}
                deleteButtonClicked={() => OpenConfiramtionDialog()}
                isActivityOnButton={createEntityActivity}
                isActivityOnTernaryButton={deleteEntityActivity}
              />
              <View>
                <ConfirmationModal
                  visible={confirmationModal.visible}
                  message={confirmationModal.message}
                  onConfirm={() => {
                    deleteItem(data.id);
                    setConfirmationModal({
                      ...confirmationModal,
                      visible: false,
                    });
                  }}
                  onCancel={() =>
                    setConfirmationModal({...confirmationModal, visible: false})
                  }
                />
                <TransactionModal
                  visible={transactionModal.visible}
                  onClose={() =>
                    setTransactionModal({...transactionModal, visible: false})
                  }
                  status={transactionModal.status}
                  message={transactionModal.message}
                />
              </View>
            </ScrollView>
          </View>
        </ScrollView>
      )}
    </View>
  );
}

export default CreateUserScreen;

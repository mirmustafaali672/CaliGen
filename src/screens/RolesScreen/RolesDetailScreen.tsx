import React, {useEffect, useState} from 'react';
import {View, ScrollView, ActivityIndicator} from 'react-native';
import InputFieldComponent from '../../components/InputFields/PlainInputField';
import TransactionModal from '../../components/Modals/TransactionModal';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import ObjectScreenFooter from '../../components/ScreenFooter/ObjectScreenFooter';
import {useIsFocused} from '@react-navigation/native';
import ConfirmationModal from '../../components/Modals/ConfirmationModal';
import {
  CreateRole,
  DeleteRole,
  GetRoleById,
  UpdateRole,
} from '../../api/RolesAPI';
import {
  ConfirmDeletionOfRecord,
  TransactionError,
  TransactionSuccess,
  TransactionWarning,
} from '../../data/TemplateStrings';
import {ConfirmationModalInterface} from '../../interfaces/ConfirmationModalInterface';
import {TransactionModalStateInterface} from '../../interfaces/TransactionModalStateInterface';
import RadioButtonComponent from '../../components/RadioButtonComponent/RadioButtonComponent';
import { Schemes } from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';

interface CreateRoleScreenInterface {
  navigation: any;
  route: any;
}

function CreateRoleScreen(props: CreateRoleScreenInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  //common entity variables
  const [data, setData] = useState<RolesDetailsInterface>(
    props.route.params?.item ?? {},
  );
  const [transactionModal, setTransactionModal] =
    useState<TransactionModalStateInterface>({
      visible: false,
      message: '',
      status: 0,
      onClose: null,
    });
  const [confirmationModal, setConfirmationModal] =
    useState<ConfirmationModalInterface>({
      visible: false,
      message: '',
      onCancel: null,
      onConfirm: null,
    });
  const [createEntityActivity, setCreateEntityActivity] = useState(false);
  const [deleteEntityActivity, setDeleteEntityActivity] = useState(false);
  const [entityDetailActivity, setEntityDetailActivity] = useState(true);
  const isFocused = useIsFocused();
  //

  // common entity operations and functions
  useEffect(() => {
    GetRoleDetials();
  }, [isFocused]);

  async function GetRoleDetials() {
    setEntityDetailActivity(true);
    await GetRoleById(data.id)
      .then(res => {
        setData(res?.data);
      })
      .catch(error => {})
      .then(res => {
        setEntityDetailActivity(false);
      });
  }

  async function SubmitForm() {
    const formData: CreateRoleInterface = {
      name: data.name,
      isDefault: data.isDefault,
      isPublic: data.isPublic,
    };

    const updateData: UpdateRoleInterface = {
      name: data.name,
      isDefault: data.isDefault,
      isPublic: data.isPublic,
      concurrencyStamp: data.concurrencyStamp ?? null,
    };

    setCreateEntityActivity(true);
    const createRoleCall = data.id
      ? UpdateRole(updateData, data.id)
      : CreateRole(formData);
    await createRoleCall
      .then(response => {
        setTransactionModalState(1);
        setData(response?.data);
      })
      .catch(error => {
        setTransactionModalState(-1);
      })
      .then(data => {
        setCreateEntityActivity(false);
      });
  }

  async function deleteItem(id: string) {
    setDeleteEntityActivity(true);
    await DeleteRole(id)
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

  return (
    <View style={{backgroundColor: MaterialColorTheme.surface, flex: 1}}>
      <ObjectScreenHeader
        headerTitle={'Create Role'}
        showCreateEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
        showDeleteEntityButton={data.id ? true : false}
      />
      {entityDetailActivity && (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator
            size="large"
            color={MaterialColorTheme.primary}
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
                <RadioButtonComponent
                  label={'Is default?'}
                  buttons={[
                    {name: 'Yes', value: true},
                    {name: 'No', value: false},
                  ]}
                  selected={data.id ? data.isDefault : false}
                  onSelection={(value: any) => {
                    setData({...data, isDefault: value});
                  }}
                />
              </View>
              <View>
                <RadioButtonComponent
                  label={'Is public?'}
                  buttons={[
                    {name: 'Yes', value: true},
                    {name: 'No', value: false},
                  ]}
                  selected={data.id ? data.isPublic : false}
                  onSelection={(value: any) => {
                    setData({...data, isPublic: value});
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
                disableSumbitButton={false}
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

export default CreateRoleScreen;

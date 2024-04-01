import {Modal, StyleSheet, View, ScrollView, Dimensions} from 'react-native';
import ButtonComponent from '../Buttons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import InputFieldComponent from '../InputFields/PlainInputField';
import {useEffect, useState} from 'react';
import {
  GetDataFromStorage,
  SaveDataToStorage,
} from '../../AsyncStorageActions/AsyncDataAction';
import {EnvSettingInterface} from '../../interfaces/EnvSettingInterface';
import { Schemes } from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';

interface LoginSettingModalInterface {
  visible: boolean;
  onSubmit: any;
  onCancel: any;
  message: string;
}

let screenHeight = Dimensions.get('window').height;
let screenWidth = Dimensions.get('window').width;

function LoginSettingModal(props: LoginSettingModalInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#00000024',
    },
    modalView: {
      width: '90%',
      margin: 20,
      backgroundColor: MaterialColorTheme.surface,
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
  });


  const [EnvSettings, setApplicationEnvUrlSetting] =
    useState<EnvSettingInterface>({
      authURL: '',
      hostURL: '',
      loaclization_DefaultResourceName: 'FileUploader',
      oAuthConfig_ClientId: 'FileUploader_Mobile',
      oAuthConfig_Scope: 'offline_access FileUploader',
    });
  const [activity, setActivity] = useState(false);

  async function GetData() {
    const data = await GetDataFromStorage('EnvSettings');
    try {
      const settings: EnvSettingInterface = data;
      setApplicationEnvUrlSetting(settings);
    } catch {}
  }

  useEffect(() => {
    GetData();
  }, []);
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        // onRequestClose={() => {
        //     props.onRequestClose()
        // }}
      >
        <View style={styles.centeredView}>
          <View style={[styles.modalView]}>
            <ScrollView scrollEnabled={false}>
              <View style={{width: screenWidth / 1.5}}>
                <InputFieldComponent
                  onChangeText={(value: any) =>
                    setApplicationEnvUrlSetting({
                      ...EnvSettings,
                      authURL: value,
                      loaclization_DefaultResourceName: 'FileUploader',
                      oAuthConfig_ClientId: 'FileUploader_Mobile',
                      oAuthConfig_Scope: 'offline_access FileUploader',
                    })
                  }
                  value={EnvSettings.authURL}
                  placeholder={'Auth Address'}
                  label={'Auth Address'}
                />
              </View>
              <View style={{width: screenWidth / 1.5}}>
                <InputFieldComponent
                  onChangeText={(value: any) =>
                    setApplicationEnvUrlSetting({
                      ...EnvSettings,
                      hostURL: value,
                      loaclization_DefaultResourceName: 'FileUploader',
                      oAuthConfig_ClientId: 'FileUploader_Mobile',
                      oAuthConfig_Scope: 'offline_access FileUploader',
                    })
                  }
                  value={EnvSettings.hostURL}
                  placeholder={'Host Address'}
                  label={'Host Address'}
                />
              </View>
            </ScrollView>
            <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
              <ButtonComponent
                buttonClicked={() => props.onCancel()}
                buttonTitle={'Cancel'}
                buttonIcon={null}
                iconAtEnd={false}
                isActivityOnButton={activity}
                type="Secondary"
              />
              <ButtonComponent
                buttonClicked={() => {
                  setActivity(true);
                  SaveDataToStorage('EnvSettings', JSON.stringify(EnvSettings));
                  setActivity(false);
                  props.onSubmit();
                }}
                buttonTitle={'Save'}
                buttonIcon={null}
                iconAtEnd={false}
                isActivityOnButton={activity}
                type="Primary"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}



export default LoginSettingModal;

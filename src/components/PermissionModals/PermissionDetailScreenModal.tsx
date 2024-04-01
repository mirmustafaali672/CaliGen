import {ActivityIndicator, Modal, StyleSheet, View} from 'react-native';
import RobotoText from '../Text/RobotoText';
import ButtonComponent from '../Buttons';
import RadioButtonComponent from '../RadioButtonComponent/RadioButtonComponent';
import {
  UpdatePermission,
  UpdatePermissionInterface,
} from '../../api/PermissionsAPI';
import {useEffect, useState} from 'react';
import { Schemes } from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';

export interface PermissionDetailScreenModalInterface {
  displayName: string;
  name: string;
  isGranted: boolean;
  providerName: string;
  providerKey: string;
  onCancel?: any;
  onSubmit?: any;
  visible: boolean;
}

function PermissionDetailScreenModal(
  props: PermissionDetailScreenModalInterface,
) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      width: '70%',
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
  
  const [permissionData, setPermissionData] =
    useState<UpdatePermissionInterface>();
  const [isGranted, setIsGranted] = useState<boolean>(props.isGranted);
  const [activity, setActivity] = useState<boolean>(false);
  async function onSubmit() {
    await UpdatePermission(
      props.providerKey,
      props.providerName,
      permissionData,
    )
      .then(data => {})
      .catch(error => {})
      .then(data => {
        setActivity(false);
        props.onSubmit();
      });
  }
  useEffect(() => {
    setActivity(true);
    onSubmit();
  }, [permissionData]);
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
          <View style={styles.modalView}>
            {!activity && (
              <View style={{alignItems: 'center'}}>
                <View>
                  <RobotoText
                    text={props.displayName}
                    textStyle={{
                      color: MaterialColorTheme.onSurface,
                      fontSize: 20,
                    }}
                    isBold={true}
                    numberOfLines={0}
                  />
                </View>
                <View style={{margin: 20}}>
                  <RadioButtonComponent
                    label={''}
                    buttons={[
                      {name: 'Allow', value: true},
                      {name: 'Deny', value: false},
                    ]}
                    selected={props.isGranted}
                    onSelection={(selection: any) => setIsGranted(selection)}
                  />
                </View>
                <View
                  style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
                  <ButtonComponent
                    buttonClicked={() => props.onCancel()}
                    buttonTitle={'Cancel'}
                    buttonIcon={null}
                    iconAtEnd={false}
                    type="Secondary"
                  />
                  <ButtonComponent
                    buttonClicked={() =>
                      setPermissionData({
                        permissions: [{name: props.name, isGranted: isGranted}],
                      })
                    }
                    buttonTitle={'Save'}
                    buttonIcon={null}
                    iconAtEnd={false}
                    type="Primary"
                  />
                </View>
              </View>
            )}
            {activity && (
              <View style={{flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator
                  size="large"
                  color={MaterialColorTheme.primary}
                />
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}


export default PermissionDetailScreenModal;

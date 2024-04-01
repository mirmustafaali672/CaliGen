import {Alert, Modal, View, Text, Pressable, StyleSheet} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../Text/RobotoText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import ButtonComponent from '../Buttons';
import {ConfirmationModalInterface} from '../../interfaces/ConfirmationModalInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import { Schemes } from '../../styles/MaterialColorThemeInterface';

// interface ConfirmationModalInterface {
//     visible: boolean,
//     onRequestClose: any,
//     confirmationMessage: string,
//     confirmButtonClicked: any,
//     cancelButtonClicked: any
// }

function ConfirmationModal(props: ConfirmationModalInterface) {
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
      color: MaterialColorTheme.onSurface,
      margin: 20,
      textAlign: 'center',
    },
  });
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
            <AntDesign
              name={'warning'}
              color={MaterialColors.MaterialAmberLight}
              size={50}
            />
            <RobotoText
              text={props.message}
              textStyle={styles.modalText}
              isBold={false}
              numberOfLines={0}
            />
            <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
              <ButtonComponent
                buttonClicked={() => props.onCancel()}
                buttonTitle={'No'}
                buttonIcon={null}
                iconAtEnd={false}
                type="Secondary"
              />
              <ButtonComponent
                buttonClicked={() => props.onConfirm()}
                buttonTitle={'Yes'}
                buttonIcon={null}
                iconAtEnd={false}
                type="Primary"
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}



export default ConfirmationModal;

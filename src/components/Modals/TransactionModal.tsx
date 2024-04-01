import {Modal, View, StyleSheet} from 'react-native';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../Text/RobotoText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {TransactionModalStateInterface} from '../../interfaces/TransactionModalStateInterface';
import { Schemes } from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import ButtonComponent from '../Buttons';

function TransactionModal(props: TransactionModalStateInterface) {
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
      color: MaterialColorTheme.onSurface
    },
  });

  
  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={props.visible}
        onRequestClose={() => {
          props.onClose();
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <AntDesign
              name={
                props.status == 1
                  ? 'checkcircleo'
                  : props.status == -1
                  ? 'warning'
                  : 'closecircleo'
              }
              color={
                props.status == 1
                  ? MaterialColors.MaterialGreen
                  : props.status == -1
                  ? MaterialColors.MaterialAmberLight
                  : MaterialColorTheme.error
              }
              size={50}
            />
            <RobotoText
              text={props.message}
              textStyle={styles.modalText}
              isBold={false}
              numberOfLines={0}
            />
            <ButtonComponent
              buttonClicked={() => props.onClose()}
              buttonTitle={'Close'}
              buttonIcon={null}
              iconAtEnd={false}
              type="Primary"
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}


export default TransactionModal;

import {
  FlatList,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import RobotoText from '../Text/RobotoText';
import * as MaterialColors from '../../styles/materialColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useEffect, useState} from 'react';
import {useIsFocused} from '@react-navigation/native';
import PrimaryButton from '../Buttons/PrimaryButtonComponent';

interface SelectInterface {
  data: any;
  keyName: string; // key is the actual value
  valueName: string; //value is what will be displayed
  onClose: any;
  label: string;
  previouslySelectedItems: any[];
  multiple: boolean;
}
export interface selectedItemInterface {
  selectedKey: string;
  selectedValue: any;
}

function SelectComponent(props: SelectInterface) {
  const [isSelectModalOpen, setIsSelectModalOpen] = useState(false);
  const [selectedItems, setSelectedItems] = useState<any[]>(props.previouslySelectedItems);
  const isFocused = useIsFocused();

  useEffect(() => {
    setSelectedItems([]);
    setSelectedItems(props.previouslySelectedItems)
  }, [isFocused]);

  useEffect(() => {
    if (!props.multiple) {
      props.onClose(selectedItems);
      setIsSelectModalOpen(false);
    } else if (props.multiple) {
    }
  }, [selectedItems]);

  return (
    <View>
      <TouchableOpacity onPress={() => setIsSelectModalOpen(true)}>
        <View style={{marginVertical: 10}}>
          <RobotoText
            text={props.label ?? '--'}
            textStyle={{
              margin: 10,
              marginTop: 0,
              color: MaterialColors.MaterialBlack,
            }}
            isBold={false}
            numberOfLines={0}
          />
          <View
            style={[
              {
                marginHorizontal: 4,
                borderWidth: 0,
                borderRadius: 15,
                backgroundColor: MaterialColors.MaterialIndigo,
                padding: 20,
                flexDirection: 'row',
                flex: 1,
              },
            ]}>
            <View style={{flex: 10}}>
              <RobotoText
                text={'Select'}
                textStyle={{}}
                isBold={false}
                numberOfLines={0}
              />
            </View>
            <View style={{flex: 1}}>
              <AntDesign name="down" size={20} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isSelectModalOpen}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.modalHeader}>
                <RobotoText
                  text={`Select ${props.label}`}
                  textStyle={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: MaterialColors.MaterialWhite,
                    alignItems: 'center',
                  }}
                  isBold={false}
                  numberOfLines={0}
                />
              </View>
              <View style={styles.modalBody}>
                <FlatList
                  data={props.data}
                  renderItem={({item}) => (
                    <TouchableOpacity
                      onPress={() => {
                        if (selectedItems.includes(item[props.keyName])) {
                          setSelectedItems(oldArray =>
                            oldArray.filter(
                              arrayItem => arrayItem !== item[props.keyName],
                            ),
                          );
                        } else {
                          setSelectedItems(oldArray => [
                            ...oldArray,
                            item[props.keyName],
                          ]);
                        }
                      }}>
                      <View
                        style={
                          selectedItems.includes(item[props.keyName])
                            ? styles.selectedItems
                            : styles.selectItems
                        }>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: 15,
                          }}>
                          <RobotoText
                            text={item[props.valueName]}
                            textStyle={{
                              fontWeight: 'bold',
                              fontSize: 20,
                              color: selectedItems.includes(item[props.keyName])
                                ? MaterialColors.MaterialWhite
                                : MaterialColors.MaterialBlack,
                            }}
                            isBold={true}
                            numberOfLines={0}
                          />
                          {selectedItems.includes(item[props.keyName]) && (
                            <AntDesign
                              name="check"
                              size={20}
                              color={MaterialColors.MaterialWhite}
                            />
                          )}
                        </View>
                      </View>
                    </TouchableOpacity>
                  )}
                />
              </View>
              {props.multiple && (
                <View style={{flex: 1, margin: 10}}>
                  <View
                    style={{justifyContent: 'center', alignItems: 'flex-end'}}>
                    <PrimaryButton
                      buttonClicked={() => {
                        props.onClose(selectedItems);
                        setIsSelectModalOpen(false);
                      }}
                      buttonTitle={'Submit'}
                      buttonIcon={undefined}
                      iconAtEnd={false}
                      disableButton={selectedItems.length == 0}
                    />
                  </View>
                </View>
              )}
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

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
    backgroundColor: 'white',
    borderRadius: 20,
    // padding: 35,
    // alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    flex: 0.6,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: MaterialColors.MaterialDeepPurple,
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
  modalHeader: {
    backgroundColor: MaterialColors.MaterialBlueGreyLight,
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  modalBody: {
    backgroundColor: MaterialColors.MaterialWhite,
    flex: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  selectItems: {
    justifyContent: 'center',
    padding: 10,
    marginVertical: 0,
    height: 60,
    marginHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: MaterialColors.MaterialIndigo,
  },
  selectedItems: {
    backgroundColor: MaterialColors.MaterialDeepPurple,
    justifyContent: 'center',
    padding: 10,
    height: 60,
    marginHorizontal: 20,
    marginVertical: 5,
    borderRadius: 10,
  },
});

export default SelectComponent;

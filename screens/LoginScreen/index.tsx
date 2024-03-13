import React, {useState} from 'react';
import {
  Text,
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
  Modal,
  Pressable,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {PrimaryColor, SecondaryColor} from '../../styles/primaryScreenColors';
import {login} from '../../api/AccountAPI';

let screenHeight = Dimensions.get('window').height;
let screenWidth = Dimensions.get('window').width;

function LoginScreen() {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('1q2w3E*');
  const [errorModal, setErrorModal] = useState(false);

  const startLogin = async (username, password) => {
    console.log('{ username, password }', {username, password});

    await login({username, password})
      .then(data => {
        console.log('data', data);
        navigation.navigate('Home');
      })
      .catch(error => {
        console.log(error);
        setErrorModal(true);
      });
  };

  return (
    <View style={styles.loginFullMainScreen}>
      <View style={styles.topPart}>
        <View style={[styles.imageSetter, {flexDirection: 'row'}]}>
          {/* <CaliberImageComponent style={{alignItems:"center"}}/> */}
          <Text style={{color: 'white', fontSize: 80, marginTop: '30%'}}>
            CaliGen
          </Text>
        </View>
      </View>
      <View style={styles.bottomPart}>
        <ScrollView
          scrollEnabled={false}
          keyboardShouldPersistTaps="handled"
          automaticallyAdjustKeyboardInsets={true}>
          <View style={styles.bottomPart}>
            <Text style={{fontSize: 60, margin: '10%', color: PrimaryColor}}>
              Login
            </Text>
            <View style={{flex: 1}}>
              <ScrollView
                style={{
                  marginVertical: '1%',
                  marginHorizontal: '5%',
                  flex: 1,
                }}>
                <View style={styles.loginInputFields}>
                  <AntDesign
                    name="user"
                    size={24}
                    color={PrimaryColor}
                    style={{marginRight: '5%'}}
                  />
                  <TextInput
                    autoCapitalize="none"
                    autoComplete="password-new"
                    autoCorrect={false}
                    placeholder="Username"
                    style={styles.inputFieldIcon}
                    onChangeText={value => setUsername(value)}
                    value={username}></TextInput>
                </View>
                <View style={styles.loginInputFields}>
                  <MaterialIcons
                    style={{marginRight: '5%'}}
                    name="password"
                    size={24}
                    color={PrimaryColor}
                  />
                  <TextInput
                    autoCapitalize="none"
                    autoComplete="password-new"
                    autoCorrect={false}
                    placeholder="Password"
                    style={styles.inputFieldIcon}
                    onChangeText={value => setPassword(value)}
                    value={password}></TextInput>
                </View>
                <Pressable
                  style={styles.loginButton}
                  onPress={() =>
                    // startLogin(username, password)
                    navigation.navigate('Home')
                  }>
                  <Text style={{color: 'white'}}>Login</Text>
                </Pressable>
                <View>
                  <Modal
                    animationType="slide"
                    transparent={true}
                    visible={errorModal}
                    onRequestClose={() => {
                      Alert.alert('Modal has been closed.');
                      setErrorModal(!errorModal);
                    }}>
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <Text style={styles.modalText}>
                          Something went wrong
                        </Text>
                        <Pressable
                          style={[styles.button, styles.buttonClose]}
                          onPress={() => setErrorModal(!errorModal)}>
                          <Text style={styles.textStyle}>Close</Text>
                        </Pressable>
                      </View>
                    </View>
                  </Modal>
                </View>
              </ScrollView>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginFullMainScreen: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: 'center',
    width: '100%',
    backgroundColor: PrimaryColor,
  },
  topPart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: PrimaryColor,
  },
  bottomPart: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  loginCard: {},
  imageSetter: {
    // position: "absolute",
    // bottom: "10%",
    // left:"%"
  },
  loginInputFields: {
    margin: '1%',
    // marginVertical: "%",
    flexDirection: 'row',
    backgroundColor: '#eceff7',
    padding: '5%',
    borderRadius: 10,
  },
  loginButton: {
    margin: '1%',
    marginVertical: '5%',
    marginHorizontal: '25%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: PrimaryColor,
    padding: '5%',
    borderRadius: 100,
  },
  inputFieldIcon: {marginRight: '5%'},
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
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
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: PrimaryColor,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default LoginScreen;

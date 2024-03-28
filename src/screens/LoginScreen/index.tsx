import React, {useState} from 'react';
import {
  ScrollView,
  View,
  TextInput,
  StyleSheet,
  Pressable,
  ActivityIndicator,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {login} from '../../api/AccountAPI';
import * as MaterialColors from '../../styles/materialColors';
import RobotoText from '../../components/Text/RobotoText';
import TransactionModal from '../../components/Modals/TransactionModal';
import LoginSettingModal from '../../components/Modals/LoginSettingsModal';
import AsyncStorage from '@react-native-async-storage/async-storage';

// let screenHeight = Dimensions.get('window').height;
// let screenWidth = Dimensions.get('window').width;
// let inputFieldOnFocusBorderColor = {};

interface LoginScreenInterface {
  UserLoggedIn: any;
  settingsClicked: any;
}

function LoginScreen(props: LoginScreenInterface) {
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('1q2w3E*');
  const [isTransactionModalVisible, setIsTransactionModalVisible] =
    useState(false);
  const [transactionModalStatus, setTransactionModalStatus] = useState(0);
  const [transactionStatusMessage, setTransactionStatusMessage] =
    useState('--');
  const [loginActivity, setLoginActivity] = useState(false);
  const [isLoginSettingModal, setIsLoginSettingModal] = useState(false);

  function setTransactionModalState(errorState: number) {
    if (errorState == 1) {
      setIsTransactionModalVisible(true);
      setTransactionModalStatus(1);
      setTransactionStatusMessage('Success.');
      setIsTransactionModalVisible(true);
    } else if (errorState == 0) {
      setIsTransactionModalVisible(true);
      setTransactionModalStatus(0);
      setTransactionStatusMessage('Something went wrong.');
      setIsTransactionModalVisible(true);
    } else {
      setIsTransactionModalVisible(true);
      setTransactionModalStatus(-1);
      setTransactionStatusMessage('Warning');
      setIsTransactionModalVisible(true);
    }
  }

  const startLogin = async (username: string, password: string) => {
    setLoginActivity(true);
    await login({username, password})
      .then(data => {
        AsyncStorage.setItem('UserAuthData', JSON.stringify(data.data))
        props.UserLoggedIn();
        // navigation.navigate('Home');
      })
      .catch(error => {
        setTransactionModalState(0);
      })
      .then(data => {
        setLoginActivity(false);
      });
  };

  const [inputFieldOnFocusBorderColor, setinputFieldOnFocusBorderColor] =
    useState({});
  const [
    inputFieldOnFocusBorderColorUsername,
    setinputFieldOnFocusBorderColorUsername,
  ] = useState({});

  return (
    <View style={styles.loginFullMainScreen}>
      <StatusBar
        animated={true}
        backgroundColor={MaterialColors.MaterialDeepPurple}
        hidden={false}
      />
      <View style={styles.topPart}>
        <View style={[{alignItems: 'center'}]}>
          <RobotoText
            isBold={true}
            text="CaliGen"
            textStyle={{
              color: MaterialColors.MaterialBlack,
              fontSize: 60,
              marginTop: '30%',
            }}
            numberOfLines={0}
          />
          <RobotoText
            text="Login to continue"
            textStyle={{
              color: MaterialColors.MaterialBlueGreyLight,
              fontSize: 30,
            }}
            isBold={false}
            numberOfLines={0}
          />
        </View>
      </View>
      <View style={styles.bottomPart}>
        <ScrollView
          scrollEnabled={false}
          keyboardShouldPersistTaps="handled"
          automaticallyAdjustKeyboardInsets={true}>
          <View style={styles.bottomPart}>
            <View style={{flex: 1}}>
              <ScrollView
                style={{
                  marginVertical: '3%',
                  marginHorizontal: '0%',
                  flex: 1,
                }}>
                <View
                  style={[
                    styles.loginInputFields,
                    inputFieldOnFocusBorderColorUsername,
                  ]}>
                  <AntDesign
                    name="user"
                    size={24}
                    color={MaterialColors.MaterialDeepPurple}
                    style={{marginRight: '5%'}}
                  />
                  <TextInput
                    onBlur={() =>
                      setinputFieldOnFocusBorderColorUsername({
                        borderWidth: 0,
                      })
                    }
                    onFocus={() =>
                      setinputFieldOnFocusBorderColorUsername({
                        borderWidth: 1,
                        borderColor: MaterialColors.MaterialDeepPurple,
                      })
                    }
                    autoCapitalize="none"
                    autoComplete="password-new"
                    autoCorrect={false}
                    placeholder="Username"
                    style={styles.inputFieldIcon}
                    onChangeText={value => setUsername(value)}
                    value={username}></TextInput>
                </View>
                <View
                  style={[
                    styles.loginInputFields,
                    inputFieldOnFocusBorderColor,
                  ]}>
                  <MaterialIcons
                    style={{marginRight: '5%'}}
                    name="password"
                    size={24}
                    color={MaterialColors.MaterialDeepPurple}
                  />
                  <TextInput
                    onBlur={() =>
                      setinputFieldOnFocusBorderColor({
                        borderWidth: 0,
                      })
                    }
                    onFocus={() =>
                      setinputFieldOnFocusBorderColor({
                        borderWidth: 1,
                        borderColor: MaterialColors.MaterialDeepPurple,
                      })
                    }
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
                  onPress={() => startLogin(username, password)}>
                  {!loginActivity && (
                    <RobotoText
                      text="Login"
                      textStyle={{
                        color: MaterialColors.MaterialWhite,
                        fontWeight: 'bold',
                      }}
                      isBold={false}
                      numberOfLines={0}
                    />
                  )}

                  {loginActivity && (
                    <ActivityIndicator
                      size="small"
                      color={MaterialColors.MaterialWhite}
                    />
                  )}
                </Pressable>
                <Pressable
                  style={styles.forgotPasswordButton}
                  onPress={() => {}}>
                  <RobotoText
                    text="Forgot Password?"
                    textStyle={{
                      color: MaterialColors.MaterialDeepPurple,
                      fontWeight: 'bold',
                    }}
                    isBold={false}
                    numberOfLines={0}
                  />
                </Pressable>
                <View>
                  <TransactionModal
                    visible={isTransactionModalVisible}
                    onClose={() => setIsTransactionModalVisible(false)}
                    status={transactionModalStatus}
                    message={transactionStatusMessage}
                  />
                </View>
              </ScrollView>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}>
            <RobotoText
              text="Don't have an account? "
              textStyle={{
                color: MaterialColors.MaterialBlueGreyLight,
                fontWeight: 'bold',
              }}
              isBold={false}
              numberOfLines={0}
            />
            <RobotoText
              text=" Register"
              textStyle={{
                color: MaterialColors.MaterialDeepPurple,
                fontWeight: 'bold',
              }}
              isBold={false}
              numberOfLines={0}
            />
          </View>
        </ScrollView>
      </View>
      <LoginSettingModal
        visible={isLoginSettingModal}
        onSubmit={() => setIsLoginSettingModal(false)}
        onCancel={() => setIsLoginSettingModal(false)}
        message={''}
      />
      <View
        style={{
          alignItems: 'flex-end',
          marginHorizontal: 10,
          marginVertical: 5,
        }}>
        <TouchableOpacity onPress={() => setIsLoginSettingModal(true)}>
          <View style={{}}>
            <Ionicons
              name="settings-sharp"
              size={24}
              color={MaterialColors.MaterialBLueGreyMediumLight}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loginFullMainScreen: {
    flex: 1,
    width: '100%',
    backgroundColor: MaterialColors.MaterialWhite,
  },
  topPart: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  bottomPart: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
  loginCard: {},
  imageSetter: {},
  loginInputFields: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '1%',
    flexDirection: 'row',
    backgroundColor: MaterialColors.MaterialIndigo,
    padding: '5%',
    borderRadius: 20,
    height: 65,
  },
  loginButton: {
    margin: '1%',
    marginVertical: '5%',
    marginHorizontal: '25%',
    width: '50%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: MaterialColors.MaterialDeepPurple,
    padding: '5%',
    borderRadius: 100,
    elevation: 5,
    shadowColor: 'black',
  },
  forgotPasswordButton: {
    // margin: '1%',
    // marginVertical: '5%',
    marginHorizontal: '25%',
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // backgroundColor: MaterialColors.MaterialDeepPurple,
    // padding: '5%',
    // borderRadius: 100,
    // elevation: 5,
    // shadowColor: 'white',
    // shadowColor: 'black',
  },
  inputFieldIcon: {borderColor: 'black', width: '80%', height: 50},
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
    backgroundColor: MaterialColors.MaterialDeepPurple,
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

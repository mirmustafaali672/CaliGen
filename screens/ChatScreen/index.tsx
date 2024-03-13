import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
  FlatList,
  StatusBar,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  PrimaryColor,
  LightPrimaryColor,
} from '../../styles/primaryScreenColors';
import { SendUserMessageToApi } from "../../api/ChatScreenAPI";

function ChatScreen() {
  const [optionSelected, setOptionSelected] = useState(false);
  const [menuSelected, setMenuSelected] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [recordingStarted, setRrecordigngStarted] = useState(false);
  const [text, setText] = useState('');


  useEffect(() => {
    if (chatHistory.length != 0) {
      console.log("-1", chatHistory[chatHistory.length - 1]);
      if (chatHistory[chatHistory.length - 1].messageType == 1) {
        setLoading(true);
        sendUserMessageToApi(message);
        setMessage("");
      }
    }
  }, [chatHistory]);

  const sendUserMessageToApi = async (message) => {
    console.log("{ username, password }", message);

    await SendUserMessageToApi({ message })
      .then((data) => {
        setChatHistory([
          ...chatHistory,
          { message: "success", messageType: 2 },
        ]);
        setLoading(false);
      })
      .catch((error) => {
        console.log("chatHistory", chatHistory, "b");
        setChatHistory([
          ...chatHistory,
          { message: "Something went wrong.", messageType: 2 },
        ]);
        setLoading(false);
        console.log("chat ad", chatHistory);
      })
      .then(() => {
        setLoading(false);
      });
  };
  return (
    <View style={{flex: 1}}>
      <ScrollView
        horizontal
        scrollEnabled={false}
        keyboardShouldPersistTaps="handled"
        automaticallyAdjustKeyboardInsets={true}
        contentContainerStyle={{flex: 1, flexGrow: 1}}>
        <View style={{flex: 1}}>
          <View style={{flex: 10}}>
            <SafeAreaView style={{flex: 1}}>
              <FlatList
                inverted
                contentContainerStyle={{flexDirection: 'column-reverse'}}
                keyExtractor={item => item.message + Math.random() + new Date()}
                data={chatHistory}
                ref={ref => {
                  this.listViewRef = ref;
                }}
                //   onContentSizeChange={() => this.listViewRef.scrollToEnd({ animated: true })}
                renderItem={({item}) => {
                  return (
                    <View
                      style={[
                        item.messageType == 1
                          ? {alignItems: 'flex-end', paddingLeft: '25%'}
                          : {alignItems: 'flex-start', paddingRight: '25%'},
                        styles.container,
                      ]}>
                      <View
                        style={[
                          item.messageType == 1
                            ? styles.chatUserMessageClass
                            : styles.chatResponseMessageClass,
                          styles.chatBubbleCommon,
                        ]}>
                        <Text
                          style={[
                            styles.chatBubbleCommonText,
                            item.messageType == 1
                              ? styles.chatUserMessageTextClass
                              : styles.chatResponseMessageTextClass,
                          ]}>
                          {item.message}
                        </Text>
                      </View>
                    </View>
                  );
                }}
              />
            </SafeAreaView>
          </View>
          <View style={{flex: 1, flexDirection: 'row', gap: 10}}>
            <View style={{flex: 5}}>
              <TextInput
                // autoCapitalize="none"
                // autoComplete="password-new"
                // autoCorrect={false}
                placeholder="Type a message"
                style={{
                  marginHorizontal: 4,
                  borderWidth: 2,
                  borderRadius: 10,
                  borderColor: PrimaryColor,
                }}
                  onChangeText={(value) => setMessage(value)}
                  value={message}
              ></TextInput>
            </View>
            <View style={{flex: 1}}>
              <Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: PrimaryColor,
                  borderRadius: 10,
                  height: '80%',
                  width: '100%',
                }}
                onPress={() => {
                  setChatHistory([
                    ...chatHistory,
                    {message: message, messageType: 1},
                  ]);
                }}>
                <MaterialIcons
                  name="send"
                  style={{alignItems: 'center', justifyContent: 'center'}}
                  size={24}
                  color={'white'}
                />
              </Pressable>
            </View>
            <View style={{flex: 1, marginRight: 4}}>
              <Pressable
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: PrimaryColor,
                  borderRadius: 10,
                  height: '80%',
                  width: '100%',
                }}
                onPress={() => {
                  console.log('recording started');
                  setRecordingStatus();
                }}>
                <FontAwesome
                  name="microphone"
                  style={{alignItems: 'center', justifyContent: 'center'}}
                  size={24}
                  color={'white'}
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  BottomChatArea: {
    position: 'absolute',
    bottom: 0,
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  Header: {
    flex: 3,
    backgroundColor: PrimaryColor,
  },
  Body: {
    flex: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  centeredViewLeftEnd: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginTop: 25,
  },
  ModelViewRightStart: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    marginTop: 25,
  },
  modalView: {
    // top:"50%",
    // width: "50%",
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
  sendMessageInputFields: {
    margin: 0,
    // marginVertical: "%",
    flexDirection: 'row',
    backgroundColor: '#eceff7',
    padding: '1%',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: PrimaryColor,
    // width: 50,
    height: 54,
  },
  container: {
    padding: '1%',
  },
  chatUserMessageClass: {
    backgroundColor: LightPrimaryColor,
    color: 'black',
    borderBottomRightRadius: 0,
    // alignItems: "flex-end",
  },
  chatUserMessageTextClass: {
    color: '#000000',
  },
  chatResponseMessageClass: {
    backgroundColor: PrimaryColor,
    color: 'white',
    borderBottomLeftRadius: 0,
  },
  chatResponseMessageTextClass: {
    color: '#FFFFFF',
  },
  chatBubbleCommon: {
    borderWidth: 0,
    borderColor: '#20232a',
    borderRadius: 10,
    margin: '2%',
    // width: "75%",
  },
  chatBubbleCommonText: {
    fontSize: 16,
    padding: 10,
  },
});

export default ChatScreen;

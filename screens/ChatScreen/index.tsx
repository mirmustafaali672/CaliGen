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
  PrimaryBGColor
} from '../../styles/primaryScreenColors';
import { SendUserMessageToApi } from "../../api/ChatScreenAPI";
import Voice from '@react-native-voice/voice';
import ResponseLoadingComponent from '../../components/Loader/ResponseLoadingComponent';
import * as MaterialColors from '../../styles/materialColors';

function ChatScreen() {
  const [optionSelected, setOptionSelected] = useState(false);
  const [menuSelected, setMenuSelected] = useState(false);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);
  const [recordingStarted, setRecordingStarted] = useState(false);
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

    await SendUserMessageToApi(message)
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

  const [pitch, setPitch] = useState('');
  const [error, setError] = useState('');
  const [end, setEnd] = useState('');
  const [started, setStarted] = useState('');
  const [results, setResults] = useState([]);
  const [partialResults, setPartialResults] = useState([]);

  useEffect(() => {
    //Setting callbacks for the process status
    Voice.onSpeechStart = onSpeechStart;
    Voice.onSpeechEnd = onSpeechEnd;
    Voice.onSpeechError = onSpeechError;
    Voice.onSpeechResults = onSpeechResults;
    Voice.onSpeechPartialResults = onSpeechPartialResults;
    Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;

    return () => {
      //destroy the process after switching the screen
      Voice.destroy().then(Voice.removeAllListeners);
    };
  }, []);

  const onSpeechStart = (e) => {
    //Invoked when .start() is called without error
    console.log('onSpeechStart: ', e);
    setStarted('√');
    setRecordingStarted(true);
  };

  const onSpeechEnd = (e) => {
    //Invoked when SpeechRecognizer stops recognition
    console.log('onSpeechEnd: ', e);
    setEnd('√');
    setRecordingStarted(false);
  };

  const onSpeechError = (e) => {
    //Invoked when an error occurs.
    console.log('onSpeechError: ', e);
    setError(JSON.stringify(e.error));
    setRecordingStarted(false);
  };

  const onSpeechResults = (e) => {
    //Invoked when SpeechRecognizer is finished recognizing
    console.log('onSpeechResults: ', e);
    setResults(e.value);
    setMessage(e.value[0]);
    setRecordingStarted(false);
  };

  const onSpeechPartialResults = (e) => {
    //Invoked when any results are computed
    console.log('onSpeechPartialResults: ', e);
    setPartialResults(e.value);
  };

  const onSpeechVolumeChanged = (e) => {
    //Invoked when pitch that is recognized changed
    console.log('onSpeechVolumeChanged: ', e);
    setPitch(e.value);
  };

  const startRecognizing = async () => {
    if(recordingStarted)
    {
      await cancelRecognizing();
      setRecordingStarted(false);
      return; 
    }
    //Starts listening for speech for a specific locale
    try {
      await Voice.start('en-US');
      setPitch('');
      setError('');
      setStarted('');
      setRecordingStarted(true);
      setResults([]);
      setPartialResults([]);
      setEnd('');
      setRecordingStarted(false);
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const stopRecognizing = async () => {
    //Stops listening for speech
    try {
      await Voice.stop();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const cancelRecognizing = async () => {
    //Cancels the speech recognition
    try {
      await Voice.cancel();
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };

  const destroyRecognizer = async () => {
    //Destroys the current SpeechRecognizer instance
    try {
      await Voice.destroy();
      setPitch('');
      setError('');
      setStarted('');
      setResults([]);
      setPartialResults([]);
      setEnd('');
    } catch (e) {
      //eslint-disable-next-line
      console.error(e);
    }
  };



  return (
    <View style={{flex: 1, backgroundColor: PrimaryBGColor}}>
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
              {loading && (
                  <View
                    style={{
                        flex: 0.1,
                      height: 8,
                      flexDirection: "row",
                      marginLeft: "3%",
                      alignItems: "center",
                    }}
                  >
                    <ResponseLoadingComponent order="1" />
                    <ResponseLoadingComponent order="2" />
                    <ResponseLoadingComponent order="3" />
                    <ResponseLoadingComponent order="4" />
                  </View>
                )}
            </SafeAreaView>
          </View>
          <View style={{flex: 1, flexDirection: 'row', gap: 10, marginHorizontal: 10}}>
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
                  borderColor: MaterialColors.MaterialDeepPurple,
                }}
                  onChangeText={(value) => setMessage(value)}
                  value={message}
              ></TextInput>
            </View>
            <View style={{flex: 1}}>
              <Pressable disabled={loading}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: MaterialColors.MaterialDeepPurple,
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
                style={ [styles.microphoneButtonNotListening, { borderColor: recordingStarted ?  MaterialColors.MaterialRed :  MaterialColors.MaterialDeepPurple }] }
                onPress={startRecognizing}>
                <FontAwesome
                  name= {recordingStarted ? "microphone-slash" : "microphone" } 
                  style={{alignItems: 'center', justifyContent: 'center'}}
                  size={24}
                  color={ recordingStarted ? "red" :  MaterialColors.MaterialDeepPurple}
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
    backgroundColor: MaterialColors.MaterialDeepPurple,
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
  sendMessageInputFields: {
    margin: 0,
    // marginVertical: "%",
    flexDirection: 'row',
    backgroundColor: '#eceff7',
    padding: '1%',
    borderRadius: 100,
    borderWidth: 2,
    borderColor: MaterialColors.MaterialDeepPurple,
    // width: 50,
    height: 54,
  },
  container: {
    padding: '1%',
  },
  chatUserMessageClass: {
    backgroundColor: MaterialColors.MaterialLightDeepPurple,
    color: MaterialColors.MaterialBlueGreyLight,
    borderBottomRightRadius: 0,
    // alignItems: "flex-end",
  },
  chatUserMessageTextClass: {
    color: '#000000',
  },
  chatResponseMessageClass: {
    backgroundColor: MaterialColors.MaterialDeepPurple,
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
  microphoneButtonNotListening: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "white",
    borderRadius: 10,
    height: '80%',
    width: '100%',
    // borderColor: MaterialColors.MaterialDeepPurple,
    borderWidth: 2
  }
});

export default ChatScreen;

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
import {SendUserMessageToApi} from '../../api/ChatScreenAPI';
import Voice from '@react-native-voice/voice';
import ResponseLoadingComponent from '../../components/Loader/ResponseLoadingComponent';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import {Schemes} from '../../styles/MaterialColorThemeInterface';

interface ChatScreenInterface {
  message: string;
  messageType: number;
}

function ChatScreen() {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
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
      backgroundColor: MaterialColorTheme.primary,
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
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: MaterialColorTheme.primary,
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
      borderColor: MaterialColorTheme.primary,
      width: 50,
      height: 50,
    },
    chatUserMessageClass: {
      backgroundColor: MaterialColorTheme.onSurfaceVariant,
      borderBottomRightRadius: 0,
      // alignItems: "flex-end",
    },
    chatUserMessageTextClass: {
      color: '#000000',
    },
    chatResponseMessageClass: {
      backgroundColor: MaterialColorTheme.primary,
      color: MaterialColorTheme.onPrimary,
      borderBottomLeftRadius: 0,
    },
    chatResponseMessageTextClass: {
      color: MaterialColorTheme.onPrimary,
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
      backgroundColor: MaterialColorTheme.onSurface,
      borderRadius: 10,
      height: 50,
      width: 50,
      // borderColor: MaterialColorTheme.primary,
      borderWidth: 2,
    },
  });

  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [chatHistory, setChatHistory] = useState<ChatScreenInterface[]>([]);
  const [recordingStarted, setRecordingStarted] = useState(false);

  useEffect(() => {
    if (chatHistory.length != 0) {
      if (chatHistory[chatHistory.length - 1].messageType == 1) {
        setLoading(true);
        sendUserMessageToApi(message);
        setMessage('');
      }
    }
  }, [chatHistory]);

  const sendUserMessageToApi = async (message: string) => {
    await SendUserMessageToApi(message)
      .then(data => {
        setChatHistory([...chatHistory, {message: 'success', messageType: 2}]);
        setLoading(false);
      })
      .catch(error => {
        setChatHistory([
          ...chatHistory,
          {message: 'Something went wrong.', messageType: 2},
        ]);
        setLoading(false);
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

  const onSpeechStart = e => {
    //Invoked when .start() is called without error
    setStarted('√');
    setRecordingStarted(true);
  };

  const onSpeechEnd = e => {
    //Invoked when SpeechRecognizer stops recognition
    setEnd('√');
    setRecordingStarted(false);
  };

  const onSpeechError = e => {
    //Invoked when an error occurs.
    setError(JSON.stringify(e.error));
    setRecordingStarted(false);
  };

  const onSpeechResults = e => {
    //Invoked when SpeechRecognizer is finished recognizing
    setResults(e.value);
    setMessage(e.value[0]);
    setRecordingStarted(false);
  };

  const onSpeechPartialResults = e => {
    //Invoked when any results are computed
    setPartialResults(e.value);
  };

  const onSpeechVolumeChanged = e => {
    //Invoked when pitch that is recognized changed
    setPitch(e.value);
  };

  const startRecognizing = async () => {
    if (recordingStarted) {
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
    <View style={{flex: 1, backgroundColor: MaterialColorTheme.surface}}>
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
                    flexDirection: 'row',
                    marginLeft: '3%',
                    alignItems: 'center',
                  }}>
                  <ResponseLoadingComponent order="1" />
                  <ResponseLoadingComponent order="2" />
                  <ResponseLoadingComponent order="3" />
                  <ResponseLoadingComponent order="4" />
                </View>
              )}
            </SafeAreaView>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              gap: 10,
              marginHorizontal: 10,
            }}>
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
                  borderColor: MaterialColorTheme.primary,
                  height: 50,
                }}
                onChangeText={value => setMessage(value)}
                value={message}></TextInput>
            </View>
            <View style={{flex: 1}}>
              <Pressable
                disabled={loading}
                style={{
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: MaterialColorTheme.primary,
                  borderRadius: 10,
                  height: 50,
                  width: 50,
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
                  color={MaterialColorTheme.onPrimary}
                />
              </Pressable>
            </View>
            <View style={{flex: 1, marginRight: 4}}>
              <Pressable
                style={[
                  styles.microphoneButtonNotListening,
                  {backgroundColor: MaterialColorTheme.primary,
                    borderColor: recordingStarted
                      ? MaterialColorTheme.onTertiary
                      : MaterialColorTheme.primary,
                  },
                ]}
                onPress={startRecognizing}>
                <FontAwesome
                  name={recordingStarted ? 'microphone-slash' : 'microphone'}
                  style={{alignItems: 'center', justifyContent: 'center'}}
                  size={24}
                  color={
                    recordingStarted
                      ? MaterialColorTheme.onTertiary
                      : MaterialColorTheme.onPrimary
                  }
                />
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default ChatScreen;

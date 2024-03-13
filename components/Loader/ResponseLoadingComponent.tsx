import React, {useState, useEffect, useRef} from 'react';
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
  Animated,
  Easing,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {
  PrimaryColor,
  LightPrimaryColor,
} from '../../styles/primaryScreenColors';
import { SendUserMessageToApi } from "../../api/ChatScreenAPI";
import Voice from '@react-native-voice/voice';

const ResponseLoadingComponent = (props: LoaderDelayOrder) => {
    const translation = useRef(new Animated.Value(0)).current;
  
    useEffect(() => {
      setTimeout(() => {
        Animated.loop(
          Animated.sequence([
            Animated.timing(translation, {
              toValue: -10,
              duration: 500,
              useNativeDriver: true,
              // delay: 50 * props.order
            }),
            Animated.timing(translation, {
              toValue: 10,
              duration: 500,
              useNativeDriver: true,
              // delay: 50 * props.order
            }),
            Animated.timing(translation, {
              toValue: 0,
              duration: 500,
              useNativeDriver: true,
              // delay: 50 * props.order
            }),
          ])
          // ,
          // {
          //   iterations: 4
          // }
        ).start();
      }, 100 * props.order);
    }, []);
    return (
      <Animated.View
        style={[
          {
            width: 10,
            height: 10,
            borderRadius: 100,
            backgroundColor: PrimaryColor,
            transform: [{ translateY: translation }],
            marginLeft: 2,
          },
        ]}
      />
    );
  };
  

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

  export default ResponseLoadingComponent;
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ObjectScreenHeader from '../../components/ScreenHeader/ObjectScreenHeader';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import {
  Camera,
  useCameraDevice,
  useCameraPermission,
  useCodeScanner,
} from 'react-native-vision-camera';
import {useState} from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RobotoText from '../../components/Text/RobotoText';

interface QRScannerMainScreenInterface {
  navigation: any;
}
function QRScannerMainScreen(props: QRScannerMainScreenInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const {hasPermission, requestPermission} = useCameraPermission();
  const [openCamera, setOpenCamera] = useState(false);
  if (hasPermission == false) {
    requestPermission();
  }
  const device = useCameraDevice('back');
  const codeScanner = useCodeScanner({
    codeTypes: ['qr', 'ean-13'],
    onCodeScanned: codes => {
      if (codes[0].value) {
        setOpenCamera(false);
        props.navigation.navigate('QRScannerResultScreen', {
          result: codes[0].value,
        });
      }
    },
  });

  return (
    <View style={{flex: 1, backgroundColor: MaterialColorTheme.surface}}>
      <ObjectScreenHeader
        headerTitle={'Scanner'}
        showCreateEntityButton={false}
        showDeleteEntityButton={false}
        createBuutonClickNavigationRoute={undefined}
        navigation={props.navigation}
      />
      <View
        style={{
          flex: 2,
          backgroundColor: MaterialColorTheme.secondaryContainer,
          margin: 25,
          borderRadius: 10,
        }}>
        {device && openCamera && (
          <Camera
            style={{flex: 1, borderRadius: 10}}
            device={device}
            isActive={true}
            codeScanner={codeScanner}
          />
        )}
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: MaterialColorTheme.surface,
          margin: 25,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => setOpenCamera(!openCamera)}
          style={{
            backgroundColor: MaterialColorTheme.primary,
            padding: 20,
            alignItems: 'center',
            borderRadius: 100,
            flexDirection: 'row',
            justifyContent: 'center',
            width: '90%',
            shadowColor: MaterialColorTheme.shadow,
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 4,
            elevation: 3,
          }}>
          <MaterialCommunityIcons
            name="qrcode-scan"
            color={MaterialColorTheme.onPrimary}
            size={30}
          />
          <RobotoText
            text={openCamera ? 'Stop Scanning' : 'Start Scanning'}
            textStyle={{
              color: MaterialColorTheme.onPrimary,
              marginHorizontal: 10,
              fontSize: 18,
            }}
            isBold={false}
            numberOfLines={0}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default QRScannerMainScreen;

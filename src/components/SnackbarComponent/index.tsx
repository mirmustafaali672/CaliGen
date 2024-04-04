import {useEffect, useState} from 'react';
import {Dimensions, TouchableOpacity, View} from 'react-native';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';
import RobotoText from '../Text/RobotoText';

interface SanckbarComponentInterface {
  message: string;
  duration?: number;
  position: 'top' | 'bottom';
  visible: boolean;
  onDurationEnd: any;
  showActionButton: boolean;
  actibButtonText: string;
  onActionButtonClick: any;
  showCloseButton: boolean;
}
const height = Dimensions.get('screen').height;

function SanckbarComponent(props: SanckbarComponentInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  const [isVisible, setIsVisible] = useState(props.visible);
  useEffect(() => {
    setTimeout(() => {
      props.onDurationEnd();
    }, props.duration ?? 2000);
  }, [isVisible]);

  return (
    <View
      style={{
        position: 'absolute',
        alignItems: 'center',
        top: props.position == 'top' ? height / 300 : undefined,
        bottom: props.position == 'bottom' ? height / 25 : undefined,
        width: '100%',
        height: 30,
        zIndex: 2,
      }}>
      {props.visible && (
        <View
          style={{
            position: 'absolute',
            alignItems: 'center',
            top: 10,
            backgroundColor: MaterialColorTheme.onSurfaceVariant,
            width: '90%',
            minHeight: 50,
            zIndex: 2,
            borderRadius: 6,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            shadowColor: MaterialColorTheme.shadow,
            elevation: 20,
          }}>
          <View style={{flex: 3}}>
            <RobotoText
              text={props.message}
              textStyle={{color: MaterialColorTheme.surfaceVariant}}
              isBold={false}
              numberOfLines={0}
            />
          </View>
          <View
            style={{
              flex: props.showActionButton ? 1.2 : 0,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            {props.showActionButton && (
              <TouchableOpacity
                style={{}}
                onPress={() => props.onActionButtonClick()}>
                <RobotoText
                  text={props.actibButtonText}
                  textStyle={{color: MaterialColorTheme.surfaceVariant}}
                  isBold={true}
                  numberOfLines={0}
                />
              </TouchableOpacity>
            )}
            {props.showCloseButton && (
              <TouchableOpacity
                style={{}}
                onPress={() => props.onDurationEnd()}>
                <RobotoText
                  text={'Close'}
                  textStyle={{color: MaterialColorTheme.surfaceVariant}}
                  isBold={true}
                  numberOfLines={0}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      )}
    </View>
  );
}
export default SanckbarComponent;

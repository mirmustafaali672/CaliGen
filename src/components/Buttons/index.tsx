import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import RobotoText from '../Text/RobotoText';
import {Schemes} from '../../styles/MaterialColorThemeInterface';
import MaterialColorThemeSelector from '../../styles/MaterialColorSchemeSelector';

interface ButtonComponentInterface {
  buttonClicked: any;
  buttonTitle: string;
  buttonIcon: any;
  iconAtEnd: boolean;
  isActivityOnButton?: boolean;
  disableButton?: boolean;
  type: 'Primary' | 'Secondary' | 'Tertiary';
}

function ButtonComponent(props: ButtonComponentInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  var backgroundColor: string =
    props.type == 'Primary'
      ? MaterialColorTheme.primary
      : props.type == 'Secondary'
      ? MaterialColorTheme.secondaryContainer
      : MaterialColorTheme.tertiary;
  var textColor: string =
    props.type == 'Primary'
      ? MaterialColorTheme.onPrimary
      : props.type == 'Secondary'
      ? MaterialColorTheme.onSecondaryContainer
      : MaterialColorTheme.onTertiary;
  const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 10,
      flexDirection: 'row',
      borderWidth: 2,
      borderColor: backgroundColor,
      shadowColor: MaterialColorTheme.shadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 1,
    },
  });
  return (
    <View>
      <TouchableOpacity
        style={[styles.container]}
        onPress={() => props.buttonClicked()}>
        {!props.isActivityOnButton && (
          <View>
            {!props.iconAtEnd && props.buttonIcon}
            <View>
              <RobotoText
                textStyle={{color: textColor}}
                text={props.buttonTitle}
                isBold={false}
                numberOfLines={0}
              />
            </View>
          </View>
        )}
        {props.iconAtEnd && props.buttonIcon}
        {props.isActivityOnButton && (
          <ActivityIndicator size="small" color={textColor} />
        )}
      </TouchableOpacity>
    </View>
  );
}

export default ButtonComponent;

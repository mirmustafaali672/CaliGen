import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
  StyleProp,
  ViewStyle,
  TextStyle,
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
  buttonStyle?: StyleProp<ViewStyle>;
  buttonTextStyle?: StyleProp<TextStyle>;
  type: 'Primary' | 'Secondary' | 'Tertiary' | 'Danger';
  inverse?: boolean;
  radius?: number;
  borderWidth?: number;
}

function ButtonComponent(props: ButtonComponentInterface) {
  const MaterialColorTheme: Schemes = MaterialColorThemeSelector();
  var backgroundColor: string =
    props.type == 'Primary'
      ? MaterialColorTheme.primary
      : props.type == 'Secondary'
      ? MaterialColorTheme.secondaryContainer
      : props.type == 'Danger'
      ? MaterialColorTheme.error
      : MaterialColorTheme.tertiaryContainer;
  var textColor: string =
    props.type == 'Primary'
      ? MaterialColorTheme.onPrimary
      : props.type == 'Secondary'
      ? MaterialColorTheme.onSecondaryContainer
      : props.type == 'Danger'
      ? MaterialColorTheme.onError
      : MaterialColorTheme.onTertiaryContainer;
      var borderColor : string =
      props.type == 'Primary'
        ? MaterialColorTheme.primary
        : props.type == 'Secondary'
        ? MaterialColorTheme.secondaryContainer
        : props.type == 'Danger'
        ? MaterialColorTheme.error
        : MaterialColorTheme.tertiaryContainer;
  if (props.inverse) {
    textColor = backgroundColor;
    backgroundColor = MaterialColorTheme.surface;
  }
  const styles = StyleSheet.create({
    container: {
      backgroundColor: backgroundColor,
      padding: 10,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: props.radius ? props.radius : 10,
      flexDirection: 'row',
      borderWidth: props.borderWidth ? props.borderWidth : 0,
      borderColor: borderColor,
      shadowColor: MaterialColorTheme.shadow,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: props.inverse ? 0 : 1,
    },
  });
  return (
    <TouchableOpacity
      style={[styles.container, props.buttonStyle]}
      disabled={props.disableButton}
      onPress={() => props.buttonClicked()}>
      {!props.iconAtEnd && !props.isActivityOnButton && props.buttonIcon}
      {!props.isActivityOnButton && (
        <RobotoText
          textStyle={[{color: textColor}, props.buttonTextStyle]}
          text={props.buttonTitle}
          isBold={false}
          numberOfLines={0}
        />
      )}
      {props.iconAtEnd && !props.isActivityOnButton && props.buttonIcon}

      {props.isActivityOnButton && (
        <ActivityIndicator size="small" color={textColor} />
      )}
    </TouchableOpacity>
  );
}

export default ButtonComponent;
